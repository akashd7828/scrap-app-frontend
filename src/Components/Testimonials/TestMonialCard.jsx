import React from "react";
import "./Testimonial.css";
export const TestMonialCard = ({ avatar, name, content }) => {
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
        <p>{content}</p>
      </div>
    </div>
  );
};
