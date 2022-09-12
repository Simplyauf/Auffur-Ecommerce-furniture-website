import React from "react";
import { BsEye } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const ProductsSection = () => {
  return (
    <div className="">
      <h1 className="text-[36px] text-center">Our shop</h1>
      <div className="">
        <h2 className="text-center text-[24px]">trending</h2>
        <div className="w-[80%] mx-auto items-center justify-center gap-10 mt-[24px] flex flex-col">
          <article className="flex rounded-sm  w-[100%] mx-auto flex-col gap-6 shadow-[0px_2px_8px_0px_#00000085] bg-[#ffffff] pb-6 relative">
            <div className="absolute p-3 bg-[#e5e5e5] rounded-[50%] top-[5%] right-[5%] z-[100]">
              <FiHeart className="w-6 h-6 " />
            </div>

            <div className="w-[100%] h-[180px] relative cursor-pointer product-img-container">
              <img
                src="https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="rounded-sm w-[100%] h-[100%] object-cover"
              />
              <div className="product-img-overlay hidden absolute top-0 left-0 z-50 bg-[#0000005d] w-[100%] h-[100%]"></div>
              <button className="absolute left-[25%] top-[50%] bg-[#fca311] text-white hidden cursor-pointer rounded-sm h-[44px] w-[50%] gap-1 justify-center z-[100]  items-center product-details-link">
                <BsEye />
                <span> view details</span>
              </button>
            </div>
            <div className="flex justify-between px-[10%]">
              <h4 className="font-bold">chair brekk</h4>
              <div className="flex gap-[1.5px]">
                <h5>15.00</h5>
                <h5>USD</h5>
              </div>
            </div>
            <button className="w-[45%] h-[44px] mx-auto rounded-sm text-[#ffffff] bg-[#fca311]">Add to cart</button>
          </article>
          <article className="flex rounded-sm  w-[100%] mx-auto flex-col gap-6 shadow-[0px_2px_8px_0px_#00000085] bg-[#ffffff] pb-6 ">
            <div className="w-[100%] h-[180px] ">
              <img
                src="https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="rounded-sm w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="flex justify-between px-[10%]">
              <h4 className="font-bold">chair brekk</h4>
              <div className="flex gap-[1.5px]">
                <h5>15.00</h5>
                <h5>USD</h5>
              </div>
            </div>
            <button className="w-[45%] h-[36px] mx-auto text-[#ffffff] bg-[#fca311]">Add to cart</button>
          </article>
          <article className="flex rounded-sm  w-[100%] mx-auto flex-col gap-6 shadow-[0px_2px_8px_0px_#00000085] bg-[#ffffff] pb-6">
            <div className="w-[100%] h-[180px] ">
              <img
                src="https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="rounded-sm w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="flex justify-between px-[10%]">
              <h4 className="font-bold">chair brekk</h4>
              <div className="flex gap-[1.5px]">
                <h5>15.00</h5>
                <h5>USD</h5>
              </div>
            </div>
            <button className="w-[45%] h-[36px] mx-auto text-[#ffffff] bg-[#fca311]">Add to cart</button>
          </article>
        </div>
      </div>
    </div>
  );
};
