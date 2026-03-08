import "./PortfolioFooter.css";
import gkLogo from "../logo/Gemini_Generated_Image_57593y57593y5759.png";

export default function PortfolioFooter({ onNavigate }) {
  const go = (path, event) => {
    event.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="portfolio-footer">
      <div className="portfolio-footer__grid">
        <div className="portfolio-footer__author">
          <img src={gkLogo} alt="GK logo" className="portfolio-footer__logo" />
          <p>
            I&apos;m Gagan - a full-stack developer focused on immersive web experiences,
            performant interfaces, and practical product engineering.
          </p>

          <a href="/guestbook" className="guestbook-card" onClick={(e) => go('/guestbook', e)}>
            <div className="guestbook-card__tag">Guestbook</div>
            <div className="guestbook-card__title">Let me know you were here</div>
            <span className="guestbook-card__arrow">&rarr;</span>
          </a>
        </div>

        <div className="portfolio-footer__col">
          <h4>General</h4>
          <a href="#top">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Curated Work</a>
          <a href="#education">Academic Foundation</a>
        </div>

        <div className="portfolio-footer__col">
          <h4>Specifics</h4>
          <a href="/guestbook" onClick={(e) => go('/guestbook', e)}>Guest Book</a>
          <a href="#research">Research</a>
          <a href="#achivement">Milestones</a>
          <a href="#certificates">Certificates</a>
        </div>

        <div className="portfolio-footer__col">
          <h4>More</h4>
          <a href="mailto:gagkaur274@gmail.com">Email</a>
          <a href="https://github.com/Gag-an" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="#">Privacy</a>
        </div>
      </div>

      <div className="portfolio-footer__bottom">
        <span>© {new Date().getFullYear()} Gagan. All rights reserved.</span>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}
