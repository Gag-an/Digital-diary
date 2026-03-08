import "./App.css";
import MilestoneCta from "./cta/MilestoneCta.jsx";
import Navbar from "./navbar/navbar.jsx";
import Particles from "./components/Particles/Particles.jsx";
import HeroContent from "./hero/HeroContent.jsx";
import AboutSection from "./about/AboutSection.jsx";
import { ScrollTimeline } from "./projects/scrollTimeline.jsx";
import EducationTitle from "./education/educationTitle";
import EducationInfo from "./education/educationInfo";
import ResearchSection from "./projects/research/ResearchSection.jsx";
import SkillsSection from "./skills/SkillsSection.jsx";
import ScrollVelocityText from "./components/scrollText/ScrollVelocityText.jsx";
import CertificateTitle from "./certificates/certificateTitle.jsx";
import "./education/educationTitle.css";
import CertificatesGallery from "./certificates/CertificatesGallery.jsx";
import AchivementSection from "./achivement/AchivementSection.jsx";
import Threads from "./components/Threads/Threads.jsx";
import PortfolioFooter from "./footer/PortfolioFooter.jsx";

function App({ onNavigate = () => {} }) {
  const projects = [
    {
      year: "2024",
      title: "Hack Capsule",
      subtitle: "Web Platform - Hackathons",
      description:
        "A platform designed to organize, manage, and participate in hackathons with a smooth user experience.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/Gag-an/Hack-Capsule",
    },
    {
      year: "2024",
      title: "QuickRetain AI",
      subtitle: "Machine Learning - SaaS",
      description:
        "An AI-driven system to predict customer churn and improve retention strategies using data insights.",
      tech: ["React", "XGBoost", "LSTM", "SHAP"],
      github: "https://github.com/Gag-an/QuickRetain-AI",
    },
    {
      year: "2023",
      title: "Swasth AI",
      subtitle: "Healthcare - AI",
      description:
        "A health-focused AI solution aimed at early diagnosis and data-driven healthcare assistance.",
      tech: ["Python", "R", "ML Analytics"],
      github: "https://ieeexplore.ieee.org/document/11280738",
    },
  ];

  return (
    <div className="app" id="top">
      <section className="hero">
        <div className="ambient-glow" />

        <div className="stars-layer">
          <Particles
            className="stars-particles"
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        <div className="aurora-layer" />
        <div className="curve-light" />

        <Navbar />
        <HeroContent />
      </section>

      <div id="about">
        <AboutSection />
      </div>

      <section className="projects-section" id="projects">
        <h2 className="projects-heading">
          Curated <span>work</span>
        </h2>

        <ScrollTimeline
          events={projects}
          title=""
          subtitle=""
          cardAlignment="alternating"
          progressIndicator
          revealAnimation="fade"
          cardVariant="elevated"
          cardEffect="shadow"
        />
      </section>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <section className="education-section" id="education">
        <EducationTitle />
        <br></br>
        <EducationInfo />
      </section>

      <ScrollVelocityText velocity={80} className="custom-scroll-text" />

      <br></br>
      <br></br>
      <br></br>

      <div id="skills">
        <SkillsSection />
      </div>

      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <Threads amplitude={1} distance={0} enableMouseInteraction />
      </div>

      <section className="research-section" id="research">
        <ResearchSection />
      </section>

      <br></br>
      <br></br>
      <br></br>

      <div id="certificates">
        <CertificateTitle />
        <CertificatesGallery />
      </div>

      <br></br>
      <br></br>

      <AchivementSection />
      <MilestoneCta />

      <PortfolioFooter onNavigate={onNavigate} />
    </div>
  );
}

export default App;
