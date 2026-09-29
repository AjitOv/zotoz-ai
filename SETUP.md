# Zotoz owner-agent pilot

The marketing homepage and sample dashboard are separate from the live, authenticated owner workspace. Start opens `/#teach`. No sample business records enter the live AI requests.

## Vercel production environment

Set these in the `zotoz-ai` project's environment settings, then redeploy:

- `SUPABASE_URL`: the dedicated Zotoz project URL.
- `SUPABASE_PUBLISHABLE_KEY`: the project's publishable key (legacy anon key also works). Never use a service-role key here.
- `OPENROUTER_API_KEY`: recommended AI provider key, stored server-side only. When set, Zotoz uses OpenRouter before any other configured AI provider.
- `OPENROUTER_MODEL`: optional OpenRouter model slug; defaults to `openai/gpt-4o-mini`. Choose a model that supports JSON Schema structured outputs in your OpenRouter account.
- `GEMINI_API_KEY`: optional fallback provider key, server-side only. Used when OpenRouter is not configured.
- `GEMINI_MODEL`: optional; defaults to `gemini-3.8-flash`.
- `OPENAI_API_KEY`: optional fallback OpenAI key, used only when neither OpenRouter nor Gemini is configured.
- `OPENAI_MODEL`: optional; defaults to `gpt-5-mini`.
- `OWNER_EMAILS`: comma-separated email addresses invited to the pilot.
- `APP_ORIGIN`: `https://zotoz-ai.vercel.app` (also the default).

The API never returns the keys. Never put provider keys in frontend code, `dist/`, or public environment variables such as `VITE_*`. Authentication tokens are stored in Secure, HttpOnly, SameSite cookies, not browser local storage. The initial email callback tokens are immediately removed from the URL.

## Connect OpenRouter

1. In Vercel, open the `zotoz-ai` project → Settings → Environment Variables.
2. Add `OPENROUTER_API_KEY` with your newly generated OpenRouter key. Select Production (and Preview/Development if needed).
3. Optionally add `OPENROUTER_MODEL` to select a model available to your OpenRouter account that supports JSON Schema structured outputs. Otherwise the code uses `openai/gpt-4o-mini`.
4. Save the variables and redeploy the project. OpenRouter takes precedence over Gemini and OpenAI when multiple provider keys exist.
5. Sign in to the owner workspace and test playbook generation, customer request recommendations, and the daily brief. The existing owner approval and usage-limit safeguards remain in place.

The OpenRouter integration uses the OpenAI-compatible Chat Completions endpoint, requests schema-constrained JSON, and sends Zotoz attribution headers. Keys are never sent to the browser or returned by the API.

## Supabase

1. Run `supabase/migrations/202609260001_owner_workspace.sql` once in the project's SQL Editor. It adds only Zotoz-prefixed tables and functions. Review the migration before running it on a shared project.
2. Under Authentication → URL Configuration, add `https://zotoz-ai.vercel.app/**` to allowed redirect URLs. Preserve existing URLs and the Site URL when the project is shared.
3. Enable email authentication. Keep the sign-in email's confirmation link. For production email delivery, configure your SMTP provider and verify its sender.
4. Open `https://zotoz-ai.vercel.app/#teach` and request a sign-in link using an invited owner email.

Each owner's workspace is protected by `auth.uid()` row-level security. Database saves use optimistic revisions, so another tab cannot silently overwrite newer decisions. The AI quota reserves at most 50 requests per owner per UTC day, with at least five seconds between requests. Configure provider billing limits separately.

## First live workflow

1. Save the owner interview.
2. Generate a draft playbook, review/edit its rules, and approve it.
3. Paste a customer request and verified business facts into Approvals.
4. Review the recommendation and applicable rules. Edit and approve the draft, or reject it with feedback.
5. Copy an approved reply for manual sending. Nothing is sent by the app.
6. Generate a Daily Brief from saved requests and decisions.

Updating the playbook invalidates pending recommendations until they are re-evaluated. Feedback is used only when generating a proposed playbook; it never silently changes active rules.

## Scope and limitations

- Live OpenRouter, Gemini, or OpenAI calls for playbook drafting, customer-request recommendations, and briefs.
- Authenticated Supabase persistence for each owner's interview, playbook versions, requests, decisions, and recent activity.
- No live WhatsApp, CRM, inventory, sales, payments, or autonomous execution connection yet. Verified facts are entered manually.
- This pilot keeps 100 customer requests and the latest 500 activity entries per workspace. It is not an immutable compliance audit log.
- A draft approval records owner approval; it does not claim delivery or execute a transaction.
- Automated tests cover authorization boundaries before provider calls, stale-policy checks, duplicate decisions, validation, and mandatory owner review. Live sign-in, isolation, database migrations, email delivery, and AI output require configured-provider verification before release to additional owners.

## Development

Install with `npm ci`; run `npm test`. Use `vercel dev` to run the API and frontend. For local authenticated use, configure `APP_ORIGIN` and HTTPS because auth cookies are Secure. A plain static server can preview the marketing pages but cannot run the owner API.

Implementation references: [OpenAI structured outputs](https://developers.openai.com/api/docs/guides/structured-outputs), [OpenRouter structured outputs](https://openrouter.ai/docs/guides/features/structured-outputs), [Supabase RLS](https://supabase.com/docs/guides/database/postgres/row-level-security), [Supabase email sign-in](https://supabase.com/docs/reference/javascript/auth-signinwithotp), [Vercel Node.js functions](https://vercel.com/docs/functions/runtimes/node-js).

Gemini reference: [Structured outputs](https://ai.google.dev/gemini-api/docs/generate-content/structured-output).
