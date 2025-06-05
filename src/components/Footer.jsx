import React from "react";

const Footer = () => {
  return <div className="h-20 bg-slate-900 text-slate-50 flex justify-between items-center p-4  ">
    <div className="text-2xl font-bold">BlogIt.</div>
    <ul className="flex gap-4 justify-center">
        <li>Instagram</li>
        <li>LinkedIn</li>
        <li>Facebook</li>
    </ul>
  </div>;
};

export default Footer;
