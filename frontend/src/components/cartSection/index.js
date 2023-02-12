import { IoCloseOutline } from "react-icons/io5";
import { SingleProductSection } from "./singleProductSection";
import { persistor } from "../../store.js";
import { ProductLoader } from "../loaders/productLoader";
import { PersistGate } from "redux-persist/integration/react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleSetShippingMethodValue } from "../../utils/handleSetShippingMethodValueFn";
import { settingTotalProductPriceAndTotalQuantityValue } from "../../utils/settingTotalProductPriceAndquantityValue";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { primaryBtnVariant } from "../../utils/animation";

export const Cart = ({ isCartSectionActive, setIsCartSectionActive }) => {
  const [shippingMethodValue, setShippingMethodValue] = useState(0);
  const [totalProductPrice, setTotalProductPrice] = useState(0);
  const [productTotalQuantity, setProductTotalQuantity] = useState(0);

  const { cart } = useSelector((state) => state.wishlistAndCartSection);
  const { isLoading } = useSelector((state) => state.productsData);
  const { shippingMethod } = useSelector((state) => state.userAuth);


  // setting shippingMethodValue based on chosen method
  useEffect(() => {
    handleSetShippingMethodValue(shippingMethod, setShippingMethodValue);
  }, [shippingMethod]);

  // iterate through cart and multiply price by quantity while taking notes of discounted products and get totalProductValue and also total product quantity so as to use to get total value which is shipping price for each goods + total products value
  useEffect(() => {
    settingTotalProductPriceAndTotalQuantityValue(setProductTotalQuantity, setTotalProductPrice);
  }, [cart]);

  const navigate = useNavigate();

  const proceedToCheckoutPage = () => {
    let isOrderAboveLimit;
    for (let key of cart) {
      if (key.quantity > key.stock) {
        isOrderAboveLimit = true;
      }
    }

    if (isOrderAboveLimit) {
      toast("One or more product quantities selected is more than the amount in stock", {
        type: "error",
        autoClose: false,
        position: "top-center",
      });
    } else {
      setIsCartSectionActive(false);
      navigate("/checkout");
    }
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isCartSectionActive ? "0%" : "100%" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
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
          <ProductLoader />
        ) : (
          <PersistGate loading={<ProductLoader />} persistor={persistor}>
            {cart.length < 1 ? (
              <div className="flex justify-center items-center w-[100%] h-[50vh]">
                {" "}
                <h2 className="font-bold text-xl">Your Cart is currently empty</h2>{" "}
              </div>
            ) : (
              <div className="w-[100%] flex flex-col px-[5%] gap-4">
                {cart.map((cartData) => {
                  return <SingleProductSection {...{ cartData, setIsCartSectionActive }} key={cartData._id} />;
                })}
              </div>
            )}
            <div className="pt-4 flex flex-col gap-4 border-t-[2px] border-LightSecondaryColor mt-20 w-[100%]">
              <div className="flex  items-center mx-[5%] justify-between  border-b-[1px] border-LightSecondaryColor pb-4">
                <h2 className="font-normal text-[18px] md:text-[20px]">SubTotal</h2>
                <span className="text-lg tracking-wide ">${totalProductPrice.toFixed(2)} USD</span>
              </div>
              <div className="flex  items-center mx-[5%] justify-between  border-b-[1px] border-LightSecondaryColor pb-4">
                <div className="flex flex-col gap-2">
                  {" "}
                  <h2 className="font-normal  md:text-[20px] text-[18px]">Shipping option</h2>
                  <span className=" md:text-lg font-RobotoCondensed">{shippingMethod} rate</span>
                </div>

                <span className=" tracking-wide  md:text-lg">${shippingMethodValue * productTotalQuantity}.00 USD</span>
              </div>
              <div className="flex  items-center mx-[5%] justify-between ">
                <h2 className="font-bold text-[20px] md:text-[24px]">Total</h2>
                <h2 className="font-bold tracking-wide  text-[20px] md:text-[24px]">
                  ${(totalProductPrice + productTotalQuantity * shippingMethodValue).toFixed(2)} USD
                </h2>
              </div>
              <div className=" mx-[5%] mt-6">
                <motion.button
                  variants={primaryBtnVariant}
                  initial="initial"
                  whileTap="click"
                  className="bg-primaryColor text-[#ffffff] w-[100%] h-[54px] rounded-md  "
                  onClick={proceedToCheckoutPage}
                >
                  Proceed to Checkout
                </motion.button>
              </div>
            </div>
          </PersistGate>
        )}
      </section>
    </motion.div>
  );
};
