import React from "react";
import { FaTruck } from "react-icons/fa";

export const WhyChooseUsSection = () => {
  return (
    <div className="pt-4 pb-3 mb-16 bg-neutralColor">
      <h2 className="text-[40px] text-center  font-bold">Why choose us</h2>
      <div className="flex items-center w-[92%] mx-auto gap-10  mt-10 flex-col md:flex-row overflow-auto">
        <div className="flex w-[100%] md:w-[25%]  items-center gap-4  ">
          <div className="bg-primaryColor  p-8 rounded-[50%] mx-auto">
            <FaTruck className="fill-secondaryColor  w-12 h-12 " />
          </div>
          <div className="flex flex-col  gap-4">
            <h4 className="text-[24px]  text-center font-bold">
              Free delivery
            </h4>
            <p className="text-center leading-[140%]">
              Lorem ipsum dolor sit amet.nnannanaannanan
            </p>
          </div>
        </div>
        <div className="flex w-[100%] md:w-[25%]flex-row items-center gap-4  ">
          <div className="bg-primaryColor  p-8 rounded-[50%] mx-auto">
            <FaTruck className="fill-secondaryColor  w-12 h-12 " />
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[24px]  text-center font-bold">
              Free delivery
            </h4>
            <span className="text-center leading-[140%]">
              Lorem ipsum dolor sit amet.nnannanaannanan
            </span>
          </div>
        </div>
        <div className="flex w-[100%] md:w-[25%] flex-row items-center gap-4 ">
          <div className="bg-primaryColor  p-8 rounded-[50%] mx-auto">
            <FaTruck className="fill-secondaryColor  w-12 h-12 " />
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[24px]  text-center font-bold">
              Free delivery
            </h4>
            <span className="text-center leading-[140%]">
              Lorem ipsum dolor sit amet.nnannanaannanan
            </span>
          </div>
        </div>
        <div className="flex w-[100%] md:w-[25%]  items-center gap-4 ">
          <div className="bg-primaryColor  p-8 rounded-[50%] mx-auto">
            <FaTruck className="fill-secondaryColor  w-12 h-12 " />
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[24px]  text-center font-bold">
              free delivery
            </h4>
            <span className="text-center leading-[140%]">
              Lorem ipsum dolor sit amet.nnannanaannanan
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
