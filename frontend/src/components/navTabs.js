import React from "react";
import { Link } from "react-router-dom";

export const NavTabs = () => {
  return (
    <ul className="flex flex-col z-50 absolute top-[100%] bg-white items-start px-[5%] left-0 right-0 py-8 gap-3 tracking-[0.25px] text-[18px]">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Shop">Shop</Link>
      </li>
      <li>
        <Link to="">About us</Link>
      </li>
      <li>
        <Link to="">Contact</Link>
      </li>

      <button className="w-[125px] h-[40px] ml-[30%] rounded-sm text-[#ffffff] bg-[#fca311]">My Account</button>
    </ul>
  );
};
