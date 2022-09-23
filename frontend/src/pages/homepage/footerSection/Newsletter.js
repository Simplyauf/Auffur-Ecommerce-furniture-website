import React from "react";

export const Newsletter = () => {
  return (
    <section className="mt-16 py-8 px-6 w-[90%] mx-auto bg-[#fca311] text-white rounded-md z-10 sticky">
      <h2 className="font-bold text-[20px] text-center">Get early access today</h2>
      <p className="mt-6 font-medium ">
        Subscribe to our newsletter to get the latest furniture trends,products,events and exciting offers
      </p>
      <form className="flex flex-col gap-6 mt-6">
        <input
          className="w-[100%] pl-8 h-12 rounded-full outline-0"
          type="email"
          placeholder="Your email"
          name=""
          id=""
        />
        <button
          type="submit"
          className="text-white rounded-full bg-gradient-to-r from-[#14213d] to-black w-[100%] h-12 "
        >
          subscribe
        </button>
      </form>
    </section>
  );
};
