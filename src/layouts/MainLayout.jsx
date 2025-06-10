import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import React from "react";

const MainLayout = () => {
  console.log("it's rendered");

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
