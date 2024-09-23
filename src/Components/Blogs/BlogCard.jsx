import React from "react";
import "./Blogs.css";
export const BlogCard = ({ image, content, title }) => {
  return (
    <div className="blogs-card">
      <div className="blogs-header">
        <img
          src={
            image ||
            "https://blog.scrapuncle.com/wp-content/uploads/2022/09/pexels-anna-shvets-3962267-683x1024.jpg"
          }
          alt="Blog"
          className="blog-image"
        />
      </div>
      <div className="blogs-body">
        <h3>{title}</h3>
        <p className="content">{content}</p>
      </div>
    </div>
  );
};
