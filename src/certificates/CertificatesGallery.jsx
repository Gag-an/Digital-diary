import CircularGallery from "../components/CircularGallery/CircularGallery.jsx";
import "./CertificatesGallery.css";

const certificates = [
  { image: "/certificates/aws-fundamentals.jpg", text: "AWS Fundamentals" },

  {
    image: "/certificates/delta-fullstack.jpg",
    text: "Delta Fullstack Development",
  },

  {
    image: "/certificates/google-ai-essentials.jpg",
    text: "Google AI Essentials",
  },

  {
    image: "/certificates/google-cloud-study-jam.jpg",
    text: "Google Cloud Study Jam",
  },

  {
    image: "/certificates/google-prompting-essentials.jpg",
    text: "Google Prompting Essentials",
  },

  {
    image: "/certificates/intel-ai-entrepreneurship.jpg",
    text: "Intel AI Entrepreneurship",
  },

  {
    image: "/certificates/linkedin-data-analytics.png",
    text: "LinkedIn Data Analytics",
  },

  {
    image: "/certificates/linkedin-microsoft-data-analysis.jpg",
    text: "Microsoft Data Analysis",
  },

  {
    image: "/certificates/pearson-data-analytics.jpg",
    text: "Pearson Data Analytics",
  },

  {
    image: "/certificates/python-for-everybody.jpg",
    text: "Python for Everybody",
  },
];

export default function Certificates() {
  return (
    <section className="certificates-section">
      <div
        style={{ height: "650px", position: "relative", marginTop: "100px" }}
      >
        <CircularGallery items={certificates} />
      </div>

      {/* view certificates button */}

      <div className="certificate-viewer">
        <a
          href="/certificates/aws-fundamentals.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="view-cert-btn"
        >
          View Certificates
        </a>
      </div>
    </section>
  );
}
