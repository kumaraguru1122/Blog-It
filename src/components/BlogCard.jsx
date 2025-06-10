import React from "react";
import { NavLink } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const BlogCard = ({ id, title }) => {
 let brief = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis id provident assumenda laborum temporibus ut, ipsa autem maiores a deleniti at molestias quis sequi....
  `;
  return (
    <div className=" border-2 rounded-md p-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <ReactMarkdown>{brief}</ReactMarkdown>
      <div className="flex justify-between mt-5">
        <button></button>
        <NavLink
          to={`${id}`}
          className=" bg-slate-950 text-white p-2 rounded-md"
        >
          click to view
        </NavLink>
      </div>
    </div>
  );
};

export default BlogCard;
