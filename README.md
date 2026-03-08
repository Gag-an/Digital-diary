# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Guestbook Backend (Supabase)

This project uses Supabase Postgres for guestbook persistence.

1. Create a Supabase project.
2. Open SQL Editor and run [sql/guestbook.sql](./sql/guestbook.sql).
3. Copy [.env.example](./.env.example) to `.env` and fill:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Run `npm run dev` locally.
5. On Netlify, set the same env vars in Site settings -> Environment variables.

Guestbook page reads/writes from table `public.guestbook_messages`.
