import { useState } from 'react'
import './HeroContent.css'
import gaganImg from './gagan.jpg'

const EMAIL = 'gagkaur274@gmail.com'

function HeroContent() {
  const [showToast, setShowToast] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setShowToast(true)
      setTimeout(() => setShowToast(false), 2200)
    } catch (err) {
      console.error('Failed to copy email to clipboard', err)
    }
  }

  return (
    <>
      <div className="hero-content">
        {/* BIG HEADING */}
        <h1 className="hero-title">
          I help founders turn ideas
          <br />
          into seamless <span className="hero-title-italic">digital experiences.</span>
        </h1>

        {/* INTRO ROW (hello + avatar + role) */}
        <div className="hero-intro-row">
          <span className="hero-intro-text">Hello, I’m Gagan</span>

          <div className="hero-avatar">
            <img src={gaganImg} alt="Gagan" />
          </div>

          <span className="hero-role">a Web Developer</span>
        </div>

        {/* ACTION ROW (button + email) */}
        <div className="hero-actions">
          <button className="hero-cta">Let’s Connect</button>

          <div className="hero-email" onClick={handleCopyEmail}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            <span>{EMAIL}</span>
          </div>
        </div>
      </div>

      {showToast && (
        <div className="toast">
          <div className="toast-icon">✓</div>
          <div className="toast-text">
            <strong>Copied to clipboard!</strong>
            <span>Email address copied successfully.</span>
          </div>
        </div>
      )}
    </>
  )
}

export default HeroContent
