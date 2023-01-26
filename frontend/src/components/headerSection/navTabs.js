import React from "react";
import { Link } from "react-router-dom";

export const NavTabs = ({ handleMyAccountClick }) => {
  return (
    <ul className="flex flex-col z-50 border-t-[1px] border-LightSecondaryColor absolute top-[100%] bg-white  left-0 right-0 pt-[8px] pb-8  tracking-[0.25px] text-lg  font-medium md:static md:bg-transparent md:border-none md:px-2 md:flex-row md:p-0  md:gap-4 lg:gap-5 md:shadow-none shadow-[0_3px_8px_rgba(0,0,0,0.2)]">
      <li className="md:hover:bg-transparent hover:bg-neutralColor py-[6px] md:py-0">
        <Link to="/" className="px-[4%] w-[100%] h-[100%] inline-block  tablet:px-[6%]   md:px-0 ">
          Home
        </Link>
      </li>
      <li className="md:hover:bg-transparent hover:bg-neutralColor py-[6px] md:py-0">
        <Link to="/shop" className="px-[4%] w-[100%] h-[100%] inline-block  tablet:px-[6%]   md:px-0 ">
          Shop
        </Link>
      </li>
      <li className=" py-[6px]  md:hover:bg-transparent hover:bg-neutralColor md:py-0">
        <Link to="/aboutUs" className="px-[4%] w-[100%] h-[100%] inline-block  tablet:px-[6%]   md:px-0 ">
          About us
        </Link>
      </li>
      <li className=" md:hover:bg-transparent md:py-0 py-[6px] hover:bg-neutralColor  ">
        <Link to="/contactUs" className="px-[4%] w-[100%] h-[100%] inline-block  tablet:px-[6%]   md:px-0 ">
          Contact
        </Link>
      </li>

      <button
        onClick={handleMyAccountClick}
        className="w-[125px] h-[40px] mt-[8px] mx-[4%] md:mx-0  block md:hidden tablet:mx-[6%]   rounded-sm text-[#ffffff] bg-primaryColor"
      >
        My Account
      </button>
    </ul>
  );
};
