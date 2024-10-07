import React, { useState } from "react";
import "./Blogs.css";

export const BlogCard = ({ image, content, title, blogUrl }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  // A simple URL validation function
  const isValidUrl = (url) => {
    try {
      new URL(url); // URL constructor throws an error for invalid URLs
      return true;
    } catch (e) {
      return false;
    }
  };

  // Function to toggle the content display
  const toggleContentDisplay = () => {
    setShowFullContent((prevShowFullContent) => !prevShowFullContent);
  };

  const truncatedContent =
    content.length > 100 ? content.slice(0, 100) + "..." : content;

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

        {/* Conditionally show full content or truncated content */}
        <p className="content">
          {showFullContent ? content : truncatedContent}
        </p>

        {/* Conditionally render "Read More" */}
        {blogUrl && isValidUrl(blogUrl) ? (
          <a
            href={blogUrl}
            className="read-more"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
        ) : (
          <span className="read-more" onClick={toggleContentDisplay}>
            {showFullContent ? "Show Less" : "Read More"}
          </span>
        )}
      </div>
    </div>
  );
};
