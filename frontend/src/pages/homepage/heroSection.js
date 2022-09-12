import React from "react";

export const HeroSection = () => {
  return (
    <>
      <div className="w-[100%] h-[92vh] bg-[url('https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-no-repeat bg-center top-0 relative">
        <div className="overlay absolute top-0 left-0 right-0 w-[100%] h-[100%] bg-opacity-25 bg-[#000000]"></div>
      </div>
    </>
  );
};
