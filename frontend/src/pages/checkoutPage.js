import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const CheckoutPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-12 w-[100%] h-[54px] bg-[#e5e5e5] text-[#14213d] pl-[3%] flex items-center justify-between font-bold  font-RobotoCondensed">
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
            onClick={() => navigate("/Shop")}
            className="hover:underline capitalize"
          >
            Shop
          </li>
          <IoIosArrowBack />
          <span className=" capitalize">Checkout</span>
        </div>
      </div>
      <section class="mt-20 w-[100%] bg-gray-500 py-8">
        <h2 class="text-[24px] font-bold text-center mb-12">Order Summary</h2>
        <div class="flex flex-col gap-4 w-[90%] mx-auto border-b-[1px] border-[#14213d] pb-4">
          <article class="flex gap-4 w-[100%]">
            <div class="w-[35%] h-[90px] bg-[#e5e5e5] relative cursor-pointer product-img-container">
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
            <span class="font-medium">$25.00</span>
          </article>
          <article class="flex gap-4  w-[100%]">
            <div class="w-[35%] h-[90px] bg-[#e5e5e5] relative cursor-pointer product-img-container">
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
            <span class="font-medium">$25.00</span>
          </article>
          <article class="flex gap-4  w-[100%]">
            <div class="w-[35%] h-[90px] bg-[#e5e5e5] relative cursor-pointer product-img-container">
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
            <span class="font-medium">$25.00</span>
          </article>
        </div>
        <div class="pt-4 border-t-[1px] border-[#14213d]  mt-16 w-[90%] mx-auto">
          <div class="flex w-[100%] items-center gap-4 text-[18px] justify-between mb-4">
            <h2 class="">Subtotal</h2>
            <span class="">$25.00</span>
          </div>
          <div class="flex w-[100%] items-center text-[18px] justify-between mb-4">
            <h2 class="">Shipping Charges</h2>
            <span class="">$25.00</span>
          </div>
          <div class="flex w-[100%] items-center text-[18px] justify-between mb-4">
            <h2 class="font-bold">Total</h2>
            <span class="font-bold">$25.00 </span>
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
              <label for="" class="font-medium">
                Username
              </label>{" "}
              <br />
              <input
                type="text"
                name=""
                id=""
                class="pl-3 w-[100%] h-[52px] focus-border-[1px] rounded focus:outline-none border-[1px] border-[#14213d]"
                placeholder="username"
              />
            </div>
            <div class="w-[100%] ">
              <label for="" class="font-medium">
                Email address
              </label>{" "}
              <br />
              <input
                type="email"
                name=""
                id=""
                class="pl-3 w-[100%] h-[52px] focus-border-[1px] rounded focus:outline-none border-[1px] border-[#14213d]"
                placeholder="user@gmail.com"
              />
            </div>
          </section>
        </article>
        <article class="mt-6">
          <h2 class="text-[24px] font-bold pl-[5%] mb-6">Billing Address</h2>
          <section class="flex flex-col gap-4 w-[90%] mx-auto">
            <div class="w-[100%] ">
              <label for="" class="font-medium">
                Address
              </label>{" "}
              <br />
              <input
                type="text"
                name=""
                id=""
                class="pl-3 w-[100%] h-[52px] focus-border-[1px] rounded focus:outline-none border-[1px] border-[#14213d]"
                placeholder="Address"
              />
            </div>
            <div class="w-[100%] ">
              <label for="" class="font-medium">
                Country
              </label>{" "}
              <br />
              <select
                name=""
                class="pl-3 w-[100%] h-[52px] focus-border-[1px] rounded focus:outline-none border-[1px] border-[#14213d]"
                id=""
              >
                <option value="Nigeria">Nigeria</option>
                <option value="United states">United states</option>
              </select>
            </div>
            <div class="w-[100%] flex justify-between gap-[5%] items-center">
              <div class="w-[100%]">
                <label for="" class="font-medium">
                  City
                </label>{" "}
                <br />
                <input
                  type="text"
                  name=""
                  id=""
                  class="pl-3 w-[100%] h-[52px] focus-border-[1px] rounded focus:outline-none border-[1px] border-[#14213d]"
                  placeholder="city"
                />
              </div>
              <div class="w-[100%]">
                <label for="" class="font-medium">
                  Postal code
                </label>{" "}
                <br />
                <input
                  type="tel"
                  name=""
                  id=""
                  class="pl-3 w-[100%] h-[52px] focus-border-[1px] rounded focus:outline-none border-[1px] border-[#14213d]"
                  placeholder="Zip code"
                />
              </div>
            </div>
          </section>
        </article>
        <article class="mt-6">
          <h2 class="text-[24px] font-bold pl-[5%] mb-6">Payment method</h2>
          <span class="font-medium text-[18px] text-[#fca311] pl-[5%]">
            There is no payment functionalities yet*
          </span>
        </article>
        <button class="my-12 w-[90%] mx-auto block h-[52px] bg-[#fca311] text-white font-medium rounded">
          Place Order
        </button>
      </div>
    </>
  );
};
