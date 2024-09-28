import React from "react";
import "./RVM.css"; // Assuming you have a separate CSS file

const RVM = () => {
  return (
    <div className="rvm-container">
      <h1>Reverse Vending Machine (RVM) in India</h1>
      <p>
        At Scrappe, we provide smart Reverse Vending Machines (RVM) that help
        recycle plastic bottles. Not only do these machines help the
        environment, but they also reward you for your recycling efforts.
      </p>
      <div className="rvm-features">
        <div className="rvm-feature-item">
          <div className="icon">
            <i className="fas fa-recycle"></i>
          </div>
          <div className="feature-text">
            <h2>Recycle Smartly</h2>
            <p>
              Our Reverse Vending Machines are designed to make recycling easy
              and efficient. Simply insert your plastic bottles, and the machine
              takes care of the rest!
            </p>
          </div>
        </div>
        <div className="rvm-feature-item">
          <div className="icon">
            <i className="fas fa-gift"></i>
          </div>
          <div className="feature-text">
            <h2>Earn Rewards</h2>
            <p>
              Not only are you helping the environment, but you also get
              rewarded with coupons for every bottle you recycle. Use these
              coupons at nearby stores!
            </p>
          </div>
        </div>
        <div className="rvm-feature-item">
          <div className="icon">
            <i className="fas fa-leaf"></i>
          </div>
          <div className="feature-text">
            <h2>Eco-Friendly Solutions</h2>
            <p>
              Our machines are part of a greater effort to keep India clean and
              green. We aspire to make recycling a natural part of your daily
              routine.
            </p>
          </div>
        </div>
        <div className="rvm-feature-item">
          <div className="icon">
            <i className="fas fa-industry"></i>
          </div>
          <div className="feature-text">
            <h2>Manufactured in India</h2>
            <p>
              As a leading Reverse Vending Machine manufacturer, Scrappe
              provides RVM machines all over India, contributing to the
              recycling revolution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RVM;
