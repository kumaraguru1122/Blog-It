import React, { useContext, useState } from "react";
import BlogCard from "../components/BlogCard";
import { BlogContext } from "../contexts/BlogContext";

const Blogs = () => {
  let { blogs, createBlog, updateBlog, deleteBlog } = useContext(BlogContext);
  const [page, setPage] = useState(1);
  const pageSize = 6;

  const paginatedBlogs = blogs.slice((page - 1) * pageSize, page * pageSize);
  const totalPages = Math.ceil(blogs.length / pageSize);

  return (
    <div className="p-4 min-h-screen">
      <div className="grid md:grid-cols-2 gap-4">
        {paginatedBlogs.map((blog) => (
          <BlogCard id={blog.id} key={blog.id} title={blog.title} />
        ))}
      </div>
      <div className="flex justify-center mt-8 gap-4">
        <button
          className="px-4 py-2 border-2 rounded-xl"
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2">
          page {page} of {totalPages}
        </span>
        <button
          className="px-4 py-2 border-2 rounded-xl"
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Blogs;