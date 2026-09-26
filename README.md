# Threefold

Threefold is a daily word puzzle: one word completes three sentences in three different ways. Players have three lives, get a contextual explanation after each puzzle, can revisit previous days, and keep an anonymous browser-linked streak and win rate.

## Technology

- TanStack Start and React 19
- Netlify Functions for the game API
- Netlify Database with Drizzle ORM for puzzles and play history
- Tailwind CSS tooling with a custom editorial design system

## Local development

Install dependencies with `pnpm install`, then run `netlify dev --port 8889`. Netlify Dev provides the function and database environment used by the app.

Set an `EDITOR_PASSWORD` environment variable in Netlify to protect the puzzle editor. Open the pen icon in the header, enter a date, the answer, three sentences (using `___` for each blank), three explanations, and the password to publish. Publishing an existing date replaces that day’s puzzle.

Database migrations in `netlify/database/migrations` are applied automatically by Netlify during deployment.
