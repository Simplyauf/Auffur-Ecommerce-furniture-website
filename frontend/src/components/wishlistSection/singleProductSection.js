import { FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { handleWishlistModification } from "../../utils/handleWishlistModification";
import { handleCartModification } from "../../utils/handleCartModification";
import { isProductInCartFn } from "../../utils/isSpecificProductInCartAndWishlist.js";
import { useNavigate } from "react-router-dom";

export const SingleProductSection = ({ wishlistData, setIsWishlistActive }) => {
  const [isProductInCart, setIsProductInCart] = useState(false);
  const { cart } = useSelector((state) => state.wishlistAndCartSection);

  const { title, price, image, stock, _id } = wishlistData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    isProductInCartFn(_id, setIsProductInCart, cart);
  }, [cart]);
  return (
    <div className="flex gap-4 border-b-[1px] border-LightSecondaryColor pb-4">
      <div
        className="w-[40%] cursor-pointer h-[144px] bg-neutralColor relative cursor-pointer product-img-container flex justify-center items-center"
        onClick={() => {
          navigate(`/product/${_id}`);
          setIsWishlistActive(false);
        }}
      >
        <img src={image} alt="" className="rounded-sm w-[100%] h-auto max-h-[90%] max-w-[90%] object-contain" />
      </div>
      <div className="flex flex-col gap-2 w-[50%] text-base">
        <h2 className="md:text-[18px] font-medium font-RobotoSlab capitalize">{title}</h2>
        <h3 className="font-bold md:text-[18px] tracking-wide">${price.toFixed(2)}</h3>
        <span className="text-primaryColor font-RobotoCondensed tracking-[0.7px]">
          {stock < 0 ? "Out of stock" : <strong>{stock}</strong>}
          {stock >= 0 && " left in stock"}
        </span>
        <button
          className="w-[90%] h-[40px] tablet:w-[80%] md:w-[80%] text-sm  rounded-sm border-[1px] border-primaryColor text-primaryColor px-2"
          onClick={() => handleCartModification(_id, dispatch, null, isProductInCart)}
        >
          {isProductInCart ? "Remove from cart" : "Add to cart"}
        </button>
      </div>
      <FaTrash
        className="w-4 h-5 stroke-secondaryColor cursor-pointer"
        onClick={() => {
          handleWishlistModification(_id, dispatch);
        }}
      />
    </div>
  );
};
