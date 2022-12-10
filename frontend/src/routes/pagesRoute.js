import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "../pages/homepage/homepage";
import ShopPage from "../pages/shopPage";
import { AdminPage } from "../pages/adminPage";
import { SearchPage } from "../pages/searchPage/searchPage";
import { ProductDetailsPage } from "../pages/productDetails";
import { CheckoutPage } from "../pages/checkoutPage";
import { LoginPage } from "../pages/loginPage";
import { RegisterPage } from "../pages/RegisterPage";
const PagesRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/product/:productId" element={<ProductDetailsPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
};

export default PagesRoute;
