// src/Components/Blog.js
import React from "react";
import "../styles/Blog.css"; // Import the styles

const Blog = () => {
  return (
    <div className="blog-container">
      <h1>My Blog</h1>
      <article>
        <h2>Blog Post Title</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </article>
      {/* Add more blog posts as needed */}
    </div>
  );
};

export default Blog;
