import React from "react";
import heroImg from "../../assets/heroBg.jpg";

export const HeroSection = () => {
  console.log(heroImg);
  return (
    <>
      <div
        style={{ backgroundImage: `url(${heroImg})` }}
        className="w-[100%] h-[300px] tablet:h-[400px] md:h-[452px] lg:h-[560px] xl:h-[652px] 2xl:h-[800px]  bg-cover bg-no-repeat bg-center top-0 relative"
      >
        <div className="overlay absolute top-0 left-0 right-0 w-[100%] h-[100%] bg-opacity-25 bg-[#000000]"></div>
      </div>
    </>
  );
};
