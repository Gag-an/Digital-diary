import AchievementLoader from "../components/AchievementLoader/AchievementLoader.jsx";
import "./AchivementSection.css";

const achievements = [
  {
    title: "Winner - Hack Track Treasure Hunt",
    description: "Secured 1st place in a competitive problem-solving challenge.",
  },
  {
    title: "Top 12 Finalist - Hack-O-Octo 3.0",
    description: "Selected among 340+ registrations.",
  },
  {
    title: "Design Team Member - Tech Nexus Society",
    description:
      "Coordinated technical activities and organized a 28-hour hackathon for 100+ students.",
  },
];

export default function AchivementSection() {
  return (
    <section className="achivement-section" id="achivement">
      <div className="achivement-content">
        <div className="achivement-left">
          <p className="achivement-eyebrow">Achievements</p>
          <h2 className="achivement-title">Highlights & <span style={{ color: "#ec4899" }}>Milestones</span></h2>

          <ul className="achivement-list">
            {achievements.map((item) => (
              <li key={item.title} className="achivement-item">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="achivement-right" aria-hidden="true">
          <AchievementLoader />
        </div>
      </div>
    </section>
  );
}

