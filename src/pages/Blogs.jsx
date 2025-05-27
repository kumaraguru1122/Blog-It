import React from "react";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  return (
    <div className="grid md:grid-cols-2 p-4 gap-4">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default Blogs;
