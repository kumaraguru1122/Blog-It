import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import React from "react";
import Footer from "../components/Footer";


const MainLayout = () => {
  console.log("it's rendered");
  
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};

export default MainLayout;
