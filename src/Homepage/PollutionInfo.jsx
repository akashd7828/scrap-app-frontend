import React from "react";
import "./PollutionInfo.css"; // Import the external CSS
import ScrapFree from "../Assets/scrap-free.png";
import ScrapGen from "../Assets/scrap-generation.png";
import ImpactPol from "../Assets/stop-plastic.png";

const PollutionInfo = () => {
  return (
    <section className="pollution-section">
      <div className="content-container">
        <div className="info-card">
          <img
            src={ScrapFree}
            alt="Scrap Pollution Icon"
            className="info-icon"
          />
          <h2 className="info-title">The Growing Problem of Scrap Pollution</h2>
          <p className="info-text">
            Every year, tons of scrap materials, including metals, paper, and
            electronics, contribute to pollution. Effective recycling can
            significantly reduce this waste and help protect our environment.
          </p>
        </div>

        <div className="info-card">
          <img
            src={ScrapGen}
            alt="Scrap Generation Icon"
            className="info-icon"
          />
          <h2 className="info-title">How Much Scrap Do We Generate?</h2>
          <p className="info-text">
            Globally, over 1.5 billion tons of scrap materials are generated
            each year, including 400 million tons of metals and 300 million tons
            of plastics. Proper disposal and recycling are crucial.
          </p>
        </div>

        <div className="info-card">
          <img
            src={ImpactPol}
            alt="Plastic Pollution Icon"
            className="info-icon"
          />
          <h2 className="info-title">The Impact of Plastic Pollution</h2>
          <p className="info-text">
            Plastic pollution is one of the most pressing environmental
            concerns. Every minute, over one million plastic bottles are
            purchased worldwide, contributing to ocean pollution and wildlife
            harm.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PollutionInfo;
