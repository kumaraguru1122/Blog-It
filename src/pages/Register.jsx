import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { register } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    register({ email, password, name });
    navigate("/");
  };

  return (
    <div className="grid place-content-center min-h-[80vh]">
      <form
        onSubmit={handleSubmit}
        className="max-w-[400px] md-auto border-2 p-4 rounded-md border-slate-900 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <input
          type="name"
          placeholder="Name"
          className="border p-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
