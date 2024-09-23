import React from "react";
import "./SharkTank.css";
import scrappelogo from "../../Assets/img_akd1.jpg";
import secImg from "../../Assets/img_akd2.jpg";
import thirdImg from "../../Assets/img_akd3.jpg";

const Sharktank = () => {
  return (
    <div>
      <div className="shark_tank_india_div">
        <div className="image-wrapper">
          <img className="sharkss" src={scrappelogo} alt="Shark Tank Scrappe" />
        </div>
        <div className="image-wrapper">
          <img className="sharkss" src={secImg} alt="Shark Tank Scrappe" />
        </div>
        <div className="image-wrapper">
          <img className="sharkss" src={thirdImg} alt="Shark Tank Scrappe" />
        </div>
      </div>

      <div className="award-section">
        <div className="award-text-container">
          <h2 className="h2">
            Scrappe received <br /> Mbillionth Award 2020
          </h2>
          <p className="award-text">
            Recognized as the winner in the "Early Stage Startups" category of
            the Mbillionth awards South Asia organized by Digital Empowerment
            Foundation (DEF) & Facebook.
          </p>
        </div>

        <div className="image-container">
          <img className="award-img" src={scrappelogo} alt="Mbillionth Award" />
        </div>
      </div>
    </div>
  );
};

export default Sharktank;
