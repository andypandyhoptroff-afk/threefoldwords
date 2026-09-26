# Threefold project guide

## Architecture

The site is a TanStack Start React application deployed on Netlify. `src/routes/index.tsx` renders the game, while `src/components/Threefold.tsx` contains the interactive play, archive, statistics, sharing, and editor experiences. Global visual styling is in `src/styles.css`.

The server API lives in `netlify/functions/game.mts` and is exposed at `/api/game`. It handles puzzle retrieval, guesses, archive queries, statistics, and password-protected publishing. Persistent data uses Netlify Database through Drizzle; schema definitions are in `db/schema.ts`, the client is in `db/index.ts`, and generated migrations live under `netlify/database/migrations`.

## Conventions

- Use TypeScript and standard Web API request/response objects.
- Keep answers server-side until a play is complete.
- Preserve the three-life rule and never expose unpublished future puzzles.
- All persistent application data belongs in Netlify Database, not local files or memory.
- Any schema change requires a newly generated migration; do not edit applied migrations.
- Keep the editorial paper-and-ink visual language, including the Libre Caslon display face, mono labels, forest ink, and rust accent.
- Maintain responsive layouts and accessible labels, focus behavior, and reduced-motion support.

## Editing puzzles

The editor calls the same game API and requires `EDITOR_PASSWORD` to be configured in the Netlify environment. A dated publish is an upsert so the owner can correct or replace a puzzle before players encounter it.
