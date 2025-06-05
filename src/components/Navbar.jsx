import { useState } from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white  sticky top-0 border-b-2 z-50 text-lg">
      <div className="max-w-7xl mx-auto px-4 relative sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <NavLink to="/" className="text-2xl font-bold ">
            BlogIt.
          </NavLink>

          <div className="hidden md:flex items-center space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "font-semibold" : "hover:underline"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "font-semibold" : "hover:underline"
              }
            >
              Explore
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold"
                  : "hover:underline"
              }
            >
              About
            </NavLink>
            
          </div>
          <div className="hidden md:flex items-center space-x-6">
          <NavLink
              to="/login"
              className="border-2 border-slate-900 rounded-2xl px-3 py-1"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="bg-slate-900 text-white rounded-2xl px-3 py-2"
            >
              Register
            </NavLink>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-3xl font-slate-900">
              {isOpen ? "X" : "= "}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 pb-4 pt-2">
            <NavLink
              to="/"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/blogs"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600"
              }
            >
              Blogs
            </NavLink>
            <NavLink
              to="/about"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600"
              }
            >
              About
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}
