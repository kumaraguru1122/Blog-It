import { Children, createContext, useEffect, useState } from "react";
import blogData from "../data/blogs.json";

export const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  console.log(blogData);
  

  useEffect(() => {
    setBlogs(blogData);
  }, []);

  const createBlog = (newBlog) => {
    setBlogs((prev) => [prev, newBlog]);
  };

  const updateBlog = (updateBlog) => {
    setBlogs((prev) =>
      prev.map((blog) => (blog.id === updateBlog.id ? updateBlog : blog))
    );
  };

  const deleteBlog = (id) => {
    setBlogs((prev) => prev.filter((blog) => blog.id !== id));
  };

  return (
    <BlogContext.Provider value={{ blogs, createBlog, updateBlog, deleteBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
