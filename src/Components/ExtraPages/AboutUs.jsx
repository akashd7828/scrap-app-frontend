import React from "react";
import "./AboutUs.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa"; // Import icons

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-section">
        <div className="about-us-title">
          About Us – <b className="bold-title">ScrapPe by DHARB Innoventures</b>
        </div>

        {/* Enhanced Welcome Line */}
        <p className="about-us-welcome enhanced-welcome">
          Welcome to <span className="highlight">ScrapPe Online</span> Sell
          Scrap Online
        </p>

        <p className="about-us-description">
          ScrapPe-DHARB Innoventures is India's first comprehensive scrap
          collection, recycling, and upcycling company, founded by graduates
          from NIPER and BITS Pilani. Our mission is to tackle global
          environmental challenges by reducing plastic waste and promoting
          sustainable practices, all while safeguarding human and animal health.
          We are dedicated to creating a cleaner, greener future through
          innovative waste management solutions.
        </p>

        <p className="about-us-main">
          We operate using two business models: Reverse Vending Machines (RVMs)
          and Scheduled Pick-Up services. Our AI-powered RVMs detect plastic
          bottles and incentivize users with rewards like discounts, offers, or
          cash for bill payments, making recycling an engaging and rewarding
          experience. Additionally, our Scheduled Pick-Up service allows
          individuals and businesses to arrange scrap collections through an
          easy-to-use mobile app, ensuring efficient collection and reuse of
          recyclable materials. By incentivizing the recycling of both scrap and
          bottles, ScrapPe fosters a culture of environmental responsibility.
          Our vision is to inspire collective action for a sustainable future,
          significantly contributing to climate action and environmental
          protection.
        </p>

        <h2 className="about-us-subtitle">
          Here's why we are the preferred choice for scrap pickup:
        </h2>

        <ul className="about-us-list">
          <li>
            1. <b>Exclusive Bottle Recycling with RVMs:</b> Our AI-powered
            Reverse Vending Machines (RVMs) are specifically designed for
            plastic bottle recycling. Simply deposit your plastic bottles into
            the RVM, and you'll receive rewards such as discounts, offers, or
            cash for bill payments. This convenient and rewarding process makes
            bottle recycling easy and encourages responsible waste management.
          </li>
          <li>
            2. <b>Easy Online Booking for Scrap Pick-Up:</b> For all other scrap
            materials, you can schedule a pick-up through our user-friendly app.
            With just a few clicks, you can select the most convenient date and
            time for our team to collect your recyclable materials from your
            location.
          </li>
          <li>
            3. <b>Wide Range of Accepted Scrap Materials for Pick-Up:</b> Our
            Scheduled Pick-Up service accepts a variety of scrap, including
            paper, plastic (non-bottle items), cardboard, metal, glass, and
            e-waste. Whether it’s old newspapers, unused electronics, or any
            other recyclable materials, we ensure responsible collection and
            disposal.
          </li>
          <li>
            4. <b>Professional and Courteous Team for Scrap Pick-Up:</b> Our
            trained professionals handle all scrap materials with efficiency and
            professionalism. They arrive promptly at your location to ensure a
            smooth and hassle-free pick-up experience.
          </li>
          <li>
            5. <b>Environmentally Responsible Disposal for Both Models:</b>{" "}
            While our RVMs focus exclusively on bottle recycling, our Scheduled
            Pick-Up service responsibly manages all other types of recyclable
            scrap. We sort and process all collected materials using
            eco-friendly methods to minimize environmental impact.
          </li>
          <li>
            5. <b>Fair and Transparent Pricing for Scrap Pick-Up:</b> Our
            pricing for scrap collection is competitive and transparent, based
            on the type and quantity of materials. You can trust that you’ll
            receive value for your scrap while contributing to environmental
            conservation.
          </li>
        </ul>

        <p className="about-us-main">
          Join us in our mission to reduce waste and promote recycling. Use our
          RVMs for easy bottle recycling, or schedule a pick-up for all your
          other scrap materials. Together, we can create a cleaner, greener
          future.
        </p>

        <p className="about-us-contact">
          Contact ScrapPe today and experience the convenience of recycling from
          the comfort of your home!
        </p>

        <div className="about-us-mission-goals">
          <div className="mission-vision-goal">
            <h3 className="vision-title">Vision</h3>
            <p className="vision-description">
              At ScrapPe, we envision leading the way in sustainable waste
              management in India, inspiring communities and businesses to
              actively engage in recycling and upcycling. We aim to create a
              future where waste is minimized, resources are conserved, and
              everyone contributes to a cleaner, greener planet.
            </p>
          </div>

          <div className="mission-vision-goal">
            <h3 className="mission-title">Mission</h3>
            <p className="mission-description">
              Our mission is to provide innovative and accessible recycling
              solutions that address pressing environmental challenges. Through
              our AI-powered Reverse Vending Machines (RVMs) and convenient
              Scheduled Pick-Up services, we empower individuals and businesses
              to transform waste into valuable resources while fostering a
              culture of environmental responsibility.
            </p>
          </div>

          <div className="mission-vision-goal">
            <h3 className="goal-title">Goal</h3>
            <p className="goal-description">
              We strive to boost recycling rates in India by making it simple
              and rewarding, raise awareness about sustainability through
              engaging campaigns, invest in technology and research to enhance
              our services, build strong partnerships with local businesses and
              organizations, and create economic opportunities that address
              environmental issues. Together, we can make a meaningful impact
              and work towards a sustainable future.
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
