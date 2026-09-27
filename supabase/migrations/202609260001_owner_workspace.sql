-- Additive Zotoz pilot migration. Does not change existing business tables.
begin;
create table if not exists public.zotoz_owner_workspaces (
  owner_id uuid primary key references auth.users(id) on delete cascade,
  document jsonb not null default '{}'::jsonb,
  revision integer not null default 0,
  updated_at timestamptz not null default now(),
  constraint zotoz_document_size check (octet_length(document::text) <= 2000000)
);
alter table public.zotoz_owner_workspaces enable row level security;
create policy "zotoz_owner_read" on public.zotoz_owner_workspaces for select to authenticated using ((select auth.uid()) = owner_id);
create policy "zotoz_owner_insert" on public.zotoz_owner_workspaces for insert to authenticated with check ((select auth.uid()) = owner_id);
create policy "zotoz_owner_update" on public.zotoz_owner_workspaces for update to authenticated using ((select auth.uid()) = owner_id) with check ((select auth.uid()) = owner_id);
grant select, insert, update on public.zotoz_owner_workspaces to authenticated;
revoke all on public.zotoz_owner_workspaces from anon;

create or replace function public.zotoz_save_workspace(expected_revision integer, next_document jsonb)
returns table(document jsonb, revision integer)
language plpgsql security invoker set search_path = '' as $$
begin
  return query update public.zotoz_owner_workspaces w
    set document = next_document, revision = w.revision + 1, updated_at = now()
    where w.owner_id = (select auth.uid()) and w.revision = expected_revision
    returning w.document, w.revision;
  if not found then raise exception 'Workspace revision changed' using errcode = '40001'; end if;
end;
$$;
revoke all on function public.zotoz_save_workspace(integer,jsonb) from public, anon;
grant execute on function public.zotoz_save_workspace(integer,jsonb) to authenticated;

create table if not exists public.zotoz_ai_usage (
  owner_id uuid not null references auth.users(id) on delete cascade,
  usage_day date not null,
  requests integer not null default 0,
  last_request_at timestamptz not null default now(),
  primary key(owner_id,usage_day)
);
alter table public.zotoz_ai_usage enable row level security;
revoke all on public.zotoz_ai_usage from public, anon, authenticated;
-- The definer function can only increment the caller's counter, never reset it.
create or replace function public.zotoz_reserve_ai_request()
returns boolean language plpgsql security definer set search_path = '' as $$
declare result boolean;
begin
  if auth.uid() is null then return false; end if;
  insert into public.zotoz_ai_usage as u(owner_id,usage_day,requests,last_request_at)
    values(auth.uid(), (now() at time zone 'UTC')::date, 1, now())
    on conflict(owner_id,usage_day) do update
      set requests = u.requests + 1, last_request_at = now()
      where u.requests < 50 and u.last_request_at <= now() - interval '5 seconds'
    returning true into result;
  return coalesce(result,false);
end;
$$;
revoke all on function public.zotoz_reserve_ai_request() from public, anon;
grant execute on function public.zotoz_reserve_ai_request() to authenticated;
commit;
