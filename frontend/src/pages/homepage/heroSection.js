import React from "react";
import heroImg from "../../assets/heroBg.jpg";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{ backgroundImage: `url(${heroImg})` }}
        className="w-[100%] h-[300px] tablet:h-[400px] md:h-[452px] lg:h-[560px] xl:h-[652px] 2xl:h-[800px]  bg-cover bg-no-repeat bg-center top-0 relative flex justify-center items-center"
      >
        <div className="overlay absolute top-0 left-0 right-0 w-[100%] h-[100%] bg-opacity-50 bg-[#000000]"></div>
        <div className="justify-center items-center w-[90%] mx-auto flex max-w-[500px] relative tablet  flex-col gap-3 tablet:gap-4 h-[100%] text-white md:gap-5 ">
          <h2 className="text-[32px] tablet:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[56px] font-bold text-center">
            Design Your Spaces, <br /> Your Way
          </h2>
          <p className="text-center lg:text-lg ">
            Upgrade your home and offices with our curated selection of furniture and decor
          </p>
          <button
            className=" lg:w-[11.1rem] lg:h-[72px] w-[9.4rem] h-[52px] md:h-[56px] font-medium  border-[3px] hover:text-white hover:bg-primaryColor hover:border-transparent hover:font-normal duration-500 ease-in-out border-primaryColor text-primaryColor px-2"
            onClick={() => navigate("/shop")}
          >
            Shop now
          </button>
        </div>
      </div>
    </>
  );
};
