import React from "react";
import { FaTruck } from "react-icons/fa";

export const WhyChooseUsSection = () => {
  return (
    <div className="mt-20">
      <h2 className="text-[40px] text-center  font-bold">Why choose us</h2>
      <div className="flex items-center px-[10%] gap-10  my-16 flex-col md:flex-row">
        <div className="flex basis-[90%] md:basis-[25%] mx-auto flex-row items-center gap-4  bg-[#ffffff]">
          <div className="bg-[#fca311]  p-8 rounded-[50%] mx-auto">
            <FaTruck className="fill-[#14213d]  w-16 h-16 " />
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[20px] text-center font-bold">free delivery</h4>
            <span className="text-center">Lorem ipsum dolor sit amet.nnannanaannanan</span>
          </div>
        </div>
        <div className="flex basis-[90%] md:basis-[25%] mx-auto flex-row items-center gap-4  bg-[#ffffff]">
          <div className="bg-[#fca311]  p-8 rounded-[50%] mx-auto">
            <FaTruck className="fill-[#14213d]  w-16 h-16 " />
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[20px] text-center font-bold">free delivery</h4>
            <span className="text-center">Lorem ipsum dolor sit amet.nnannanaannanan</span>
          </div>
        </div>
        <div className="flex basis-[90%] md:basis-[25%] mx-auto flex-row items-center gap-4  bg-[#ffffff]">
          <div className="bg-[#fca311]  p-8 rounded-[50%] mx-auto">
            <FaTruck className="fill-[#14213d]  w-16 h-16 " />
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[20px] text-center font-bold">free delivery</h4>
            <span className="text-center">Lorem ipsum dolor sit amet.nnannanaannanan</span>
          </div>
        </div>
        <div className="flex basis-[90%] md:basis-[25%] mx-auto flex-row items-center gap-4  bg-[#ffffff]">
          <div className="bg-[#fca311]  p-8 rounded-[50%] mx-auto">
            <FaTruck className="fill-[#14213d]  w-16 h-16 " />
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[20px] text-center font-bold">free delivery</h4>
            <span className="text-center">Lorem ipsum dolor sit amet.nnannanaannanan</span>
          </div>
        </div>
      </div>
    </div>
  );
};
