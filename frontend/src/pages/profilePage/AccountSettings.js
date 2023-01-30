import { motion } from "framer-motion";
import { primaryBtnVariant } from "../../utils/animation";

export const AccountSettings = () => {
  return (
    <div className="w-[100] tablet:px-[6%] mb-20 xl:px-[4%] px-[4%] lg:px-[2%]">
      <h2 className="text-2xl text-center">Account settings</h2>
      <div className="mt-20 mx-auto  lg:basis-[50%] xl:basis-[60%] lg:order-1 lg:mx-0  max-w-[500px] xl:max-w-[600px]">
        <article>
          <h2 className="text-[24px] font-bold  mb-6">Contact Information</h2>
          <section className="flex flex-col gap-4 w-[100%] mx-auto">
            <div className="w-[100%] ">
              <label htmlFor="" className="font-medium text-[18px]">
                Username
              </label>{" "}
              <br />
              <input
                type="text"
                name=""
                id=""
                className="pl-3 w-[100%] h-[52px] focus-border-[1px] rounded focus:outline-none border-[1px] border-secondaryColor"
                placeholder="username"
              />
            </div>
            <div className="w-[100%] flex justify-between">
              <div className=" p-4 w-[49%] flex-col rounded-sm bg-neutralColor flex items-start md:justify-between gap-6">
                <div>
                  <h4 className="mb-4">Password</h4>
                  <span className="mt-4">
                    A verification link will be sent to your email for the password reset after clicking change
                  </span>
                </div>
                <motion.button
                  initial="initial"
                  whileTap="click"
                  variants={primaryBtnVariant}
                  className=" block h-[28px] mx-auto w-[80%] max-w-[100px] bg-primaryColor text-white font-medium rounded"
                >
                  Change
                </motion.button>
              </div>
              <div className=" p-4 w-[49%] flex-col bg-neutralColor flex rounded-sm items-start md:justify-between gap-6">
                <div>
                  <h4 className="mb-4">Email address</h4>
                  <span>
                    A verification link will be sent to your email for the password reset after clicking change
                  </span>
                </div>
                <motion.button
                  initial="initial"
                  whileTap="click"
                  variants={primaryBtnVariant}
                  className=" block h-[28px] mx-auto w-[80%] max-w-[100px] bg-primaryColor text-white font-medium rounded"
                >
                  Change
                </motion.button>
              </div>
            </div>
          </section>
        </article>
        <article className="mt-6">
          <h2 className="text-[24px] font-bold  mb-6">Billing Address</h2>
          <section className="flex flex-col gap-4 w-[100%] mx-auto">
            <div className="w-[100%] ">
              <label htmlFor="" className="font-medium  text-[18px]">
                Address
              </label>{" "}
              <br />
              <input
                type="text"
                name=""
                id=""
                className="pl-3 w-[100%] h-[52px] focus-border-[1px] rounded focus:outline-none border-[1px] border-secondaryColor"
                placeholder="Address"
              />
            </div>
            <div className="w-[100%] ">
              <label htmlFor="" className="font-medium  text-[18px]">
                Country
              </label>{" "}
              <br />
              <select
                name=""
                className="pl-3 w-[100%] h-[52px] focus-border-[1px] rounded focus:outline-none border-[1px] border-secondaryColor"
                id=""
              >
                <option value="Nigeria">Nigeria</option>
                <option value="United states">United states</option>
              </select>
            </div>
            <div className="w-[100%] flex justify-between gap-[5%] items-center">
              <div className="w-[100%]">
                <label htmlFor="" className="font-medium  text-[18px]">
                  City
                </label>{" "}
                <br />
                <input
                  type="text"
                  name=""
                  id=""
                  className="pl-3 w-[100%] h-[52px] focus-border-[1px] rounded focus:outline-none border-[1px] border-secondaryColor"
                  placeholder="city"
                />
              </div>
              <div className="w-[100%]">
                <label htmlFor="" className="font-medium  text-[18px]">
                  Postal code
                </label>{" "}
                <br />
                <input
                  type="tel"
                  name=""
                  id=""
                  className="pl-3 w-[100%] h-[52px] focus-border-[1px] rounded focus:outline-none border-[1px] border-secondaryColor"
                  placeholder="Zip code"
                />
              </div>
            </div>
          </section>
        </article>
        <article className="mt-6">
          <h2 className="text-[24px] font-bold  mb-6">Shipping options</h2>
          <div className="flex flex-col gap-2">
            {" "}
            <div className="flex gap-4 items-center">
              <input type="radio" name="shipping-rate" value="standard" className="w-4 h-4" />{" "}
              <span className=" text-lg">Standard Rate :&nbsp;$5.00 </span>
            </div>
            <div className="flex gap-4 items-center">
              <input type="radio" name="shipping-rate" value="express" className="w-4 h-4" />{" "}
              <span className=" text-lg">express Rate :&nbsp;$8.00 </span>
            </div>
            <div className="flex gap-4 items-center">
              <input type="radio" name="shipping-rate" value="Free shipping" className="w-4 h-4" />{" "}
              <span className=" text-lg">Free Shipping :&nbsp;$0 </span>
            </div>
          </div>
        </article>
        <article className="mt-6">
          <h2 className="text-[24px] font-bold  mb-6">Payment method</h2>
          <p className="font-medium text-[18px] text-primaryColor ">There is no payment functionalities yet*</p>
        </article>
        <motion.button
          initial="initial"
          whileTap="click"
          variants={primaryBtnVariant}
          className="my-12 w-[100%] mx-auto block h-[52px] bg-primaryColor text-white font-medium rounded"
        >
          Update Changes
        </motion.button>
      </div>
    </div>
  );
};
