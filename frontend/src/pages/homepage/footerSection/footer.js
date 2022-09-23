import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="w-[100%] px-[5%] bg-[#14213d] text-white flex flex-col items-start gap-6 pt-64 pb-16 -mt-48">
      <div>
        <h1 className="text-[52px] font-bold">auFUR</h1>
        <p className="mt-4">
          Home of the best interior and exterior furnitures. Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </p>
      </div>
      <div className="flex flex-col items-start gap-4">
        <ul className="flex gap-6">
          <IoLocationOutline className="w-20 h-12  stroke-[#fca311]" />
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae eaque optio aut!. Lorem ipsum dolor sit
            amet consectetur.{" "}
          </li>
        </ul>
        <ul className="flex gap-6">
          <FiMail className="w-6 h-6 stroke-[#fca311]" />
          <li>auFURFurniture@gmail.com</li>
        </ul>
        <ul className="flex gap-6">
          <FiPhoneCall className="w-6 h-6 stroke-[#fca311]" />
          <li>+1-243-546-4569</li>
        </ul>
      </div>
      <div>
        <h3 className="text-[18px] font-bold">Pages</h3>
        <ul className="flex flex-col items-start gap-2 mt-4">
          <li>Homepage</li>
          <li>Shop</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </div>
      <ul className="flex flex-col items-start gap-2 mt-4 ">
        <li>Privacy policy</li>
        <li>Licenses agreement</li>
        <li>FAQS</li>
        <li>Terms</li>
      </ul>
      <div className="items-start ">
        <h3 className="text-[18px] font-bold">My Account</h3>
        <ul className="flex flex-col items-start gap-2 mt-4">
          <li>My Account</li>
          <li>Order History</li>
          <li>Wishlists</li>
          <li>Checkout</li>
          <li>Cart</li>
        </ul>
      </div>
      <div className="self-center">
        <ul className="flex items-center gap-4 mx-auto mt-4 ">
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
