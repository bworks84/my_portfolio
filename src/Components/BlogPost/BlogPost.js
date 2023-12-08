// BlogPost.js
import React from "react";

const BlogPost = ({ title, content, date }) => (
  <div className="blog-post">
    <h2>{title}</h2>
    <p>{content}</p>
    <small>{date}</small>
  </div>
);

export default BlogPost;
