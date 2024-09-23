import React from "react";
import { Navigate } from "react-router-dom";

// This component will protect routes by checking if the user is logged in
const PrivateRoute = ({ children }) => {
  // Check if user is stored in localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  // If no user data is found, redirect to login
  if (!user) {
    return <Navigate to="/login" />;
  }

  // If user is logged in, render the protected component
  return children;
};

export default PrivateRoute;
