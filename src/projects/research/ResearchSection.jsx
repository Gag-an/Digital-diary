import ResearchCard from "./ResearchCard";
import styled from "styled-components";
import ResearchTitle from "./ResearchTitle";

export default function ResearchSection() {
  return (
    <Section>
      <ResearchTitle />

      <div className="card-row">
        <ResearchCard
          title="Swasth AI"
          venue="IEEE Xplore"
          year="2025"
          abstract="A machine learning based approach for early diagnosis and healthcare analytics using structured medical data."
          link="https://ieeexplore.ieee.org/document/11280738"
        />

        <ResearchCard
          title="QuickRetain AI"
          venue="IEEE Xplore"
          year="2025"
          abstract="Predictive modeling for customer churn using XGBoost and LSTM with explainability through SHAP."
          link="https://ieeexplore.ieee.org/document/11323912"
        />

        <ResearchCard
          title="StockPilot AI"
          venue="IEEE Xplore"
          year="2025"
          abstract="Exploratory research on applying ensemble machine learning and real-time market data to improve stock prediction and automated portfolio management."
          link="https://ieeexplore.ieee.org/document/11323885"
        />
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin-top: 120px;
  text-align: center;

  .heading {
    font-size: 2.5rem;
    margin-bottom: 50px;
  }

  .heading span {
    color: #ec4899;
  }

  .card-row {
    display: flex;
    gap: 40px;
    justify-content: center;
    flex-wrap: wrap;
  }
`;