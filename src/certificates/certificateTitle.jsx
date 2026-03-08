import { useRef } from "react";
import VariableProximity from "../components/VariableProximity/VariableProximity.jsx";
import "./certificateTitle.css";

const CertificateTitle = () => {

  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="certificate-title-container">

      <VariableProximity
        label={"Learning & "}
        className="certificate-title"
        fromFontVariationSettings="'wght' 400, 'opsz' 9"
        toFontVariationSettings="'wght' 1000, 'opsz' 40"
        containerRef={containerRef}
        radius={120}
      />

      <span className="pink-word">
        <VariableProximity
          label={"Certifications"}
          className="certificate-title"
          fromFontVariationSettings="'wght' 400, 'opsz' 9"
          toFontVariationSettings="'wght' 1000, 'opsz' 40"
          containerRef={containerRef}
          radius={120}
        />
      </span>

    </div>
  );
};

export default CertificateTitle;