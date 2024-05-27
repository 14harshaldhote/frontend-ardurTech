import React from "react";
import { Route, Routes } from "react-router-dom";
import HeroSection from "../component/basicComponent/HeroSection";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import DashBoard from "../component/Section/DashBoard";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashBoard />} />
      {/* Add other routes as needed */}
    </Routes>
  );
};

export default Router;
