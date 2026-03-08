# Digital Diary Portfolio

A React + Vite portfolio with an interactive guestbook backed by Supabase (PostgreSQL).

## Features

- Modern portfolio UI
- Section-based navigation with `More` dropdown
- Resume button in navbar
- Guestbook page with persistent messages (database-backed)
- Netlify-ready deployment config

## Tech Stack

- React 19
- Vite
- Supabase (`@supabase/supabase-js`)
- CSS

## Project Structure

- `src/` - frontend source code
- `src/guestbook/GuestbookPage.jsx` - guestbook UI + data operations
- `src/lib/supabaseClient.js` - Supabase client setup
- `sql/guestbook.sql` - SQL schema + policies
- `netlify.toml` - Netlify build + SPA redirect config

## Guestbook Backend Setup (Supabase)

1. Create a project in Supabase.
2. Open **SQL Editor** and run the SQL from:
   - `sql/guestbook.sql`
3. Go to **Project Settings -> API** and copy:
   - Project URL
   - Publishable key (anon/public)

## Environment Variables

Create `.env` in project root:

```env
VITE_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_PUBLISHABLE_KEY
