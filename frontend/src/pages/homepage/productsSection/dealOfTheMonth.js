import React from "react";
import { BsArrowRight } from "react-icons/bs";

export const DealOfTheMonth = () => {
  return (
    <section>
      <h1 className="font-bold text-[36px] mb-8 text-center ">Deal of the Week</h1>
      <div className="w-[100%] bg-[#e5e5e5] py-14 gap-7 h-[750px] flex flex-col px-[5%]">
        <div className="w-[100%]  h-[40%] mx-auto">
          <img
            className="w-[100%] h-[100%] "
            src="https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div className="">
          <h2 className="text-[36px] font-bold text-center">Get -90% from this Furniture set</h2>
          <div className="flex gap-4 items-start bg-[#fca311] text-white font-bold font-RobotoCondensed py-2 justify-center mt-8">
            <div className="flex flex-col gap-[2px] items-center">
              <span className="text-[36px] ">08</span>
              <span className="text-[14px]">DAYS</span>
            </div>
            <span className="text-[36px]">:</span>
            <div className="flex flex-col gap-[2px] items-center">
              <span className="text-[36px] ">19</span>
              <span className="text-[14px]">HOURS</span>
            </div>
            <span className="text-[36px]">:</span>
            <div className="flex flex-col gap-[2px] items-center">
              <span className="text-[36px]  ">02</span>
              <span className="text-[14px]">MINUTES</span>
            </div>
            <span className="text-[36px]">:</span>
            <div className="flex flex-col gap-[2px] items-center">
              <span className="text-[36px]  ">59</span>
              <span className="text-[14px]">SECONDS</span>
            </div>
          </div>
          <h2 className="my-8 font-bold font-RobotoCondensed text-[18px] inline-block">
            <span>Availability :</span> <span className="mr-2">1</span>
          </h2>
          <button className=" text-[#fca311] bg-transparent border-[1px] border-[#fca311] cursor-pointer rounded-sm h-[44px] w-[140px] gap-2 justify-center z-[100] flex items-center product-details-link font-bold font-RobotoCondensed ">
            <span> Buy Now</span>
            <BsArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};
