import React from "react";
import "../../index.css";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { NavTabs } from "./navLinks";

export const Header = () => {
  const [isLargeScreen, setIsLargeScreen] = useState("");
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  console.log(isLargeScreen);
  useEffect(() => {
    if (window.innerWidth >= 768) {
      setIsLargeScreen(true);
      console.log("i");
    } else if (window.innerWidth < 768) {
      setIsLargeScreen(false);
    }
    window.addEventListener("resize", (e) => {
      if (e.currentTarget.innerWidth >= 768) {
        setIsLargeScreen(true);
        console.log("i");
      } else if (e.currentTarget.innerWidth < 768) {
        setIsLargeScreen(false);
      }
    });
  }, [isLargeScreen]);

  return (
    <header className="h-[125px]">
      <nav className="w-[100%] h-[68%] font-Roboto px-[5%] font-medium flex items-center justify-between border-b-2 shadow-md shadow-[#e5e5e5]  border-[#e5e5e5]">
        <h1 className="text-[24px]">AUFUR</h1>
        {isLargeScreen && <NavTabs />}

        <div className="flex items-center gap-4 basis-[25%] text-[18px]">
          <BiSearch className="w-6 h-6" onClick={() => setIsSearchClicked(!isSearchClicked)} />
          <div>{isLargeScreen ? <span className="">Login/Register</span> : <FaUser />}</div>
          <div className="relative p-3 bg-[#e5e5e5] rounded-[50%]">
            <FiHeart className="w-6 h-6 " />
            <span className="absolute text-[12px] top-1 right-1 z-10 bg-[#fca311] text-white px-[5px]  rounded-[50%]">
              0
            </span>
          </div>
          <div className="relative p-3 bg-[#e5e5e5] rounded-[50%]">
            <AiOutlineShoppingCart className="w-6 h-6" />
            <span className="absolute text-[12px] top-1 right-1 z-10 bg-[#fca311] text-white px-[5px]  rounded-[50%]">
              0
            </span>
          </div>
        </div>
      </nav>
      {isSearchClicked && (
        <div className="w-[100%] searchBar h-[32%] bg-[#e5e5e5] text-[#000000] border-b-2 z-50  relative border-[#e5e5e5]">
          <input
            className="w-[100%] text-[18px] pl-20 h-[100%] bg-[#e5e5e5] border-none outline-none"
            type="search"
            name=""
            placeholder="search ..."
            id=""
          />
          <BiSearch className="absolute left-[15px] top-[12px] w-6 h-6" fill="#14213D" />
        </div>
      )}
    </header>
  );
};
