import ScrollFloat from "./scrollReveal";
import "./educationTitle.css";

export default function EducationTitle() {
  return (
    <div className="education-heading-row">
      <h2 className="education-title">
        <span className="title-left">
          The <span className="academic">Academic</span>
        </span>

        <ScrollFloat>
          <span className="foundation">Foundation</span>
        </ScrollFloat>
      </h2>
    </div>
  );
}
