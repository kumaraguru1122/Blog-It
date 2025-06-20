import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, login, logout, register } = useContext(UserContext);
  const navigate = useNavigate();

  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = { email, password };
    login(userData);

    console.log("Logged in successfully...");

    navigate("/profile");
  };

  return (
    <div className="grid place-content-center min-h-[80vh]">
      <form
        onSubmit={handleSubmit}
        className="max-w-[400px] md-auto border-2 p-4 rounded-md border-slate-900 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-slate-900 rounded-2xl text-white p-2 w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
