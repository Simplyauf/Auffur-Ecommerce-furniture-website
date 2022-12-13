import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const CheckoutPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-12 w-[100%] h-[54px] bg-neutralColor text-secondaryColor pl-[3%] flex items-center justify-between font-bold  font-RobotoCondensed">
        <div className="flex gap-[4px] items-center text-[15px]">
          <IoIosArrowBack />
          <li
            onClick={() => navigate("/")}
            className="hover:underline capitalize"
          >
            Home
          </li>
          <IoIosArrowBack />
          <li
            onClick={() => navigate("/shop")}
            className="hover:underline capitalize"
          >
            Shop
          </li>
          <IoIosArrowBack />
          <span className=" capitalize">Checkout</span>
        </div>
      </div>
      <section class="mt-16 w-[100%] bg-neutralColor py-8">
        <h2 class="text-[28px] font-bold text-center mb-12">Order Summary</h2>
        <div class="flex flex-col gap-4 w-[90%] mx-auto border-b-[1px] border-secondaryColor pb-4">
          <article class="flex gap-4 w-[100%]">
            <div class="w-[35%] h-[90px] bg-neutralColor relative cursor-pointer product-img-container">
              <img
                src="https://pixlr.com/images/index/remove-bg.webp"
                alt=""
                class="rounded-sm w-[100%] h-[100%] object-cover"
              />
            </div>
            <div class="flex flex-col gap-2 w-[35%] text-[16px]">
              <h2 class="text-[18px] font-bold">Wooden bag</h2>
              <span class="font-medium">Quantity: 2</span>
            </div>
            <h4 class="font-bold ">$25.00</h4>
          </article>
          <article class="flex gap-4  w-[100%]">
            <div class="w-[35%] h-[90px] bg-neutralColor relative cursor-pointer product-img-container">
              <img
                src="https://pixlr.com/images/index/remove-bg.webp"
                alt=""
                class="rounded-sm w-[100%] h-[100%] object-cover"
              />
            </div>
            <div class="flex flex-col gap-2 w-[35%] text-[16px]">
              <h2 class="text-[20px] font-bold">Wooden bag</h2>
              <span class="font-medium">Quantity: 2</span>
            </div>
            <h4 class="font-bold ">$25.00</h4>
          </article>
          <article class="flex gap-4  w-[100%]">
            <div class="w-[35%] h-[90px] bg-neutralColor relative cursor-pointer product-img-container">
              <img
                src="https://pixlr.com/images/index/remove-bg.webp"
                alt=""
                class="rounded-sm w-[100%] h-[100%] object-cover"
              />
            </div>
            <div class="flex flex-col gap-2 w-[35%] text-[16px]">
              <h2 class="text-[20px] font-bold">Wooden bag</h2>
              <span class="font-medium">Quantity: 2</span>
            </div>
            <h4 class="font-bold">$25.00</h4>
          </article>
        </div>
        <div class="pt-4 border-t-[1px] border-secondaryColor  mt-16 w-[90%] mx-auto">
          <div class="flex w-[100%] items-center gap-4 text-[18px] justify-between mb-4">
            <h2 class="text-[20px] font-medium">Subtotal</h2>
            <span class="font-bold">$25.00</span>
          </div>
          <div class="flex w-[100%] items-center text-[18px] justify-between mb-4">
            <h2 class="text-[20px] font-medium">Shipping Charges</h2>
            <span class="font-bold">$25.00</span>
          </div>
          <div class="flex w-[100%] items-center text-[18px] justify-between mb-4">
            <h2 class="font-medium text-[24px]">Total</h2>
            <span class="font-bold text-[20px]">$25.00 </span>
          </div>
        </div>
      </section>
      <div class="mt-20 w-[100%]">
        <article>
          <h2 class="text-[24px] font-bold pl-[5%] mb-6">
            Contact Information
          </h2>
          <section class="flex flex-col gap-4 w-[90%] mx-auto">
            <div class="w-[100%] ">
              <label for="" class="font-medium text-[18px]">
                Username
              </label>{" "}
              <br />
              <input
                type="text"
                name=""
                id=""
                class="pl-3 w-[100%] h-[52px] focus-border-[1px] rounded focus:outline-none border-[1px] border-secondaryColor"
                placeholder="username"
              />
            </div>
            <div class="w-[100%] ">
              <label for="" class="font-medium  text-[18px]">
                Email address
              </label>{" "}
              <br />
              <input
                type="email"
                name=""
                id=""
                class="pl-3 w-[100%] h-[52px] focus-border-[1px] rounded focus:outline-none border-[1px] border-secondaryColor"
                placeholder="user@gmail.com"
              />
            </div>
          </section>
        </article>
        <article class="mt-6">
          <h2 class="text-[24px] font-bold pl-[5%] mb-6">Billing Address</h2>
          <section class="flex flex-col gap-4 w-[90%] mx-auto">
            <div class="w-[100%] ">
              <label for="" class="font-medium  text-[18px]">
                Address
              </label>{" "}
              <br />
              <input
                type="text"
                name=""
                id=""
                class="pl-3 w-[100%] h-[52px] focus-border-[1px] rounded focus:outline-none border-[1px] border-secondaryColor"
                placeholder="Address"
              />
            </div>
            <div class="w-[100%] ">
              <label for="" class="font-medium  text-[18px]">
                Country
              </label>{" "}
              <br />
              <select
                name=""
                class="pl-3 w-[100%] h-[52px] focus-border-[1px] rounded focus:outline-none border-[1px] border-secondaryColor"
                id=""
              >
                <option value="Nigeria">Nigeria</option>
                <option value="United states">United states</option>
              </select>
            </div>
            <div class="w-[100%] flex justify-between gap-[5%] items-center">
              <div class="w-[100%]">
                <label for="" class="font-medium  text-[18px]">
                  City
                </label>{" "}
                <br />
                <input
                  type="text"
                  name=""
                  id=""
                  class="pl-3 w-[100%] h-[52px] focus-border-[1px] rounded focus:outline-none border-[1px] border-secondaryColor"
                  placeholder="city"
                />
              </div>
              <div class="w-[100%]">
                <label for="" class="font-medium  text-[18px]">
                  Postal code
                </label>{" "}
                <br />
                <input
                  type="tel"
                  name=""
                  id=""
                  class="pl-3 w-[100%] h-[52px] focus-border-[1px] rounded focus:outline-none border-[1px] border-secondaryColor"
                  placeholder="Zip code"
                />
              </div>
            </div>
          </section>
        </article>
        <article class="mt-6">
          <h2 class="text-[24px] font-bold pl-[5%] mb-6">Payment method</h2>
          <p class="font-medium text-[18px] text-primaryColor pl-[5%]">
            There is no payment functionalities yet*
          </p>
        </article>
        <button class="my-12 w-[90%] mx-auto block h-[52px] bg-primaryColor text-white font-medium rounded">
          Place Order
        </button>
      </div>
    </>
  );
};
