import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(storedUser || null);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user)); // Save to localStorage
    } else {
      localStorage.removeItem("user"); // Remove from localStorage when user logs out
    }
  }, [user]);

  const login = (userData) => {
    setUser(userData); 
  };

  const logout = () => {
    setUser(null); 
  };

  const register = (userData) => {
    setUser(userData); 
  };

  return (
    <UserContext.Provider value={{ user, login, logout, register }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
