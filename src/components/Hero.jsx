import React from "react";
import { imageHeroDesktop } from "../assets";
import { Navbar } from "../components";

const Hero = () => {
  return (
    <section className="w-full h-[100vh] sm:h-auto relative flex flex-col items-center justify-start py-14 sm:px-14 px-6 ">
      <img
        className="absolute h-full w-full inset-0 z-0 object-cover"
        src={imageHeroDesktop}
        alt=""
      />
      <div className="w-full max-w-[1110px] relative z-20">
        <Navbar />
      </div>
      <div className="w-full flex-1 max-w-[1110px] relative z-10 flex items-center justify-start py-20">
        <div className="p-6 sm:p-9 border-2 border-white w-full max-w-[650px]">
          <h1 className="md:text-[70px] text-[11vw] text-white uppercase font-josefin font-light sm:leading-[70px] leading-[90%] w-full">
            immersive <br /> experiences <br /> that deliver
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
