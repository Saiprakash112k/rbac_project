import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import UserManagement from "../components/UserManagement";
import RoleManagement from "../components/RoleManagement";
import { useNavigate } from "react-router-dom";

const AppRoutes = () => {
  const navigate =  useNavigate()
  window.addEventListener('load', () => {
    sessionStorage.clear();
     navigate('/')
});
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<AuthRoute component={Dashboard} />} />
      <Route path="/users" element={<AuthRoute component={UserManagement} />} />
      <Route path="/roles" element={<AuthRoute component={RoleManagement} />} />
    </Routes>
  );
};

export default AppRoutes;
