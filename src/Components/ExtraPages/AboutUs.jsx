import React from "react";
import "./AboutUs.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa"; // Import icons

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-section">
        <h1 className="about-us-title">About Us</h1>

        {/* Enhanced Welcome Line */}
        <p className="about-us-welcome enhanced-welcome">
          Welcome to <span className="highlight">ScrapPe Online</span> Sell
          Scrap Online
        </p>

        <p className="about-us-description">
          ScrapPe Online, presents a dynamic duo leading the charge in the
          online recycling and waste management sector.
        </p>

        <p className="about-us-main">
          Secured Platform for Your Convenient Sell Scrap Online Service from
          the Comfort of Your Home! At ScrapPe, we understand that disposing of
          scrap materials can be a challenging task. That’s why we have created
          a seamless and hassle-free solution to help you get rid of your
          unwanted items without any effort. We are your trusted online Scrappe,
          dedicated to providing a reliable and efficient scrap pickup service
          right from your doorstep.
        </p>

        <h2 className="about-us-subtitle">
          Here's why we are the preferred choice for scrap pickup:
        </h2>

        <ul className="about-us-list">
          <li>
            1. <b>Easy Online Booking:</b> With just a few clicks, you can
            schedule a pickup through our user-friendly website. Our platform
            ensures a seamless experience, allowing you to choose the most
            convenient date and time for the pickup.
          </li>
          <li>
            2. <b>Wide Range of Accepted Items:</b> We accept a variety of scrap
            materials, including paper, cardboard, plastic, metal, glass, and
            electronic waste. Whether you have old newspapers, broken
            appliances, or unused electronic devices, we are here to take them
            off your hands.
          </li>
          <li>
            3. <b>Professional and Courteous Team:</b> Our team of experienced
            professionals is trained to handle scrap materials efficiently and
            with utmost professionalism. They will arrive at your doorstep
            promptly, ensuring a hassle-free pickup experience.
          </li>
          <li>
            4. <b>Environmentally Responsible Disposal:</b> We are committed to
            sustainable waste management practices. Once collected, we sort and
            process the scrap materials using eco-friendly methods, maximizing
            recycling rates and minimizing the impact on the environment.
          </li>
          <li>
            5. <b>Fair Pricing:</b> We believe in providing fair and transparent
            pricing for our services. Our rates are competitive and based on the
            type and quantity of scrap materials being collected. Rest assured,
            you will receive value for your scrap.
          </li>
        </ul>

        <p className="about-us-main">
          Join us in our commitment to a cleaner and greener future. By availing
          our scrap pickup service, you contribute to the reduction of landfill
          waste and the conservation of valuable resources. Let’s work together
          to create a sustainable world, one scrap pickup at a time.
        </p>

        <p className="about-us-contact">
          Contact ScrapPe today and experience the convenience of scrap disposal
          from the comfort of your home. Together, we can make a difference!
        </p>

        <div className="about-us-mission-goals">
          <div className="mission-vision-goal">
            <h3 className="vision-title">Vision</h3>
            <p className="vision-description">
              To be the premier online platform for doorstep scrap pickup,
              leading the recycling industry with a seamless, eco-friendly
              solution that empowers individuals and businesses to actively
              contribute to a sustainable future.
            </p>
          </div>

          <div className="mission-vision-goal">
            <h3 className="mission-title">Mission</h3>
            <p className="mission-description">
              Our mission is to make scrap disposal a simple and convenient
              process for everyone. We believe that by responsibly managing
              scrap materials, we can contribute to a cleaner and healthier
              environment. With ScrapPe, you can be confident that your scrap is
              handled with utmost care and disposed of in an environmentally
              friendly manner.
            </p>
          </div>

          <div className="mission-vision-goal">
            <h3 className="goal-title">Goal</h3>
            <p className="goal-description">
              Our goal is to establish ScrapPe as the go-to online platform for
              scrap pickup, achieving widespread adoption and becoming the
              preferred choice for individuals and businesses seeking convenient
              and reliable recycling solutions.
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="social-media-links">
          <a
            href=" https://www.instagram.com/dharb_innoventures?igsh=MTQycXZvMndwZ3gxcQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="social-icon instagram-icon" />
          </a>
          <a
            href="https://www.linkedin.com/company/dharb-innoventures-private-limited-bharat-plasti-pay/?lipi=urn%3Ali%3Apage%3Ad_flagship3_company%3B8FS8qtBPTpunoUI5zw8NGg%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="social-icon linkedin-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
