import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
// import Login from "../pages/Login";
// import Dashboard from "../pages/Dashboard";

// Simple mock auth function
const isAuthenticated = () => {
  return localStorage.getItem("auth") === "true"; // Example: set true after login
};

// Private route wrapper
const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}

        {/* Private/Admin Routes */}
        {/* <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
