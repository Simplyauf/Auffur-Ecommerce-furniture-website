import { useSelector } from "react-redux";

export const OrderSummary = () => {
  const { cart } = useSelector((state) => state.wishlistAndCartSection);

  return (
    <section className="mt-16 mb-16 lg:mb-0 w-[92%] tablet:w-[88%] mx-auto lg:mx-0  bg-white border-2 border-LightSecondaryColor py-8 lg:order-2 lg:basis-[40%] xl:basis-[35%]">
      <h2 className="text-[28px] font-bold text-center mb-12">Order Summary</h2>
      <div className="flex flex-col gap-4 w-[90%] max-w-[500px] mx-auto ">
        {cart.map((cartData) => {
          return (
            <article
              className="flex gap-4 w-[100%] border-b-[1px] justify-between border-LightSecondaryColor pb-4"
              key={cartData._id}
            >
              <div className="w-[40%] tablet:w-[45%] md:w-[45%]  h-[110px]  tablet:h-[180px] md:h-[160px] bg-neutralColor relative cursor-pointer product-img-container flex justify-center items-center">
                <img
                  src={cartData.image}
                  alt=""
                  className="rounded-sm w-[100%]  object-contain h-auto max-h-[90%] max-w-[90%]"
                />
              </div>
              <div className="flex flex-col gap-2 w-[30%] text-[16px]">
                <h2 className="text-[18px] font-bold font-RobotoSlab">{cartData.title}</h2>
                <span className="font-medium">Quantity: {cartData.quantity}</span>
              </div>
              <h4 className="font-bold tracking-wide">${cartData.price.toFixed(2)}</h4>
            </article>
          );
        })}
      </div>
      <div className="pt-4 flex flex-col gap-4 border-t-[2px] border-LightSecondaryColor  mt-16 w-[100%] ">
        <div className="flex  items-center mx-[5%] justify-between  border-b-[1px] border-LightSecondaryColor pb-4">
          <h2 className="font-normal  text-2xl">SubTotal</h2>
          <span className="text-lg tracking-wide ">$25 USD</span>
        </div>
        <div className="flex  items-center mx-[5%] justify-between  border-b-[1px] border-LightSecondaryColor pb-4">
          <div className="flex flex-col gap-2">
            {" "}
            <h2 className="font-normal  text-2xl">Shipping option</h2>
            <span className=" text-lg">Standard rate</span>
            <li class="tailwindUnderlineDidntWork text-lg">change shipping option</li>
          </div>

          <span className=" tracking-wide  text-lg">$35.00 USD</span>
        </div>
        <div className="flex items-center mx-[5%] justify-between ">
          <h2 className="font-bold  text-2xl">Total</h2>
          <span className="font-bold tracking-wide  text-lg">$25.00 USD</span>
        </div>
      </div>
    </section>
  );
};
