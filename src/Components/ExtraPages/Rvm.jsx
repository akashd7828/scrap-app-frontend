import React from "react";
import "./RVM.css";
import rvm from "../../Assets/rvm.jpeg";
import {
  FaRecycle,
  FaMobileAlt,
  FaEnvelope,
  FaPrint,
  FaAd,
  FaCogs,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrain,
  faPlane,
  faBus,
  faLandmark,
  faStore,
  faShoppingCart,
  faUniversity,
  faBuilding,
  faIndustry,
} from "@fortawesome/free-solid-svg-icons";
const Rvm = () => {
  return (
    <div className="rvm-container">
      {/* Header */}
      <div className="rvm-header">
        <div className="rvm-header-text">
          <h1>Reverse Vending Machine (RVM) in India</h1>
          <p>
            One of the key innovations for efficient waste disposal is the
            Reverse Vending Machine (RVM). These machines accept barcoded
            plastic bottles, aluminum cans, and glass bottles, rewarding users
            with digital cash or redeemable vouchers in return. At ScrapPe, we
            provide advanced RVMs designed to streamline the recycling of these
            materials, promoting both environmental sustainability and user
            incentives. ScrapPe was founded to spearhead a comprehensive
            recycling movement and has already achieved the milestone of
            recycling over 2 million items. Our mission is to help create a
            cleaner and greener society through innovative solutions, drawing
            from our rich expertise. Our RVMs empower users to exchange
            recyclable materials—plastic, aluminum, and glass—for rewards,
            helping build a more sustainable future.
          </p>
        </div>
        <div className="rvm-header-image">
          <img src={rvm} alt="RVM in India" />
        </div>
      </div>

      {/* How it Works Section */}
      <div className="how-it-works">
        <h2>How Our Reverse Vending Machine Works</h2>
        <div className="how-it-works-content">
          <div className="how-it-works-text">
            <p>
              The Reverse Vending Machine (RVM) is an innovative solution aimed
              at promoting environmental sustainability by recycling empty
              plastic bottles, aluminum cans, and glass bottles, while offering
              consumers attractive rewards in return. Users simply deposit their
              used containers into the designated slot, and the machine uses
              advanced sensors to identify and verify the material. This
              validation process can be powered by AI technology or by scanning
              the container's UPC code or barcode to ensure it qualifies for
              recycling, making it an efficient and eco-friendly tool for waste
              management.
            </p>
          </div>
          <div className="how-it-works-image">{/* Add an image here */}</div>
        </div>
      </div>

      {/* Features Section */}
      <div className="rvm-features">
        <div className="feature-item">
          <FaRecycle className="feature-icon" />
          <h3>Object Detection</h3>
          <p>
            Our machines use object detection technology to accurately sort
            recyclable items.
          </p>
        </div>
        <div className="feature-item">
          <FaMobileAlt className="feature-icon" />
          <h3>Mobile Application</h3>
          <p>
            We also provide a mobile application that gives data about the
            machines in real-time.
          </p>
        </div>
        <div className="feature-item">
          <FaEnvelope className="feature-icon" />
          <h3>Email Notifications</h3>
          <p>
            All requested data will be emailed to the admin directly from the
            app.
          </p>
        </div>
        <div className="feature-item">
          <FaPrint className="feature-icon" />
          <h3>Printing & SMS</h3>
          <p>
            We provide both printed and SMS coupons to users after a successful
            recycling session.
          </p>
        </div>
        <div className="feature-item">
          <FaAd className="feature-icon" />
          <h3>Advertisement</h3>
          <p>
            We also offer advertising facilities on the Reverse Vending
            Machines.
          </p>
        </div>
        <div className="feature-item">
          <FaCogs className="feature-icon" />
          <h3>Customization</h3>
          <p>
            We customize Reverse Vending Machines as per the client's
            requirements.
          </p>
        </div>
      </div>

      <div className="rvm-locations">
        <h2>Where we can install Reverse Vending Machines (RVM's)</h2>
        <div className="rvm-locations-grid">
          <div className="rvm-location-item">
            <FontAwesomeIcon icon={faTrain} size="3x" />
            <p>Railway/Metro Station</p>
          </div>
          <div className="rvm-location-item">
            <FontAwesomeIcon icon={faPlane} size="3x" />
            <p>Airports</p>
          </div>
          <div className="rvm-location-item">
            <FontAwesomeIcon icon={faBus} size="3x" />
            <p>Bus Stands</p>
          </div>
          <div className="rvm-location-item">
            <FontAwesomeIcon icon={faLandmark} size="3x" />
            <p>Tourist Places</p>
          </div>
          <div className="rvm-location-item">
            <FontAwesomeIcon icon={faStore} size="3x" />
            <p>Shopping Malls</p>
          </div>
          <div className="rvm-location-item">
            <FontAwesomeIcon icon={faShoppingCart} size="3x" />
            <p>Supermarkets</p>
          </div>
          <div className="rvm-location-item">
            <FontAwesomeIcon icon={faUniversity} size="3x" />
            <p>Academic Institutes</p>
          </div>
          <div className="rvm-location-item">
            <FontAwesomeIcon icon={faBuilding} size="3x" />
            <p>Corporate Offices</p>
          </div>
          <div className="rvm-location-item">
            <FontAwesomeIcon icon={faIndustry} size="3x" />
            <p>Public Sector Units</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rvm;
