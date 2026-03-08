import TiltedCard from "../components/Tilted/TiltedCard.jsx";

export default function EducationInfo() {
  return (
    <div className="academic-cards-row">
      <TiltedCard
        tag="College"
        title="Bachelor of Computer Science and Business Systems"
        details={[
          "Chandigarh University",
          "2023 – 2027",
          "Core focus: Programming, DBMS, Web Development",
          "Strong technical foundation",
        ]}
      />

      <TiltedCard
        tag="School"
        title="Senior Secondary Education"
        details={[
          "Class 12 – CBSE (Non-Medical Stream)",
          "Government Model Senior Secondary School",
      
          "Class 10 – CBSE",
          "ST. EZRA International School",
          
          
        ]}
      />
    </div>
  );
}
