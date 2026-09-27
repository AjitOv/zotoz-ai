# Zotoz AI

An AI business operating system for SMEs, with a sample dashboard and a separate authenticated owner-agent pilot.

- Live site: https://zotoz-ai.vercel.app
- Owner workspace: https://zotoz-ai.vercel.app/#teach
- GitHub: https://github.com/AjitOv/zotoz-ai (private)

## Owner workspace

The owner saves a business interview, generates and approves a playbook, reviews AI recommendations for customer requests, and receives a daily brief. Supabase provides email sign-in and private business storage. Server-side Gemini or OpenAI calls draft playbooks, recommendations, and briefs. Every recommendation needs owner approval; replies are copied for manual sending.

See [SETUP.md](SETUP.md) for environment variables, the SQL migration, sign-in configuration, and pilot limitations. Live features require configured credentials. No live sales, WhatsApp, CRM, or inventory integrations are included.

## Sample dashboard

The marketing homepage and Apex Supplies dashboard use fictional business data. Inquiry replies, follow-ups, tasks, alerts, and the WhatsApp-style assistant are interactive simulations. Demo state resets on refresh and does not enter the live owner workspace.

## Development

Run `npm ci`, then `npm test`. Use `vercel dev` to run the frontend and API together. A static preview (`python3 -m http.server 4178 --directory dist`) can show the marketing and demo screens, but cannot run authentication or live AI.

The frontend is in `dist/`; the Vercel API is `api/owner.js`, shared validation is in `lib/`, and the database migration is in `supabase/migrations/`.

## Deployment

Deploy to the existing Zotoz Vercel project:

```sh
vercel deploy --prod --scope ajitovs-projects
```

GitHub automatic deployments are not connected yet; Vercel needs access to the private repository. Environment files and local deployment metadata are excluded from version control.
