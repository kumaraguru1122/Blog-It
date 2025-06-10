import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IconButton, Typography, Button } from "@material-tailwind/react";
import { useLocation } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  PencilSquareIcon,
} from "@heroicons/react/16/solid";

const NavItems = ({ isMobile }) => {
  const location = useLocation();

  const listItems = [
    { item: "Home", route: "/#hero" },
    { item: "Latest posts", route: "/#latest-posts" },
    { item: "About", route: "/#about" },
    { item: "Contact", route: "/#contact" },
  ];

  return listItems.map((list) => (
    <NavLink
      to={list.route}
      onClick={isMobile}
      className={location === list.route ? "font-semibold" : "hover:underline"}
    >
      {list.item}
    </NavLink>
  ));
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white/50 backdrop-blur-md top-0 border-b-2 border-b-black z-50 ">
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <NavLink to="/" className="flex items-center gap-1">
            <PencilSquareIcon className="size-6" />
            <Typography variant="lead">BlogIt.</Typography>
          </NavLink>

          <div className="hidden md:flex items-center space-x-6">
            <NavItems isMobile={false} />
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/login">
              <Button variant="outlined">Login</Button>
            </NavLink>
            <NavLink to="/register">
              <Button variant="dark">Register</Button>
            </NavLink>
          </div>

          <div className="md:hidden">
            <IconButton variant="outlined" size="sm" onClick={toggleMenu}>
              {isOpen ? (
                <XMarkIcon className="size-6 text-black" />
              ) : (
                <Bars3Icon className="size-6 text-black" />
              )}
            </IconButton>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 pb-4 pt-2">
            <NavItems isMobile={toggleMenu} />
            <div className="flex flex-col items-center gap-4 ">
              <NavLink to="/login" onClick={toggleMenu} className="w-full">
                <Button variant="outlined" className="w-full">
                  Login
                </Button>
              </NavLink>
              <NavLink to="/register" onClick={toggleMenu} className="w-full">
                <Button variant="dark" className="w-full">
                  Register
                </Button>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
