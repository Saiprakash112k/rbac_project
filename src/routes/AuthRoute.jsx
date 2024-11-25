import React from "react";
import { Navigate } from "react-router-dom";

const AuthRoute = ({ component: Component }) => {
  const isAuthenticated = JSON.parse(sessionStorage.getItem("userData"))
  return isAuthenticated.permissions.length > 0 ? <Component /> : <Navigate to="/" />;
};

export default AuthRoute;
