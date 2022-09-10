import React from "react";
import { Link } from "react-router-dom";

export const NavTabs = () => {
  return (
    <ul className="flex items-center gap-3 tracking-[0.25px] text-[18px]">
      <li>
        <Link to="">Home</Link>
      </li>
      <li>
        <Link to="">Shop</Link>
      </li>
      <li>
        <Link to="">About us</Link>
      </li>
      <li>
        <Link to="">Service</Link>
      </li>
    </ul>
  );
};
