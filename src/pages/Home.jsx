import React from "react";

const Home = () => {
  return (
    <div className="">
      <main className="grid md:grid-cols-2 min-h-[90vh]   max-w-7xl border-2 my-5 rounded-4xl mx-auto">
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
            <button className="border-2 rounded-2xl p-2 hover:bg-slate-900 hover:text-white">
              CTA button 1
            </button>
            <button className="border-2 rounded-2xl p-2 hover:bg-slate-900 hover:text-white">
              CTA button 2
            </button>
          </div>
        </div>
        <div className="grid place-content-center">
          <div className="hidden md:block w-96 h-96 bg-slate-900 border-2  rounded-md"></div>
        </div>
      </main>
    </div>
  );
};

export default Home;
