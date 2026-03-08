import "./MilestoneCta.css";
import gkLogo from "../logo/Gemini_Generated_Image_57593y57593y5759.png";

export default function MilestoneCta() {
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

            <button className="animated-button" type="button">
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
    </section>
  );
}

