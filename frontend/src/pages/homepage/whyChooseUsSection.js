import React from "react";
import { FaTruck } from "react-icons/fa";

export const WhyChooseUsSection = () => {
  return (
    <div className="py-10 mb-16 bg-neutralColor w-[100%]">
      <h2 className="text-[40px] text-center  font-bold">Why choose us</h2>
      <div className="flex items-center w-[18.5em] max-w-[92%] mx-auto gap-10  mt-10 flex-col tablet:w-[70%] md:flex-row md:w-[80%] md:flex-wrap md:justify-between">
        <div className="flex w-[100%] md:basis-[45%]  items-center gap-4 tablet:gap-6 tablet:w-[90%] tablet:max-w-[384px]">
          <div className="bg-primaryColor  p-8 rounded-[50%] mx-auto">
            <FaTruck className="fill-secondaryColor w-9 h-9 md:w-12 md:h-12 tablet:w-12 tablet:h-12 " />
          </div>
          <div className="flex flex-col  gap-4">
            <h4 className="text-[24px]  text-center font-bold">Free delivery</h4>
            <p className="text-center leading-[140%] text-to-be-wrapped">Lorem ipsum dolor sit amet.nnannanaannananp</p>
          </div>
        </div>
        <div className="flex w-[100%] md:basis-[45%] flex-row items-center gap-4  tablet:gap-6 tablet:w-[90%] tablet:max-w-[384px]">
          <div className="bg-primaryColor  p-8 rounded-[50%] mx-auto">
            <FaTruck className="fill-secondaryColor w-9 h-9 md:w-12 md:h-12 tablet:w-12 tablet:h-12  " />
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[24px]  text-center font-bold">Free delivery</h4>
            <span className="text-center leading-[140%] text-to-be-wrapped">
              Lorem ipsum dolor sit amet.nnannanaannanan
            </span>
          </div>
        </div>
        <div className="flex w-[100%] md:basis-[45%] flex-row items-center gap-4 tablet:gap-6 tablet:w-[90%] tablet:max-w-[384px]">
          <div className="bg-primaryColor  p-8 rounded-[50%] mx-auto">
            <FaTruck className="fill-secondaryColor w-9 h-9 md:w-12 md:h-12 tablet:w-12 tablet:h-12  " />
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[24px]  text-center font-bold">Free delivery</h4>
            <span className="text-center leading-[140%] text-to-be-wrapped">
              Lorem ipsum dolor sit amet.nnannanaannanan
            </span>
          </div>
        </div>
        <div className="flex w-[100%] md:basis-[45%]  items-center gap-4 tablet:gap-6 tablet:w-[90%] tablet:max-w-[384px]">
          <div className="bg-primaryColor  p-8 rounded-[50%] mx-auto">
            <FaTruck className="fill-secondaryColor w-9 h-9 md:w-12 md:h-12 tablet:w-12 tablet:h-12  " />
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[24px]  text-center font-bold">free delivery</h4>
            <span className="text-center leading-[140%] text-to-be-wrapped">
              Lorem ipsum dolor sit amet.nnannanaannanan
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
