# Zotoz AI

A responsive, dependency-free prototype of a local business operating system.

- Live site: https://zotoz-ai.vercel.app
- GitHub: https://github.com/AjitOv/zotoz-ai (private)

## Preview locally

Run `python3 -m http.server 4178 --directory dist` in this directory and open `http://localhost:4178`.

## Included

- Marketing homepage with interactive product preview and a how-it-works dialog.
- Dashboard with sample sales, inquiries, follow-ups, team tasks, and stock alerts.
- Customer inquiry replies with editable suggested drafts.
- Individual or batch follow-ups with message review.
- Task completion, filters, sales period selection, holiday mode, and reviewed alerts.
- A WhatsApp-style assistant that answers common business questions from current demo state.
- Keyboard-accessible native dialogs, responsive navigation, and optional WebMCP tools.

The assistant is a local, rule-based simulation. All business data is fictional; replies and follow-ups do not send external messages. State lasts for the current page session and resets on refresh. There is no authentication, billing, or production data connection.

## Structure

`dist/index.html`, `dist/styles.css`, and `dist/app.js` are the complete site. There is no build step or dependency installation. Vercel serves the `dist` directory using `vercel.json`.

## Deployment

The site is deployed to the `zotoz-ai` project under `ajitovs-projects` on Vercel. To deploy updates from this directory, run:

```sh
vercel deploy --prod --scope ajitovs-projects
```

GitHub automatic deployments are not connected yet: Vercel needs access to the private `AjitOv/zotoz-ai` repository. After granting repository access to the Vercel GitHub integration, connect it with `vercel git connect https://github.com/AjitOv/zotoz-ai.git --scope ajitovs-projects`.

Local deployment metadata and environment files are excluded from version control.
