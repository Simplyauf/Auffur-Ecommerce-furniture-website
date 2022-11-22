import { FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleCartModification } from "../../utils/handleCartModification";
import { setCart } from "../../features/wishlistAndCartSlice";

export const SingleProductSection = ({ cartData }) => {
  const { title, price, image, _id } = cartData;
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.wishlistAndCartSection);
  const [productQuantityInCart, setProductQuantityInCart] = useState(1);

  // on load of the app set quantity to persisted quantity
  useEffect(() => {
    for (let key of cart) {
      if (key._id === _id) {
        setProductQuantityInCart(key.quantity);
      }
    }
  }, []);

  useEffect(() => {
    // ON QUANTITY CHANGE
    let newCart = structuredClone(cart);
    for (let key of newCart) {
      if (key._id === _id) {
        key.quantity = Number(productQuantityInCart);
      }
    }
    dispatch(setCart(newCart));
  }, [productQuantityInCart]);

  return (
    <div className="flex gap-4 border-b-2 pb-4">
      <div className="w-[35%] h-[120px] bg-[#e5e5e5] relative cursor-pointer product-img-container">
        <img src={image} alt="" className="rounded-sm w-[100%] h-[100%] object-cover" />
      </div>
      <div className="flex flex-col gap-2 w-[45%] text-[16px]">
        <h2 className="text-[18px] font-bold">{title}</h2>
        <span className="font-medium">${price} USD</span>
        <div className="flex items-center gap-1 cursor-pointer">
          <FaTrash className="w-4 h-[0.9em] fill-[#fca311]" />{" "}
          <h3 className="font-semibold text-[#fca311]" onClick={() => handleCartModification(_id, dispatch)}>
            Remove
          </h3>
        </div>
      </div>
      <input
        className="w-[20%] h-[40px] focus:outline-[#14213d] border-[2px] border-[#14213d] mx-auto rounded-sm text-[#14213d] pl-3"
        type="number"
        name=""
        id=""
        value={productQuantityInCart}
        onChange={(e) => setProductQuantityInCart(e.currentTarget.value)}
      />
    </div>
  );
};
