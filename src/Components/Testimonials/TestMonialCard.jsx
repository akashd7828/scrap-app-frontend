import React, { useState } from "react";
import "./Testimonial.css";
export const TestMonialCard = ({ avatar, name, content }) => {
  const [showFullContent, setShowFullContent] = useState(false);
  const toggleContentDisplay = () => {
    setShowFullContent((prevShowFullContent) => !prevShowFullContent);
  };
  const truncatedContent =
    content.length > 100 ? content.slice(0, 100) + "..." : content;
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <img
          src={
            avatar ||
            `https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg`
          }
          alt="Avatar"
          className="avatar"
        />
        <div className="name">{name || `Ankesh`}</div>
      </div>
      <div className="testimonial-body">
        <p>
          {showFullContent ? content : truncatedContent}
          <span className="read-more" onClick={toggleContentDisplay}>
            {showFullContent ? "Show Less" : "Read More"}
          </span>
        </p>
      </div>
    </div>
  );
};
