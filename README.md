# Zotoz AI

A responsive, dependency-free prototype of a local business operating system.

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

Push changes to the GitHub repository’s default branch to deploy through the connected Vercel project. Local deployment metadata and environment files are excluded from version control.
