import React from "react";
import { Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import BlogProvider from "./contexts/BlogContext";

const App = () => {
  return (
    <BlogProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route
            path="*"
            element={
              <h1 className="text-5xl font-bold text-center m-8">
                404 not found
              </h1>
            }
          />
        </Route>
      </Routes>
    </BlogProvider>
  );
};

export default App;
