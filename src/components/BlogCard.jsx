import React from "react";
import { NavLink } from "react-router";

const BlogCard = () => {
  return (
    <div className=" border-2 rounded-md p-4">
      <h3 className="text-xl font-bold mb-2">Job title</h3>
      <p className="text-lg italic">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
        perspiciatis eveniet dolorem blanditiis, provident, magnam eos
        exercitationem adipisci quo consequatur velit. Molestiae nesciunt culpa
        qui nihil minima tempore sint consectetur ad totam, veritatis cupiditate
        tempora iure, debitis, alias ratione earum.....
      </p>
      <div className="flex justify-between mt-5">
        <button></button>
        <NavLink to="" className="bg-amber-950 text-amber-50 p-2 rounded-md">
          click to view
        </NavLink>
      </div>
    </div>
  );
};

export default BlogCard;
