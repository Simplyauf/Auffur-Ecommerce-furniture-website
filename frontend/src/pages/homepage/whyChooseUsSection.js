import React from "react";
import { FaTruck } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";
import { BiUserVoice } from "react-icons/bi";
import { TbDiscount2 } from "react-icons/tb";

export const WhyChooseUsSection = () => {
  return (
    <div className="py-10 mb-16 bg-neutralColor w-[100%]">
      <h2 className="text-[40px] text-center  font-bold ">Why choose us</h2>
      <div className="flex items-center w-[18.5em] max-w-[92%] mx-auto gap-10  mt-10 flex-col tablet:w-[70%] md:flex-row md:w-[80%] md:flex-wrap md:justify-between">
        <div className="flex w-[100%] md:basis-[45%]  items-center gap-4 tablet:gap-6 tablet:w-[90%] tablet:max-w-[384px]">
          <div className="bg-primaryColor  p-8 rounded-[50%] mx-auto">
            <FaTruck className="fill-secondaryColor w-9 h-9 md:w-12 md:h-12 tablet:w-12 tablet:h-12 " />
          </div>
          <div className="flex flex-col  gap-4">
            <h4 className="text-[24px]  text-center font-bold font-RobotoCondensed">Free Shipping</h4>
            <p className="text-center leading-[140%] text-to-be-wrapped">
              We offer free shipping on all orders, so you can shop with confidence knowing that there are no hidden
              costs."
            </p>
          </div>
        </div>
        <div className="flex w-[100%] md:basis-[45%] flex-row items-center gap-4  tablet:gap-6 tablet:w-[90%] tablet:max-w-[384px]">
          <div className="bg-primaryColor  p-8 rounded-[50%] mx-auto">
            <BiUserVoice className="fill-secondaryColor w-9 h-9 md:w-12 md:h-12 tablet:w-12 tablet:h-12  " />
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[24px]  text-center font-bold  font-RobotoCondensed">Customer Service</h4>
            <span className="text-center leading-[140%] text-to-be-wrapped">
              Our customer service team is available to help you with any issues or concerns. We're here to make sure
              you are completely satisfied with your purchase
            </span>
          </div>
        </div>
        <div className="flex w-[100%] md:basis-[45%] flex-row items-center gap-4 tablet:gap-6 tablet:w-[90%] tablet:max-w-[384px]">
          <div className="bg-primaryColor  p-8 rounded-[50%] mx-auto">
            <TbDiscount2 className="fill-secondaryColor w-9 h-9 md:w-12 md:h-12 tablet:w-12 tablet:h-12  " />
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[24px]  text-center font-bold font-RobotoCondensed">Exclusive Offers and Discounts</h4>
            <span className="text-center leading-[140%] text-to-be-wrapped">
              We're constantly updating our inventory with exclusive offers and products that you won't find anywhere
              else. From limited-edition items to one-of-a-kind pieces, we have something for everyone
            </span>
          </div>
        </div>
        <div className="flex w-[100%] md:basis-[45%]  items-center gap-4 tablet:gap-6 tablet:w-[90%] tablet:max-w-[384px]">
          <div className="bg-primaryColor  p-8 rounded-[50%] mx-auto">
            <AiOutlineSafety className="fill-secondaryColor w-9 h-9 md:w-12 md:h-12 tablet:w-12 tablet:h-12  " />
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[24px]  text-center font-bold font-RobotoCondensed">Secure and safe payment</h4>
            <span className="text-center leading-[140%] text-to-be-wrapped">
              We offer a range of safe payment options, so you can shop with confidence knowing that your information is
              protected every step of the way."
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
