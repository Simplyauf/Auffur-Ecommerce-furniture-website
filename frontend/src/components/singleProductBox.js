import React from "react";
import { FiHeart } from "react-icons/fi";
import { BsEye } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleWishlistModification } from "../utils/handleWishlistModification";
import { handleCartModification } from "../utils/handleCartModification";

export const SingleProductBox = ({ productsData }) => {
  const { _id, title, price, image, discountPercentValue } = productsData;
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isProductInCart, setIsProductInCart] = useState(false);
  const dispatch = useDispatch();
  const { wishlist, cart } = useSelector((state) => state.wishlistAndCartSection);

  useEffect(() => {
    setIsWishlisted(() => {
      if (wishlist.find((wishlistProduct) => wishlistProduct._id === _id)) {
        return true;
      } else {
        return false;
      }
    });
  }, [wishlist]);

  useEffect(() => {
    setIsProductInCart(() => {
      if (cart.find((cartProduct) => cartProduct._id === _id)) {
        return true;
      } else {
        return false;
      }
    });
  }, [cart]);

  return (
    <article className="flex  w-[100%] mx-auto flex-col gap-4  bg-[#ffffff] pb-6 relative">
      <div
        className={`absolute p-3 bg-[#ffffff] shadow-[0px_2px_8px_0px_#00000085] rounded-[50%] top-[5%] right-[5%] z-[100] ${
          isWishlisted && "bg-[#fca311]"
        }`}
        onClick={() => handleWishlistModification(_id, dispatch)}
      >
        <FiHeart className={`w-6 h-6 ${isWishlisted && "fill-[#fca311] stroke-white"}`} />
      </div>

      <div className="w-[100%] h-[290px] bg-[#e5e5e5] relative cursor-pointer product-img- flex justify-center items-center">
        <img src={image} alt="" className="rounded-sm max-w-[90%] h-auto max-h-[90%] object-cover" />
        <div className="product-img-overlay hidden absolute top-0 left-0 z-50 bg-[#0000005d] w-[100%] h-[100%]"></div>
        <button className="absolute left-[25%] top-[50%] bg-[#fca311] text-white hidden cursor-pointer rounded-sm h-[44px] w-[50%] gap-1 justify-center z-[100]  items-center product-details-link">
          <BsEye />
          <span> view details</span>
        </button>
      </div>
      <div className="flex justify-between px-[10%]">
        <h4 className="font-bold text-[18px] tracking-wide">{title}</h4>
        <div className="flex gap-[1.5px] font-medium">
          <h5>${price} USD</h5>
        </div>
      </div>
      <button
        className="w-[100%] h-[44px] mx-auto rounded-sm text-[#ffffff] bg-[#fca311] "
        onClick={() => handleCartModification(_id, dispatch)}
      >
        {isProductInCart ? "Remove from cart" : "Add to cart"}
      </button>
    </article>
  );
};

// <article className="flex rounded-sm  w-[100%] mx-auto flex-col gap-6 shadow-[0px_2px_8px_0px_#00000085] bg-[#ffffff]  relative">
// <div className="absolute p-3 bg-[#ffffff] rounded-[50%] top-[5%] right-[5%] z-[100]">
//   <FiHeart className="w-6 h-6 " />
// </div>

// <div className="w-[100%] h-[290px] bg-[#e5e5e5] relative cursor-pointer product-img-container">
//   <img
//     src="/images/ruslan-bardash-4kTbAMRAHtQ-unsplash_preview_rev_1.png"
//     alt=""
//     className="rounded-sm w-[100%] h-[100%] object-cover"
//   />
//   <div className="product-img-overlay hidden absolute top-0 left-0 z-50 bg-[#0000005d] w-[100%] h-[100%]"></div>
//   <button className="absolute left-[25%] top-[50%] bg-[#fca311] text-white hidden cursor-pointer rounded-sm h-[44px] w-[50%] gap-1 justify-center z-[100]  items-center product-details-link">
//     <BsEye />
//     <span> view details</span>
//   </button>
// </div>
// <div className="flex justify-between px-[10%]">
//   <h4 className="font-bold text-[18px] tracking-wide">Chair Brekk</h4>
//   <div className="flex gap-[1.5px]">
//     <h5>$15.00</h5>
//     <h5>USD</h5>
//   </div>
// </div>
// <button className="w-[100%] h-[44px] mx-auto rounded-sm text-[#ffffff] bg-[#fca311]">Add to cart</button>
// </article>
