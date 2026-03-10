import { useEffect, useState } from "react";
import "./GuestbookPage.css";
import { hasSupabaseConfig, supabase } from "../lib/supabaseClient.js";

const MISSING_CONFIG_MESSAGE =
  "Guestbook backend is not configured yet. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.";

export default function GuestbookPage({ onNavigate }) {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    async function loadMessages() {
      if (!hasSupabaseConfig || !supabase) {
        setError(MISSING_CONFIG_MESSAGE);
        setLoading(false);
        return;
      }

      const { data, error: fetchError } = await supabase
        .from("guestbook_messages")
        .select("id, name, message, created_at")
        .order("created_at", { ascending: false });

      if (!mounted) return;

      if (fetchError) {
        setError("Could not load guestbook messages right now.");
        setLoading(false);
        return;
      }

      setMessages(
        (data ?? []).map((msg) => ({
          id: msg.id,
          name: msg.name,
          text: msg.message,
          createdAt: msg.created_at,
        }))
      );
      setLoading(false);
    }

    loadMessages();

    return () => {
      mounted = false;
    };
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim() || !supabase) return;

    setSubmitting(true);
    setError("");

    const { data, error: insertError } = await supabase
      .from("guestbook_messages")
      .insert({
        name: name.trim(),
        message: text.trim(),
      })
      .select("id, name, message, created_at")
      .single();

    setSubmitting(false);

    if (insertError) {
      setError("Could not save your message. Please try again.");
      return;
    }

    if (data) {
      setMessages((prev) => [
        {
          id: data.id,
          name: data.name,
          text: data.message,
          createdAt: data.created_at,
        },
        ...prev,
      ]);
    }

    setName("");
    setText("");
  };

  return (
    <div className="guestbook-page">
      <header className="guestbook-head">
        <button type="button" onClick={() => onNavigate("/")}>Back to Portfolio</button>
        <h1>Words That Echo <span>Always</span></h1>
        <p>The wall remembers.</p>
      </header>

      <section className="guestbook-compose">
        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={40}
            required
          />
          <textarea
            placeholder="Write your message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={220}
            required
          />
          <button type="submit" disabled={submitting || !hasSupabaseConfig}>
            {submitting ? "Saving..." : "Write a message"}
          </button>
        </form>
      </section>

      {error && <p className="guestbook-status guestbook-status-error">{error}</p>}
      {loading && <p className="guestbook-status">Loading messages...</p>}

      <section className="guestbook-grid">
        {!loading && messages.length === 0 && !error && (
          <article className="guestbook-card-item guestbook-card-empty">
            <h3>No messages yet.</h3>
            <div className="guestbook-meta">
              <strong>Be the first one to write.</strong>
            </div>
          </article>
        )}
        {messages.map((msg) => (
          <article key={msg.id} className="guestbook-card-item">
            <p className="guestbook-message">{msg.text}</p>
            <div className="guestbook-meta">
              <strong>{msg.name}</strong>
              <span>{new Date(msg.createdAt).toLocaleDateString()}</span>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
