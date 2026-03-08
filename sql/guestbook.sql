-- Run this in Supabase SQL Editor

create extension if not exists pgcrypto;

create table if not exists public.guestbook_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 40),
  message text not null check (char_length(message) between 1 and 220),
  created_at timestamptz not null default now()
);

alter table public.guestbook_messages enable row level security;

-- Public read/write guestbook access.
drop policy if exists "guestbook_select_all" on public.guestbook_messages;
create policy "guestbook_select_all"
  on public.guestbook_messages
  for select
  to anon, authenticated
  using (true);

drop policy if exists "guestbook_insert_all" on public.guestbook_messages;
create policy "guestbook_insert_all"
  on public.guestbook_messages
  for insert
  to anon, authenticated
  with check (true);

create index if not exists guestbook_messages_created_at_idx
  on public.guestbook_messages (created_at desc);
