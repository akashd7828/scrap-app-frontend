import React from "react";
import "./Leading_Brands.css";
import ISB from "../../Assets/ISB.jpeg";
import AIC from "../../Assets/AIC.jpeg";
import thub from "../../Assets/thub.png";

const Leading_Brands = () => {
  return (
    <div className="leading-brands-container">
      <div className="heading">
        <p>Leading brands trust Scrappe</p>
      </div>
      <div className="images-wrapper">
        <div className="images-container">
          {/* ISB AIC Logo */}
          <img
            src={ISB} // Replace with actual logo URL
            alt="ISB AIC"
          />
          <img
            src={AIC} // Replace with actual logo URL
            alt="ISB AIC"
          />
          {/* T-Hub Logo */}
          <img
            src={thub} // Replace with actual logo URL
            alt="T-Hub"
          />
        </div>
      </div>
    </div>
  );
};

export default Leading_Brands;
