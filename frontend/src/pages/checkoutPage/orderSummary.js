import { useSelector } from "react-redux";

export const OrderSummary = () => {
  const { cart } = useSelector((state) => state.wishlistAndCartSection);

  return (
    <section className="mt-16 mb-16 lg:mb-0 w-[92%] tablet:w-[88%] mx-auto lg:mx-0  bg-white border-2 border-LightSecondaryColor py-8 lg:order-2 lg:basis-[40%] xl:basis-[35%]">
      <h2 className="text-[28px] font-bold text-center mb-12">Order Summary</h2>
      <div className="flex flex-col gap-4 w-[90%] max-w-[500px] mx-auto border-b-[1px] border-secondaryColor pb-4">
        {cart.map((cartData) => {
          return (
            <article className="flex gap-4 w-[100%]" key={cartData._id}>
              <div className="w-[40%] h-[120px] tablet:h-[160px] md:h-[160px] bg-neutralColor relative cursor-pointer product-img-container flex justify-center items-center">
                <img
                  src={cartData.image}
                  alt=""
                  className="rounded-sm w-[100%]  object-cover h-auto max-h-[90%] max-w-[90%]"
                />
              </div>
              <div className="flex flex-col gap-2 w-[35%] text-[16px]">
                <h2 className="text-[18px] font-bold font-RobotoSlab">{cartData.title}</h2>
                <span className="font-medium">Quantity: {cartData.quantity}</span>
              </div>
              <h4 className="font-bold tracking-wide">${cartData.price.toFixed(2)}</h4>
            </article>
          );
        })}
      </div>
      <div className="pt-4 border-t-[1px] max-w-[500px] border-secondaryColor  mt-16 w-[90%] mx-auto">
        <div className="flex w-[100%] items-center gap-4 text-[18px] justify-between mb-4">
          <h2 className="text-[20px] font-RobotoSlab font-medium">Subtotal</h2>
          <span className="font-bold tracking-wide">$25.00</span>
        </div>
        <div className="flex w-[100%] items-center text-[18px] justify-between mb-4">
          <h2 className="text-[20px] font-RobotoSlab font-medium">Shipping Charges</h2>
          <span className="font-bold tracking-wide">$25.00</span>
        </div>
        <div className="flex w-[100%] items-center text-[18px] justify-between mb-4">
          <h2 className="font-medium font-RobotoSlab text-[24px]">Total</h2>
          <span className="font-bold text-[20px] tracking-wide">$25.00 </span>
        </div>
      </div>
    </section>
  );
};
