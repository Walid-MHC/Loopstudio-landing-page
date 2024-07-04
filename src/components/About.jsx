import React from "react";
import { imageInteractiveDesktop } from "../assets";

const About = () => {
  return (
    <div className="md:py-20 sm:py-10 py-2 relative w-full">
      <img src={imageInteractiveDesktop} alt="interactive" />
      <div className="md:w-[55%] xl:p-24 sm:p-16 px-6 py-10 bg-white md:absolute md:bottom-0 md:right-0 xl:-right-[10%] md:min-w-[500px] text-center md:text-start">
        <h2 className="uppercase xl:text-[2.75rem] xs:text-[2.5rem] text-[2rem] font-josefin font-light xs:leading-[48px] leading-[32px] xs:mb-6 mb-4">
          The leader in interactive vr
        </h2>
        <p className="text-[15px] text-dark-gray font-alata leading-[165%] md:leading-normal">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          expreriences that bind to their brand
        </p>
      </div>
    </div>
  );
};

export default About;
