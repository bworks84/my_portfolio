// Blog.js
import React, { useState } from "react";
import BlogPost from "../BlogPost/BlogPost";
import "./Blog.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", content: "" });

  const addPost = () => {
    if (newPost.title && newPost.content) {
      setPosts([
        ...posts,
        { ...newPost, date: new Date().toLocaleDateString() },
      ]);
      setNewPost({ title: "", content: "" });
    }
  };

  return (
    <div className="blog">
      <h1>My Blog</h1>
      <div className="new-post-form">
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <div className="new-post-content-area">
          <textarea
            typeof="text"
            placeholder="  Write your blog post here..."
            value={newPost.content}
            onChange={(e) =>
              setNewPost({ ...newPost, content: e.target.value })
            }
          ></textarea>
        </div>
        <button onClick={addPost}>Add Post</button>
      </div>
      {posts.map((post, index) => (
        <BlogPost key={index} {...post} />
      ))}
    </div>
  );
};

export default Blog;
