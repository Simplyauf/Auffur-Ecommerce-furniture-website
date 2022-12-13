import React from "react";
import { BsEye } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { FaLongArrowAltRight } from "react-icons/fa";
import { SingleProductBox } from "../../../components/singleProductBox";

export const HomepageCategoryProducts = ({ currentlyRequestedCategories }) => {
  return (
    <div className="w-[92%] mx-auto items-center justify-center gap-[4rem]  flex flex-col">
      {currentlyRequestedCategories.map((productData) => (
        <SingleProductBox productsData={productData} key={productData._id} />
      ))}
      <div className="self-end flex gap-3 items-center ">
        <button className="text-[18px] text-primaryColor font-semibold hover:underline transition underline-offset-[6px] decoration-2">
          Shop for more
        </button>
        <FaLongArrowAltRight className="w-6 h-6 fill-primaryColor" />
      </div>
    </div>
  );
};
