import React from "react";
import "../index.css";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { NavTabs } from "./navTabs";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { BiUser } from "react-icons/bi";
// import { Wishlist } from "./wishlistSection";
import { toast } from "react-toastify";
import logoDark from "../logoDark.png";

export const Header = ({ setIsWishlistActive, setIsCartSectionActive, isLargeScreen }) => {
  const [displayVerticalNavBar, setDisplayVerticalNavBar] = useState(false);

  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [totalProductQuantityCart, setTotalProductQuantityCart] = useState(0);
  
  const { allProductsData, isLoading, loadingOrErrorMessage } = useSelector((state) => state.productsData);
  const { wishlist, cart } = useSelector((state) => state.wishlistAndCartSection);

  const navigateToSearchPage = useNavigate();
  let location = useLocation();

  // SEARCH ENTER BUTTON WONT WORK WHEN THE allProducts IS LOADING OR THERE IS AN ERROR
  const handleSearching = (e) => {
    if (isLoading && loadingOrErrorMessage === "Loading") {
      toast("Hold on,while product is loading", {
        type: "warning",
        autoClose: 3000,
      });
    }
    if (isLoading && loadingOrErrorMessage !== "Loading") {
      toast("Products couldnt be loaded", {
        type: "error",
        autoClose: 3000,
      });
    } else if (allProductsData.length > 0) {
      navigateToSearchPage(
        {
          pathname: "/search",
          search: `?searchedProduct=${e.currentTarget.previousElementSibling.value}`,
        },
        {
          state: location.pathname,
        }
      );
    }
  };

  // on entering a new pathname these should be false
  useEffect(() => {
    setIsSearchClicked(false);
    setDisplayVerticalNavBar(false);
  }, [location.pathname]);

  useEffect(() => {
    console.log(isLargeScreen, displayVerticalNavBar);
    isLargeScreen && setDisplayVerticalNavBar(false);
  }, [isLargeScreen]);

  useEffect(() => {
    let total = 0;
    for (let key of cart) {
      total += key.quantity;
    }
    setTotalProductQuantityCart(total);
  }, [cart]);

  console.log(totalProductQuantityCart);

  return (
    <header className="h-[80px] sticky top-0 z-[1000] bg-[#ffffff]">
      <nav className="w-[100%] h-[100%] font-Roboto px-[4%] tablet:px-[6%] lg:px-[2%] xl:px-[4%] font-medium flex items-center justify-between shadow-[0px_0px_4px_0px_rgba(14,19,24,0.7)] ">
        <img src={logoDark} alt="" className="w-[25%] h-auto max-w-[120px]" />
        {isLargeScreen && <NavTabs />}
        <div className="flex items-center tablet:gap-4 gap-4 md:gap-4 md:basis-[25%] lg:basis-auto text-[18px]">
          <div className="relative p-3 bg-neutralColor rounded-[50%]">
            <BiSearch
              className="w-4 h-4 tablet:w-5 tablet:h-5 md:w-5 md:h-5  stroke-secondaryColor "
              onClick={() => setIsSearchClicked(!isSearchClicked)}
            />
          </div>
          {isLargeScreen && (
            <div className="relative p-3 bg-neutralColor rounded-[50%]">
              <BiUser className="w-4 h-4 tablet:w-5 tablet:h-5 md:w-5 md:h-5  stroke-secondaryColor " />
            </div>
          )}
          <div className="relative p-3 bg-neutralColor rounded-[50%]" onClick={() => setIsWishlistActive(true)}>
            <FiHeart className="w-4 h-4 tablet:w-5 tablet:h-5 md:w-5 md:h-5  stroke-secondaryColor" />
            <span className="absolute text-[10.8px] top-[3px] right-[3px] z-10 bg-primaryColor text-white cursor-pointer  px-1 text-center rounded-[50%]">
              {wishlist.length}
            </span>
          </div>
          <div className="relative p-3 bg-neutralColor rounded-[50%]">
            <AiOutlineShoppingCart
              className="w-4 h-4  tablet:w-5
              tablet:h-5
              md:w-5
              md:h-5"
              onClick={() => setIsCartSectionActive(true)}
            />
            <span className="absolute text-[12px] top-[3px] right-[3px] z-10 bg-primaryColor text-white px-1 text-center  rounded-[50%]">
              {totalProductQuantityCart}
            </span>
          </div>
          <button className="p-3 bg-neutralColor md:hidden">
            {displayVerticalNavBar ? (
              <IoCloseOutline
                className="w-4 h-4 tablet:w-5 tablet:h-5 md:w-5 md:h-5  "
                onClick={() => setDisplayVerticalNavBar(false)}
              />
            ) : (
              <GiHamburgerMenu
                className="w-4 h-4 tablet:w-5 tablet:h-5 md:w-5 md:h-5  "
                onClick={() => setDisplayVerticalNavBar(true)}
              />
            )}
          </button>
        </div>
      </nav>
      {isSearchClicked && (
        <div className="w-[100%] absolute top-[100%] left-0 bottom-auto searchBar h-[45px] bg-neutralColor text-[#000000]  z-50  shadow-sm shadow-secondaryColor flex">
          <input
            className="w-[85%] text-[18px] pl-6 h-[100%] bg-neutralColor border-none outline-none"
            type="search"
            name=""
            placeholder="search ..."
            id=""
          />
          <button
            className="bg-primaryColor w-[15%] h-[100%] flex justify-center items-center"
            onClick={(e) => handleSearching(e)}
          >
            <BiSearch className="w-4 h-4 tablet:w-5 tablet:h-5 md:w-5 md:h-5" fill="white" />
          </button>
        </div>
      )}
      {displayVerticalNavBar && <NavTabs />}
    </header>
  );
};
