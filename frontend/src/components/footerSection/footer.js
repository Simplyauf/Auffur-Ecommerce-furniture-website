import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="w-[100%] px-[4%]  tablet:px-[6%] bg-secondaryColor text-white flex flex-col items-start gap-6 pt-64 pb-16 -mt-48">
      <div>
        <svg
          className="w-[35%]"
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 271.15 110.85"
        >
          <text
            className="text-[99.69px] fill-[#ffffff] font-leagueGothic tracking-[-0.06em]"
            transform="translate(0 84.73)"
          >
            Auf
            <tspan class="tracking-[-0.01em]" x="79.21" y="0">
              Fur
            </tspan>
          </text>
        </svg>
        <p className="mt-4 md:w-[80%] lg:w-[60%]">
          Home of the best interior and exterior furnitures. Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </p>
      </div>
      <article className="lg:flex lg:items-center gap-4 xs:w-[60%] ">
        <div className="flex flex-col items-start gap-4 md:w-[70%] lg:basis-[30%]">
          <ul className="flex gap-6">
            <IoLocationOutline className="w-20 h-12  stroke-primaryColor" />
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae eaque optio aut!. Lorem ipsum dolor
              sit amet consectetur.{" "}
            </li>
          </ul>
          <ul className="flex gap-6">
            <FiMail className="w-6 h-6 stroke-primaryColor" />
            <li>auFURFurniture@gmail.com</li>
          </ul>
          <ul className="flex gap-6">
            <FiPhoneCall className="w-6 h-6 stroke-primaryColor" />
            <li>+1-243-546-4569</li>
          </ul>
        </div>
        <div className="flex flex-col w-[100%] gap-6 mt-8 lg:mt-0 tablet:flex-wrap md:flex-wrap md:justify-between tablet:flex-row md:flex-row tablet:justify-between md:w-[70%] lg:-[60%] lg:justify-evenly lg:gap-8">
          <div className="tablet:basis-[45%]">
            <h3 className="text-[18px] font-bold">Pages</h3>
            <ul className="flex flex-col items-start gap-2 mt-4">
              <li>Homepage</li>
              <li>Shop</li>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>
          <ul className="flex flex-col items-start gap-2 mt-4 tablet:basis-[45%]">
            <li>Privacy policy</li>
            <li>Licenses agreement</li>
            <li>FAQS</li>
            <li>Terms</li>
          </ul>
          <div className="items-start tablet:basis-[45%]">
            <h3 className="text-[18px] font-bold">My Account</h3>
            <ul className="flex flex-col items-start gap-2 mt-4">
              <li>My Account</li>
              <li>Order History</li>
              <li>Wishlists</li>
              <li>Checkout</li>
              <li>Cart</li>
            </ul>
          </div>
        </div>
      </article>
      <div className="self-center">
        <ul className="flex items-center gap-4 md:gap-6 tablet:gap-6 mx-auto mt-4 ">
          <li className="p-3 rounded-[30%] border-[1px] border-white">
            <FiInstagram className="w-6 h-6" />
          </li>
          <li className="p-3 rounded-[30%] border-[1px] border-white">
            {" "}
            <BsGithub className="w-6 h-6" />
          </li>
          <li className="p-3 rounded-[30%] border-[1px] border-white">
            {" "}
            <FiTwitter className="w-6 h-6" />
          </li>
        </ul>
      </div>
    </footer>
  );
};
