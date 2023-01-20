import React from "react";
import { Link, Navigate } from "react-router-dom";

export const NavTabs = () => {
  return (
    <ul className="flex flex-col z-50 border-t-[1px] border-LightSecondaryColor absolute top-[100%] bg-white items-start px-[5%] left-0 right-0 py-8 gap-3 tracking-[0.25px] text-lg  font-medium md:static md:bg-transparent md:border-none md:px-2 md:flex-row  md:gap-4 lg:gap-5">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/shop">Shop</Link>
      </li>
      <li>
        <Link to="">About us</Link>
      </li>
      <li>
        <Link to="">Contact</Link>
      </li>

      <button className="w-[125px] h-[40px] ml-[30%] block md:hidden  font-semibold  rounded-sm text-[#ffffff] bg-primaryColor">
        My Account
      </button>
    </ul>
  );
};
