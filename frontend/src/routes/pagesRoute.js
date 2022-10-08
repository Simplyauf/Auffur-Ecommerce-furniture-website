import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "../pages/homepage/homepage";
import ShopPage from "../pages/shopPage";
import { AdminPage } from "../pages/adminPage";

const PagesRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Shop" element={<ShopPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
};

export default PagesRoute;
