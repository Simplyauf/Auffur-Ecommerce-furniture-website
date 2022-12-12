import React from "react";
import { Link } from "react-router-dom";

export const NavTabs = () => {
  return (
    <ul className="flex flex-col z-50 border-t-2 border-[rgb(229,229,229)] absolute top-[100%] bg-white items-start px-[5%] left-0 right-0 py-8 gap-3 tracking-[0.25px] text-[18px] font-medium">
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

      <Link className="w-[125px] h-[40px] ml-[30%] block" to="/login">
        <button className="w-[100%] font-semibold h-[100%] rounded-sm text-[#ffffff] bg-[#fca311]">
          My Account
        </button>
      </Link>
    </ul>
  );
};
