import TrueFocus from "./TrueFocus";

export default function ResearchTitle() {
  return (
    <div style={{ marginBottom: "60px", display: "flex", justifyContent: "center" }}>
      <TrueFocus
        sentence="Research & Publications"
        manualMode={false}
        blurAmount={5}
        borderColor="#ec4899"
        glowColor="rgba(236,72,153,0.6)"
        animationDuration={0.5}
        pauseBetweenAnimations={1}
      />
    </div>
  );
}