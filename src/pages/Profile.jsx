import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <div className="max-w-md mx-auto mt-10 text-center border-2 m-5 p-5">
      <h1 className="text-3xl font-bold">User Profile</h1>
      <div className="flex gap-2 items-center m-3">
        <span className="w-12 h-12 bg-slate-900 rounded-full"></span>
        <p className="">Email: {user.email}</p>
      </div>
      <div className="flex justify-center gap-5">
      <NavLink
        to="/editor"
        className="border-2 rounded-2xl p-2 hover:bg-slate-900 hover:text-white"
      >
        Write
      </NavLink>
      <button
        onClick={logout}
        className=" rounded-2xl p-2 bg-slate-900 text-white"
      >
        Logout
      </button>
      </div>
    </div>
  );
};

export default Profile;
