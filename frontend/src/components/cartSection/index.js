import { IoCloseOutline } from "react-icons/io5";
import { SingleProductSection } from "./singleProductSection";
import { persistor } from "../../store.js";
import { Loading } from "../Loading.js";
import { PersistGate } from "redux-persist/integration/react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
export const Cart = ({ isCartSectionActive, setIsCartSectionActive }) => {
  const { cart } = useSelector((state) => state.wishlistAndCartSection);
  const { isLoading } = useSelector((state) => state.productsData);
  const [totalPrice, setTotalPrice] = useState(0);

  // iterate through cart and multiply price by quantity while taking notes of discounted products
  useEffect(() => {
    let total = 0;
    for (let key of cart) {
      let price;
      if (key.discountPercentValue > 0) {
        price = key.price - (key.price * key.discountPercentValue) / 100;
      } else {
        price = key.price;
      }
      total += price * key.quantity;
    }
    setTotalPrice(total);
  }, [cart]);

  return (
    <div
      className={`fixed top-0 left-0 bottom-0 w-[100%] h-[100vh] z-[1500] bg-opacity-60 bg-[#000000] translate-x-[100%]  ${
        isCartSectionActive && "translate-x-[0%]"
      }`}
    >
      <section className="flex flex-col z-[2000] overflow-y-auto absolute top-0 bg-white items-start w-[98%] right-0 bottom-0 pt-4 pb-12 gap-7 tracking-[0.25px] text-[18px] h-[100%]">
        <h1 className=" text-center mt-[0.5em] w-[100%] text-[22px] border-b-2 pb-4 font-bold">My Cart</h1>
        <IoCloseOutline
          className="absolute top-6 right-6 w-9 h-9 cursor-pointer"
          onClick={() => setIsCartSectionActive(false)}
        />
        {isLoading ? (
          <Loading />
        ) : (
          <PersistGate loading={<Loading />} persistor={persistor}>
            {cart.length < 1 ? (
              <div className="flex justify-center items-center w-[100%] h-[50vh]">
                {" "}
                <h2 className="font-bold text-[20px]">Your Cart is currently empty</h2>{" "}
              </div>
            ) : (
              <div className="w-[100%] flex flex-col px-[5%] gap-4">
                {cart.map((cartData) => {
                  return <SingleProductSection cartData={cartData} key={cartData._id} />;
                })}
              </div>
            )}
            <div className="pt-4 border-t-2 mt-14 w-[100%]">
              <div className="flex w-[100%] items-center px-[5%] justify-between mb-4">
                <h2 className="font-medium">Total</h2>
                <span className="font-bold">${totalPrice.toFixed(2)} USD</span>
              </div>
              <div className="w-[100%] px-[5%]">
                <button className="bg-[#fca311] text-[#ffffff] h-[54px] rounded-sm  w-[100%]">Continue Shopping</button>
              </div>
            </div>
          </PersistGate>
        )}
      </section>
    </div>
  );
};
