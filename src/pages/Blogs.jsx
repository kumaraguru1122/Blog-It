import React, { useContext } from "react";
import BlogCard from "../components/BlogCard";
import { BlogContext } from "../contexts/BlogContext";
const Blogs = () => {
  let { blogs } = useContext(BlogContext);
  console.log(blogs);

  return (
    <div className="grid md:grid-cols-2 p-4 gap-4">
      {blogs.map((blog) => (
        <BlogCard id={blog.id} key={blog.id} title={blog.title}  />
      ))}
    </div>
  );
};

export default Blogs;
