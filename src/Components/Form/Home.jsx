import React from "react";
import "./Home.css";
import chotu from "../../Assets/chotu.jpeg";
import { FaRecycle, FaMobileAlt, FaTruck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="overlay"></div>
        <div className="content">
          <h1 className="hero-title">
            Transform Your Scrap into Value{" "}
            <span className="highlight">with Us!</span>
          </h1>
          <p className="sub-title">Paper - Plastics - Metals - Appliances</p>
          <p className="sub-title">
            Download the <b className="download-link">ScrapPe App</b>
          </p>
          <button
            onClick={() => navigate("/schedule-pickup")}
            className="cta-button"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Feature Section */}
      <section className="feature-section">
        <div className="feature-card">
          <FaRecycle className="icon" />
          <h3>Eco-Friendly Recycling</h3>
          <p>
            Contribute to saving the planet by recycling your scrap materials.
          </p>
        </div>
        <div className="feature-card">
          <FaMobileAlt className="icon" />
          <h3>Easy-to-Use App</h3>
          <p>
            Schedule pickups and track your transactions with our user-friendly
            app.
          </p>
        </div>
        <div className="feature-card">
          <FaTruck className="icon" />
          <h3>Fast Pickup Service</h3>
          <p>
            We provide fast and reliable scrap pickup service at your doorstep.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
