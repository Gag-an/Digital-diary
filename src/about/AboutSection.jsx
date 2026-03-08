import './AboutSection.css'
import MagicBento from './MagicBento.jsx'

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-wrapper">
        <span className="about-label">MORE ABOUT ME</span>

        <h2 className="about-heading">
          I'm Gagan, a <span>creative engineer</span>
        </h2>

        <MagicBento
          textAutoHide={false}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={280}
          particleCount={8}
          glowColor="132, 0, 255"
        />
      </div>
    </section>
  )
}

export default AboutSection
