import { IoCloseOutline } from "react-icons/io5";
import { SingleProductSection } from "./singleProductSection";
import { persistor } from "../../store.js";
import { Loading } from "../Loading.js";
import { PersistGate } from "redux-persist/integration/react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Cart = ({ isCartSectionActive, setIsCartSectionActive }) => {
  const { cart } = useSelector((state) => state.wishlistAndCartSection);
  const { isLoading } = useSelector((state) => state.productsData);
  const [totalPrice, setTotalPrice] = useState(0);
  const [productTotalQuantity, setProductTotalQuantity] = useState(0);

  // iterate through cart and multiply price by quantity while taking notes of discounted products
  useEffect(() => {
    let totalPriceValue = 0;
    let totalProductQuantityValue = 0;
    for (let key of cart) {
      let price;
      if (key.discountPercentValue > 0) {
        price = key.price - (key.price * key.discountPercentValue) / 100;
      } else {
        price = key.price;
      }
      totalPriceValue += price * key.quantity;
      totalProductQuantityValue += key.quantity;
    }
    setTotalPrice(totalPriceValue);
    setProductTotalQuantity(totalProductQuantityValue);
  }, [cart]);

  return (
    <div
      className={`fixed top-0 left-0 bottom-0 w-[100%] h-[100vh] z-[1500] bg-opacity-60 bg-[#000000] translate-x-[100%]  ${
        isCartSectionActive && "translate-x-[0%]"
      }`}
    >
      <section className="flex flex-col z-[2000] overflow-y-auto absolute top-0 bg-white items-start w-[98%] right-0 bottom-0 pt-4 pb-12 gap-7 tracking-[0.25px] text-lg h-[100%] lg:max-w-[520px] md:max-w-[480px] tablet:max-w-[480px]">
        <h1 className=" text-center mt-[0.5em] w-[100%] text-[1.75rem] border-b-[2px] border-LightSecondaryColor pb-4 font-bold">
          My Cart
        </h1>
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
                <h2 className="font-bold text-xl">Your Cart is currently empty</h2>{" "}
              </div>
            ) : (
              <div className="w-[100%] flex flex-col px-[5%] gap-4">
                {cart.map((cartData) => {
                  return <SingleProductSection cartData={cartData} key={cartData._id} />;
                })}
              </div>
            )}
            <div className="pt-4 flex flex-col gap-4 border-t-[2px] border-LightSecondaryColor mt-14 w-[100%]">
              <div className="flex  items-center mx-[5%] justify-between  border-b-[1px] border-LightSecondaryColor pb-4">
                <h2 className="font-normal text-[18px] md:text-[20px]">SubTotal</h2>
                <span className="text-lg tracking-wide ">${totalPrice.toFixed(2)} USD</span>
              </div>
              <div className="flex  items-center mx-[5%] justify-between  border-b-[1px] border-LightSecondaryColor pb-4">
                <div className="flex flex-col gap-2">
                  {" "}
                  <h2 className="font-normal  md:text-[20px] text-[18px]">Shipping option</h2>
                  <span className=" md:text-lg font-RobotoCondensed">Standard rate</span>
                </div>

                <span className=" tracking-wide  md:text-lg">$7.00 USD</span>
              </div>
              <div className="flex  items-center mx-[5%] justify-between ">
                <h2 className="font-bold text-xl md:text-2xl">Total</h2>
                <span className="font-bold tracking-wide font-RobotoCondensed text-[18px] md:text-[20px]">
                  ${(totalPrice + productTotalQuantity * 7).toFixed(2)} USD
                </span>
              </div>
              <div className=" mx-[5%] mt-6">
                <Link className="w-[100%] h-[54px] block" to="/checkout" onClick={() => setIsCartSectionActive(false)}>
                  {" "}
                  <button className="bg-primaryColor text-[#ffffff] w-[100%] h-[100%] rounded-sm  ">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </PersistGate>
        )}
      </section>
    </div>
  );
};
