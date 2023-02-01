import React from "react";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { BsEye } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleWishlistModification } from "../utils/handleWishlistModification";
import { handleCartModification } from "../utils/handleCartModification";
import { isProductInCartFn, isProductInWishlistFn } from "../utils/isSpecificProductInCartAndWishlist.js";
import { motion, useAnimation } from "framer-motion";
import { primaryBtnVariant } from "../utils/animation";
import { cartTextChangeVariant } from "../utils/animation";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const SingleProductBox = ({ productsData }) => {
  const { _id, title, price, image, discountPercentValue } = productsData;

  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isProductInCart, setIsProductInCart] = useState(false);

  const dispatch = useDispatch();
  const { wishlist, cart } = useSelector((state) => state.wishlistAndCartSection);

  useEffect(() => {
    isProductInWishlistFn(_id, setIsWishlisted, wishlist);
  }, [wishlist]);
  useEffect(() => {
    isProductInCartFn(_id, setIsProductInCart, cart);
  }, [cart]);

  // get the discount percent value if present so as to display it
  let discountedPrice = price - (price * discountPercentValue) / 100;

  // framer animation for when its in view
  const ref = useRef(null);
  const inView = useInView(ref);

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ scale: 1 });
    } else {
      controls.start({ scale: 0.6 });
    }
  }, [controls, inView]);

  return (
    <motion.article
      ref={ref}
      animate={controls}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="flex w-[100%] tablet:mx-0 md:mx-0  mx-auto flex-col  bg-[#ffffff] relative"
    >
      <div
        className={`absolute p-3 bg-[#ffffff] shadow-[0px_3px_8px_0px_rgba(0,0,0,0.2)] rounded-[50%] ease-in transition-colors cursor-pointer duration-300 top-[5%] right-[5%] z-[100] ${
          isWishlisted && "bg-lightPrimaryColor"
        }`}
        onClick={() => handleWishlistModification(_id, dispatch)}
      >
        <FiHeart
          className={`w-6 h-6 ${
            isWishlisted && "fill-lightPrimaryColor duration-200 ease-linear transition-colors stroke-white"
          }`}
        />
      </div>

      {discountPercentValue > 0 && (
        <div className="flex justify-center items-center absolute w-16 px-3 h-8 z-[100] top-[6%]  hover:opacity-100 bg-lightPrimaryColor text-white  shadow-[0px_3px_8px_0px_rgba(0,0,0,0.2)]  ">
          <span>{discountPercentValue}%</span>
        </div>
      )}

      <div className="w-[100%] h-[290px] bg-neutralColor relative cursor-pointer product-img-container flex justify-center items-center rounded-md ease-in transition-all duration-100">
        <img src={image} alt="" className="rounded-md max-w-[90%] h-auto max-h-[90%] object-cover" />
        <div className="product-img-overlay  rounded-md absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.2)] w-[100%] h-[100%] opacity-0  transition-opacity ease-in duration-[0.5]"></div>
        <motion.button
          initial="initial"
          whileTap="click"
          variants={primaryBtnVariant}
          className="absolute left-[25%] tablet:left-[20%] md:left-[20%] tablet:w-[60%] md:w-[60%] top-[40%] bg-lightPrimaryColor text-white hidden cursor-pointer rounded-md h-[48px] w-[50%] gap-1 justify-center z-[100] items-center product-details-link transition ease-in duration-[0.5]"
        >
          <BsEye />
          <Link to={`/product/${_id}`}>
            <span> view details</span>
          </Link>
        </motion.button>
      </div>
      <h4 className=" text-[20px] font-normal capitalize mt-4">{title}</h4>
      {discountPercentValue > 0 ? (
        <div className="flex gap-3 mt-[0.125rem] mb-4">
          <h3 className="font-bold text-[20px] tracking-wide">${discountedPrice.toFixed(2)}</h3>
          <h3 className="font-medium text-[18px]  tracking-wide text-lightBlack line-through">${price.toFixed(2)}</h3>
        </div>
      ) : (
        <h3 className="font-bold  text-[20px] mt-[0.125rem] mb-4 tracking-wide ">${price.toFixed(2)}</h3>
      )}
      <motion.button
        initial="initial"
        whileTap="click"
        variants={primaryBtnVariant}
        className="w-[100%] h-[52px] mx-auto rounded-md text-[#ffffff] bg-primaryColor "
        onClick={() => handleCartModification(_id, dispatch, null, isProductInCart)}
      >
        <motion.span
          className="w-[100%] h-[100%] flex items-center justify-center"
          initial="initial"
          whileTap="animate"
          variants={cartTextChangeVariant}
        >
          {" "}
          {isProductInCart ? "Remove from cart" : "Add to cart"}
        </motion.span>
      </motion.button>
    </motion.article>
  );
};

// <article className="flex rounded-md  w-[100%] mx-auto flex-col gap-6 shadow-[0px_2px_8px_0px_#00000085] bg-[#ffffff]  relative">
// <div className="absolute p-3 bg-[#ffffff] rounded-[50%] top-[5%] right-[5%] z-[100]">
//   <FiHeart className="w-6 h-6 " />
// </div>

// <div className="w-[100%] h-[290px] bg-neutralColor relative cursor-pointer product-img-container">
//   <img
//     src="/images/ruslan-bardash-4kTbAMRAHtQ-unsplash_preview_rev_1.png"
//     alt=""
//     className="rounded-md w-[100%] h-[100%] object-cover"
//   />
//   <div className="product-img-overlay hidden absolute top-0 left-0 z-50 bg-[#0000005d] w-[100%] h-[100%]"></div>
//   <button className="absolute left-[25%] top-[50%] bg-primaryColor text-white hidden cursor-pointer rounded-md h-[44px] w-[50%] gap-1 justify-center z-[100]  items-center product-details-link">
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
// <button className="w-[100%] h-[44px] mx-auto rounded-md text-[#ffffff] bg-primaryColor">Add to cart</button>
// </article>
