import React, { useState, useContext } from "react";
import { BlogContext } from "../contexts/BlogContext";
import { useNavigate } from "react-router";

const BlogEditor = () => {
  const { createBlog } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.prevenDefault();
    const newBlog = {
      id: Date.now.toString(),
      title,
      content,
    };
    createBlog(newBlog);
    navigate("/blogs");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl my-2 mx-auto mt-10 space-y-4">
      <h2 className="text-2xl font-bold">Create Blog Post</h2>
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        className="border p-2 w-full min-h-200px"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        placeholder="Markdown Content"
        className="border p-2 w-full min-h-200px"
        rows='20'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button type="submit" className="bg-slate-900 text-white px-4 py-2">
        Publish
      </button>
    </form>
  );
};

export default BlogEditor;
