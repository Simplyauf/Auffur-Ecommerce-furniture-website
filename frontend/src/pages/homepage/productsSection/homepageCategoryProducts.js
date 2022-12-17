import React from "react";
import { BsEye } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { FaLongArrowAltRight } from "react-icons/fa";
import { SingleProductBox } from "../../../components/singleProductBox";

export const HomepageCategoryProducts = ({ currentlyRequestedCategories }) => {
  return (
    <div className="w-[92%] lg:w-[96%] lg:gap-[1.5rem] tablet:w-[88%] mx-auto tablet:gap-y-12 md:gap-y-12 items-center tablet:justify-between justify-center gap-[4rem] md:justify-between flex flex-col tablet:flex-row md:flex-row md:flex-wrap md:gap-8 tablet:flex-wrap tablet:gap-2">
      {currentlyRequestedCategories.map((productData) => (
        <SingleProductBox productsData={productData} key={productData._id} />
      ))}
      <div className="self-end tablet:ml-auto md:ml-auto flex gap-3 items-center ">
        <button className="text-lg lg:text-2xl text-primaryColor font-semibold hover:underline transition underline-offset-[6px] decoration-2">
          Shop for more
        </button>
        <FaLongArrowAltRight className="w-6 lg:w-10 h-10 fill-primaryColor" />
      </div>
    </div>
  );
};
