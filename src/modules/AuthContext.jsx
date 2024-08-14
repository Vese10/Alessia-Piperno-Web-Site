import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (role) => {
    setIsAuthenticated(true);
    sessionStorage.setItem("role", role); // Usa `role` passato come argomento
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};