import React from "react";
import "../index.css";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { NavTabs } from "./navTabs";

export const Header = () => {
  const [isHamburgerBtnClicked, setIsHamburgerBtnClicked] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState("");
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  console.log(isHamburgerBtnClicked);
  useEffect(() => {
    if (window.innerWidth >= 768) {
      setIsLargeScreen(true);
    } else if (window.innerWidth < 768) {
      setIsLargeScreen(false);
    }
    window.addEventListener("resize", (e) => {
      if (e.currentTarget.innerWidth >= 768) {
        setIsLargeScreen(true);
      } else if (e.currentTarget.innerWidth < 768) {
        setIsLargeScreen(false);
      }
    });
  }, [isLargeScreen]);
  // ;C:\Users\user\AppData\Local\Programs\Microsoft VS Code\bin
  return (
    <header className="h-[80px] relative z-[1000] ">
      <nav className="w-[100%] h-[100%] font-Roboto px-[5%] font-medium flex items-center justify-between border-b-2 shadow-md shadow-[#e5e5e5]  border-[rgb(229,229,229)]">
        <h1 className="text-[24px]">AUFUR</h1>
        {isLargeScreen && <NavTabs />}
        <div className="flex items-center gap-4 md:basis-[25%] text-[18px]">
          <BiSearch
            className="w-6 h-6 stroke-[#14213d] stroke-1"
            onClick={() => setIsSearchClicked(!isSearchClicked)}
          />
          {isLargeScreen && (
            <div>
              <span className="">Register</span>
            </div>
          )}
          <div className="relative p-3 bg-[#e5e5e5] rounded-[50%]">
            <FiHeart className="w-6 h-6 stroke-[#14213d]" />
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
          <button className="p-3 bg-[#e5e5e5]">
            {isHamburgerBtnClicked ? (
              <IoCloseOutline className="w-6 h-6" onClick={() => setIsHamburgerBtnClicked(false)} />
            ) : (
              <GiHamburgerMenu className="w-6 h-6" onClick={() => setIsHamburgerBtnClicked(true)} />
            )}
          </button>
        </div>
      </nav>
      {isSearchClicked && (
        <div className="w-[100%] absolute top-[100%] left-0 bottom-auto searchBar h-[45px] bg-[#e5e5e5] text-[#000000] border-b-2 z-50   border-[#e5e5e5]">
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
      {isHamburgerBtnClicked && <NavTabs />}
    </header>
  );
};
