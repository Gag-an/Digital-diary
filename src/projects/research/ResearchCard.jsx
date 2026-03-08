import React from "react";
import styled from "styled-components";


const ResearchCard = ({ title, venue, abstract, year, link }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="content">

          {/* BACK SIDE */}
          <div className="back">
            <div className="back-content">
              <strong>{title}</strong>
              <span className="year">{year}</span>
              <p className="hover-text">Hover to read</p>
            </div>
          </div>

          {/* FRONT SIDE */}
          <div className="front">
            <div className="front-content">
              <small className="badge">{venue}</small>

              <div className="description">
                <div className="title">
                  <strong>{title}</strong>
                </div>

                <p className="abstract">{abstract}</p>

                <p className="card-footer">{year}</p>

                {/* VIEW PAPER BUTTON */}
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="paper-link"
                >
                  View Paper
                </a>

              </div>
            </div>
          </div>

        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 260px;
    height: 340px;
    perspective: 1000px;
  }

  .content {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s;
    border-radius: 14px;
  }

  .card:hover .content {
    transform: rotateY(180deg);
  }

  .front,
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 14px;
    background: #060010;
    border: 1px solid #392e4e;
    box-shadow:
      0 8px 30px rgba(46, 24, 78, 0.45),
      0 0 30px rgba(132, 0, 255, 0.2);
  }

  .back {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  .back-content {
    text-align: center;
    padding: 20px;
  }

  .back-content strong {
    font-size: 1.1rem;
  }

  .year {
    display: block;
    margin-top: 8px;
    opacity: 0.7;
  }

  .hover-text {
    margin-top: 12px;
    font-size: 0.8rem;
    opacity: 0.6;
  }

  .front {
    transform: rotateY(180deg);
    color: white;
    padding: 16px;
  }

  .badge {
    background: rgba(132, 0, 255, 0.15);
    border: 1px solid rgba(132, 0, 255, 0.8);
    padding: 4px 12px;
    border-radius: 999px;
    font-size: 12px;
    width: fit-content;
  }

  .description {
    margin-top: 20px;
    background: rgba(0, 0, 0, 0.5);
    padding: 14px;
    border-radius: 10px;
  }

  .abstract {
    font-size: 0.85rem;
    opacity: 0.85;
    margin-top: 10px;
    line-height: 1.4;
  }

  .card-footer {
    margin-top: 12px;
    font-size: 0.75rem;
    opacity: 0.6;
  }

  .paper-link {
    display: inline-block;
    margin-top: 12px;
    padding: 6px 12px;
    background: #ec4899;
    color: white;
    font-size: 12px;
    border-radius: 6px;
    text-decoration: none;
    transition: 0.3s;
  }

  .paper-link:hover {
    background: #db2777;
  }
`;

export default ResearchCard;