import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { handleSetShippingMethodValue } from "../../utils/handleSetShippingMethodValueFn";
import { settingTotalProductPriceAndTotalQuantityValue } from "../../utils/settingTotalProductPriceAndquantityValue";

export const OrderSummary = ({ setTotalAmountToBePaid }) => {
  const [shippingMethodValue, setShippingMethodValue] = useState(0);
  const [totalProductPrice, setTotalProductPrice] = useState(0);
  const [productTotalQuantity, setProductTotalQuantity] = useState(0);

  const { cart } = useSelector((state) => state.wishlistAndCartSection);
  const { shippingMethod } = useSelector((state) => state.userAuth);

  // cart with quantity lesser than zero shouldnt be allowed for checkout
  const filteredCart = cart.filter((product) => product.quantity > 0);

  useEffect(() => {
    handleSetShippingMethodValue(shippingMethod, setShippingMethodValue);
  }, [shippingMethod]);

  useEffect(() => {
    setTotalAmountToBePaid(totalProductPrice + productTotalQuantity * shippingMethodValue);
  }, [totalProductPrice, shippingMethodValue, productTotalQuantity, setTotalAmountToBePaid]);

  useEffect(() => {
    settingTotalProductPriceAndTotalQuantityValue(setProductTotalQuantity, setTotalProductPrice);
  }, [cart]);

  return (
    <section className="mt-16 mb-16 lg:mb-0 w-[92%] tablet:w-[88%] mx-auto lg:mx-0  bg-white border-2 border-LightSecondaryColor py-8 lg:order-2 lg:basis-[40%] xl:basis-[35%]">
      <h2 className="text-[28px] font-bold text-center mb-12">Order Summary</h2>
      <div className="flex flex-col gap-4 w-[90%] max-w-[500px] mx-auto ">
        {filteredCart.map((cartItem) => {
          return (
            <article
              className="flex gap-4 w-[100%] border-b-[1px] justify-between border-LightSecondaryColor pb-4"
              key={cartItem._id}
            >
              <div className="w-[40%] tablet:w-[45%] md:w-[45%]  h-[110px]  tablet:h-[180px] md:h-[160px] bg-neutralColor relative cursor-pointer product-img-container flex justify-center items-center">
                <img
                  src={cartItem.image}
                  alt=""
                  className="rounded-sm w-[100%]  object-contain h-auto max-h-[90%] max-w-[90%]"
                />
              </div>
              <div className="flex flex-col gap-2 w-[30%] text-[16px]">
                <h2 className="text-[18px] font-normal font-RobotoSlab">{cartItem.title}</h2>
                <span className="font-normal">Quantity: {cartItem.quantity}</span>
              </div>
              <h4 className="font-bold tracking-wide text-[18px] md:text-[20px]">
                ${cartItem.price.toFixed(2) * cartItem.quantity}
              </h4>
            </article>
          );
        })}
      </div>
      <div className="pt-4 flex flex-col gap-4 border-t-[2px] border-LightSecondaryColor  mt-16 w-[100%] ">
        <div className="flex  items-center mx-[5%] justify-between  border-b-[1px] border-LightSecondaryColor pb-4">
          <h2 className="font-normal  text-[18px] md:text-[20px]">SubTotal</h2>
          <span className="text-lg tracking-wide ">${totalProductPrice.toFixed(2)} USD</span>
        </div>
        <div className="flex  items-center mx-[5%] justify-between  border-b-[1px] border-LightSecondaryColor pb-4">
          <div className="flex flex-col gap-2">
            {" "}
            <h2 className="font-normal  md:text-[20px] text-[18px]">Shipping option</h2>
            <span className=" text-lg font-RobotoCondensed">{shippingMethod} rate</span>
          </div>

          <span className=" tracking-wide  text-lg">${shippingMethodValue * productTotalQuantity}.00 USD</span>
        </div>
        <div className="flex items-center mx-[5%] justify-between ">
          <h2 className="font-bold text-[20px] md:text-[24px]">Total</h2>
          <h2 className="font-bold tracking-wide  text-[20px] md:text-[24px]">
            {" "}
            ${(totalProductPrice + productTotalQuantity * shippingMethodValue).toFixed(2)} USD
          </h2>
        </div>
      </div>
    </section>
  );
};
