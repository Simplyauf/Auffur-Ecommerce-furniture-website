import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "../pages/homepage/homepage";
import ShopPage from "../pages/shopPage";
import { AdminPage } from "../pages/adminPage";
import { SearchPage } from "../pages/searchPage/searchPage";
import { ProductDetailsPage } from "../pages/productDetails";

const PagesRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/product/:productId" element={<ProductDetailsPage />} />
    </Routes>
  );
};

export default PagesRoute;
