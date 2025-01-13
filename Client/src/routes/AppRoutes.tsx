import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

// Page Components
import Home from "../pages/Home";
import Features from "../pages/Features";
import Pricing from "../pages/Pricing";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import Mentions from "../pages/Dashboard/Mentions";
import Analytics from "../pages/Dashboard/Analytics";
import Alerts from "../pages/Dashboard/Alerts";
import Reports from "../pages/Dashboard/Reports";

// Protected Route Component
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardHome />} />
          <Route path="/dashboard/mentions" element={<Mentions />} />
          <Route path="/dashboard/analytics" element={<Analytics />} />
          <Route path="/dashboard/alerts" element={<Alerts />} />
          <Route path="/dashboard/reports" element={<Reports />} />
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
