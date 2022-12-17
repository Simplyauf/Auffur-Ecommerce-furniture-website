import { FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { handleWishlistModification } from "../../utils/handleWishlistModification";
import { handleCartModification } from "../../utils/handleCartModification";
import { isProductInCartFn } from "../../utils/isSpecificProductInCartAndWishlist.js";

export const SingleProductSection = ({ wishlistData }) => {
  const [isProductInCart, setIsProductInCart] = useState(false);
  const { cart } = useSelector((state) => state.wishlistAndCartSection);

  const { title, price, image, stock, _id } = wishlistData;
  const dispatch = useDispatch();

  useEffect(() => {
    isProductInCartFn(_id, setIsProductInCart, cart);
  }, [cart]);
  return (
    <div className="flex gap-4 border-b-[1px] border-LightSecondaryColor pb-4">
      <div className="w-[40%] h-[144px] bg-neutralColor relative cursor-pointer product-img-container flex justify-center items-center">
        <img src={image} alt="" className="rounded-sm w-[100%] h-auto max-h-[90%] max-w-[90%] object-cover" />
      </div>
      <div className="flex flex-col gap-2 w-[50%] text-base">
        <h2 className="text-lg font-bold capitalize">{title}</h2>
        <h4 className="font-bold ">${price} USD</h4>
        <span className="text-primaryColor font-RobotoCondensed tracking-[1.3px]">
          {stock < 0 ? "Out of stock" : "In Stock"}
        </span>
        <button
          className="w-[90%] h-[40px] tablet:w-[80%] md:w-[80%] text-sm  rounded-sm border-[2px] border-primaryColor text-primaryColor px-2"
          onClick={() => handleCartModification(_id, dispatch)}
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
