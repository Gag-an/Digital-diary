import "./MilestoneCta.css";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import gkLogo from "../logo/Gemini_Generated_Image_57593y57593y5759.png";

export default function MilestoneCta() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState({ type: "", text: "" });
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const openModal = () => setIsModalOpen(true);
    window.addEventListener("open-contact-modal", openModal);
    return () => window.removeEventListener("open-contact-modal", openModal);
  }, []);

  const handleSendMessage = async (event) => {
    event.preventDefault();
    const trimmedName = senderName.trim();
    const trimmedEmail = senderEmail.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName) {
      setStatus({ type: "error", text: "Please enter your name." });
      return;
    }

    if (!trimmedEmail) {
      setStatus({ type: "error", text: "Please enter your email." });
      return;
    }

    if (!trimmedMessage) {
      setStatus({ type: "error", text: "Please enter a message first." });
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({ type: "error", text: "EmailJS keys are missing in your .env file." });
      return;
    }

    setIsSending(true);
    setStatus({ type: "", text: "" });

    try {
      const now = new Date().toLocaleString();

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: trimmedName,
          from_name: trimmedName,
          title: "Portfolio Message",
          message: trimmedMessage,
          time: now,
          email: trimmedEmail,
          sender_email: trimmedEmail,
          user_email: trimmedEmail,
          from_email: trimmedEmail,
          reply_to: trimmedEmail,
          to_name: "Gagan",
        },
        { publicKey }
      );

      setStatus({ type: "success", text: "Message sent successfully." });
      setSenderName("");
      setSenderEmail("");
      setMessage("");
    } catch (error) {
      const apiMessage = error?.text || error?.message || "";
      const apiStatus = error?.status ? ` (${error.status})` : "";
      setStatus({
        type: "error",
        text: `Could not send message${apiStatus}${apiMessage ? `: ${apiMessage}` : "."}`,
      });
      console.error("EmailJS send failed:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="milestone-cta" id="contact-cta">
      <div className="milestone-browser">
        <div className="tabs-head">
          <div className="tabs">
            <div className="tab-open">
              <div className="rounded-l"><div className="mask-round" /></div>
              <span>Portfolio</span>
              <div className="close-tab">x</div>
              <div className="rounded-r"><div className="mask-round" /></div>
            </div>
          </div>
          <div className="window-opt">
            <button type="button">-</button>
            <button type="button">[]</button>
            <button type="button" className="window-close">x</button>
          </div>
        </div>

        <div className="head-browser">
          <button type="button">&larr;</button>
          <button type="button" disabled>&rarr;</button>
          <input type="text" placeholder="Search Google or type URL" defaultValue="gag-an.dev/contact" readOnly />
          <button type="button">...</button>
          <button type="button" className="star">*</button>
        </div>

        <div className="milestone-cta__surface">
          <div className="milestone-cta__noise" aria-hidden="true" />

          <div className="milestone-cta__inner">
            <div className="milestone-cta__crest" aria-hidden="true">
              <img src={gkLogo} alt="GK logo" className="milestone-cta__logo" />
            </div>

            <h2 className="milestone-cta__title">
              FROM CONCEPT TO <strong>CREATION</strong>
              <br />
              LET&apos;S MAKE IT <strong>HAPPEN!</strong>
            </h2>

            <button className="animated-button" type="button" onClick={() => setIsModalOpen(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
              </svg>
              <span className="text">Get In Touch</span>
              <span className="circle" aria-hidden="true" />
              <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
              </svg>
            </button>

            <p className="milestone-cta__lead">
              I&apos;m available for full-time roles and freelance projects.
            </p>
            <p className="milestone-cta__sub">
              I thrive on crafting dynamic web applications and delivering seamless user experiences.
            </p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="contact-modal__overlay" role="dialog" aria-modal="true" aria-label="Send message">
          <div className="contact-modal">
            <button
              type="button"
              className="contact-modal__close"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close contact popup"
            >
              x
            </button>

            <h3>Send me a message</h3>

            <form className="contact-modal__form" onSubmit={handleSendMessage}>
              <input
                type="text"
                value={senderName}
                onChange={(event) => setSenderName(event.target.value)}
                placeholder="Your name"
                autoComplete="name"
                required
              />
              <input
                type="email"
                value={senderEmail}
                onChange={(event) => setSenderEmail(event.target.value)}
                placeholder="Your email"
                autoComplete="email"
                required
              />
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Write your message..."
                rows={5}
                required
              />
              <button type="submit" disabled={isSending}>
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>

            {status.text && (
              <p className={`contact-modal__status ${status.type === "error" ? "is-error" : "is-success"}`}>
                {status.text}
              </p>
            )}

            <div className="contact-modal__socials" aria-label="Social links">
              <a
                href="https://www.linkedin.com/in/gagandeep-kaur-5132ab290/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/Gag-an" target="_blank" rel="noreferrer" aria-label="GitHub profile">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}



