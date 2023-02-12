import { FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleCartModification } from "../../utils/handleCartModification";
import { setCart } from "../../features/wishlistAndCartSlice";
import { useNavigate } from "react-router-dom";

export const SingleProductSection = ({ cartData, setIsCartSectionActive }) => {
  const { title, price, discountPercentValue, image, _id, stock } = cartData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cart } = useSelector((state) => state.wishlistAndCartSection);
  const [productQuantityInCart, setProductQuantityInCart] = useState(1);

  // on load of the app set quantity to persisted quantity
  useEffect(() => {
    for (let key of cart) {
      if (key._id === _id) {
        setProductQuantityInCart(key.quantity);
      }
    }
  }, [cart]);

  // on quantity change
  useEffect(() => {
    let newCart = [...cart];

    for (let key of newCart) {
      if (key._id === _id) {
        // the keys of newCart are still immutable so i modified the obj[index] instead of using key directly as it is still a reference to another obj due to shallow copy.i removed structuredClone due to it having few supported device
        const index = newCart.indexOf(key);
        newCart[index] = { ...key, quantity: parseInt(productQuantityInCart) };
      }
    }
    dispatch(setCart(newCart));
  }, [productQuantityInCart]);

  // get the discount percent value if present so as to display it
  let discountedPrice = price - (price * discountPercentValue) / 100;

  return (
    <div className="flex gap-4 border-b-[1px] border-LightSecondaryColor pb-4">
      <div
        className="w-[40%] h-[120px] tablet:h-[160px] md:h-[160px] bg-neutralColor relative cursor-pointer product-img-container flex justify-center items-center"
        onClick={() => {
          navigate(`/product/${_id}`);
          setIsCartSectionActive(false);
        }}
      >
        <img src={image} alt="" className="rounded-sm w-[100%]  object-contain h-auto max-h-[90%] max-w-[90%]" />
      </div>
      <div className="flex flex-col gap-3 w-[45%] text-base">
        <h2 className="  md:text-[18px] font-normal font-RobotoSlab capitalize">{title}</h2>
        {discountPercentValue > 0 ? (
          <div className="flex gap-3">
            <h3 className="font-bold   md:text-[18px] tracking-wide">${discountedPrice.toFixed(2)}</h3>
            <h3 className="font-medium text-[14px] md:text-[16px]  tracking-wide text-lightBlack line-through">
              ${price.toFixed(2)}
            </h3>
          </div>
        ) : (
          <h3 className="font-bold   md:text-[18px] tracking-wide ">${price.toFixed(2)}</h3>
        )}
        <span className="text-primaryColor font-RobotoCondensed tracking-[0.7px]">
          {stock < 0 ? "Out of stock" : <strong>{stock}</strong>}
          {stock >= 0 && " left in stock"}
        </span>
        <div className="flex items-center gap-1 cursor-pointer">
          <FaTrash className="w-4 h-[0.9em] fill-primaryColor" />{" "}
          <h3
            className="font-semibold text-primaryColor"
            onClick={() => handleCartModification(_id, dispatch, null, true)}
          >
            Remove
          </h3>
        </div>
      </div>
      <input
        className="w-[20%] h-[40px] focus:outline-secondaryColor border-[2px] border-secondaryColor mx-auto rounded-sm text-secondaryColor pl-3"
        type="number"
        name=""
        id=""
        value={productQuantityInCart}
        onChange={(e) => setProductQuantityInCart(e.target.value)}
      />
    </div>
  );
};
