import React from "react";
import { BsEye } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { SingleProductBox } from "../../../components/singleProductBox";

export const ProductCategories = () => {
  return (
    <div className="w-[80%] mx-auto items-center justify-center gap-10  flex flex-col">
      <SingleProductBox />
      <SingleProductBox />
      <SingleProductBox />
      <SingleProductBox />
      <SingleProductBox />
      <SingleProductBox />
      <SingleProductBox />
      <SingleProductBox />
      <SingleProductBox />
    </div>
  );
};
