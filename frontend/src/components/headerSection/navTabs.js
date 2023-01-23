import React from "react";
import { Link } from "react-router-dom";

export const NavTabs = ({ handleMyAccountClick }) => {
  return (
    <ul className="flex flex-col z-50 border-t-[1px] border-LightSecondaryColor absolute top-[100%] bg-white  left-0 right-0 pt-[8px] pb-8  tracking-[0.25px] text-lg  font-medium md:static md:bg-transparent md:border-none md:px-2 md:flex-row md:p-0  md:gap-4 lg:gap-5 md:shadow-none shadow-[0_3px_8px_rgba(0,0,0,0.2)]">
      <li className="px-[4%] py-[6px]  md:px-0 md:hover:bg-transparent md:py-0 hover:bg-neutralColor tablet:px-[6%]">
        <Link to="/">Home</Link>
      </li>
      <li className="px-[4%] py-[6px]  md:px-0 md:hover:bg-transparent md:py-0 hover:bg-neutralColor tablet:px-[6%]">
        <Link to="/shop">Shop</Link>
      </li>
      <li className="px-[4%] py-[6px]  md:hover:bg-transparent hover:bg-neutralColor tablet:px-[6%] md:px-0 md:py-0">
        <Link to="">About us</Link>
      </li>
      <li className="px-[4%] md:px-0 md:hover:bg-transparent md:py-0 py-[6px] hover:bg-neutralColor  tablet:px-[6%]">
        <Link to="">Contact</Link>
      </li>

      <button
        onClick={handleMyAccountClick}
        className="w-[125px] h-[40px] ml-[30%] tablet:ml-[25%] block md:hidden mt-[4px]  font-semibold  rounded-sm text-[#ffffff] bg-primaryColor"
      >
        My Account
      </button>
    </ul>
  );
};
