// src/TestimonialCard.js
import React from "react";
import "./Testimonial.css";
import { TestMonialCard } from "./TestMonialCard";
import girlAvatar from "../../Assets/girl.png";
const TestimonialCard = ({ avatar, name }) => {
  return (
    <div className="testimonial_container">
      <TestMonialCard
        name="Anurag Singh"
        avatar={avatar}
        content="Impressed with Scrappe online scrap pickup service  efficient, convenient, and user friendly. Easy booking, punctual team."
      />
      <TestMonialCard
        name="Sandhya Sharma​"
        avatar={girlAvatar}
        content="Highly recommend Scrappe Online for reliable and convenient scrap disposal. Prompt, professional, and user-friendly. Keep it up the excellent work!"
      />
      <TestMonialCard
        name="Sumit Agarwal​​"
        avatar={avatar}
        content="The team from Scrappe Online arrived promptly at the scheduled time. They were friendly, professional, and handled the pickup with great care."
      />
      <TestMonialCard
        name="Mahesh​​"
        avatar={avatar}
        content="Scrappe Online offers top-notch scrap pickup service! Their team is prompt, and friendly, and ensures hassle-free disposal. Impressed with their commitment!"
      />
    </div>
  );
};

export default TestimonialCard;
