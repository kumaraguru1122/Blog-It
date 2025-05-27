import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="bg-amber-100">
      <main className="grid md:grid-cols-2 min-h-[90vh]  text-amber-950 max-w-7xl  mx-auto">
        <div className="grid place-content-center px-10  gap-y-8">
          <h1 className="text-center md:text-left text-5xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </h1>
          <p className="text-center md:text-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel unde
            ex illo, distinctio consequuntur assumenda architecto ipsam, odio
            vitae facere aspernatur? Repudiandae corporis magni libero tenetur
            consequuntur eius? Laborum dicta quam accusamus! Ratione neque magni
            dicta maxime deleniti molestias odit aliquam, adipisci id quae
            expedita repellat cum illum nostrum laboriosam.
          </p>
          <div className="flex gap-8 w-full justify-center">
            <button className="border-2 p-2">CTA button 1</button>
            <button className="border-2 p-2">CTA button 2</button>
          </div>
        </div>
        <div className="grid place-content-center">
          <div className="hidden md:block w-96 h-96 bg-amber-950 border-2 border-amber-900 rounded-md">lkjh</div>
        </div>
      </main>
    </div>
  );
};

export default Home;
