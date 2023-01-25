import React from "react";

export const Newsletter = () => {
  return (
    <section className="mt-16 py-8 px-6 tablet:px-[5%] lg:w-[50%] xs:[40%] w-[92%] tablet:w-[75%] md:w-[60%] mx-auto bg-primaryColor text-white rounded-md z-10 sticky">
      <h2 className="font-bold text-[24px] text-center">Get early access today</h2>
      <p className="mt-6 font-medium text-center">
        Subscribe to our newsletter to get the latest furniture trends,products,events and exciting offers
      </p>
      <form className="flex tablet:w-[90%] tablet:mx-auto flex-col gap-6 mt-6">
        <input
          className="w-[100%]  pl-8 h-12 rounded-full outline-0 text-secondaryColor"
          type="email"
          placeholder="Your email"
          name=""
          id=""
        />
        <button
          type="submit"
          className="text-white rounded-full bg-gradient-to-r from-secondaryColor to-black w-[100%] h-12 "
        >
          subscribe
        </button>
      </form>
    </section>
  );
};
