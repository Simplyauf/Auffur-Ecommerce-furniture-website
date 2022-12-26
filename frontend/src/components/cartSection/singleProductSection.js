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
    <div className="flex gap-4 border-b-[1px] border-LightSecondaryColor pb-4">
      <div className="w-[40%] h-[120px] tablet:h-[160px] md:h-[160px] bg-neutralColor relative cursor-pointer product-img-container flex justify-center items-center">
        <img src={image} alt="" className="rounded-sm w-[100%]  object-cover h-auto max-h-[90%] max-w-[90%]" />
      </div>
      <div className="flex flex-col gap-3 w-[45%] text-base">
        <h2 className="text-lg font-bold font-RobotoSlab capitalize">{title}</h2>
        <h4 className="font-bold tracking-wide">${price} USD</h4>
        <div className="flex items-center gap-1 cursor-pointer">
          <FaTrash className="w-4 h-[0.9em] fill-primaryColor" />{" "}
          <h3 className="font-semibold text-primaryColor" onClick={() => handleCartModification(_id, dispatch)}>
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
        onChange={(e) => setProductQuantityInCart(e.currentTarget.value)}
      />
    </div>
  );
};
