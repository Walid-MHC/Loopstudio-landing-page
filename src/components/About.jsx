import React from "react";
import { imageInteractiveDesktop } from "../assets";

const About = () => {
  return (
    <div className="py-20 relative w-full">
      <img src={imageInteractiveDesktop} alt="interactive" />
      <div className="md:w-[55%] xl:p-24 p-16 bg-white md:absolute md:bottom-0 md:right-0 xl:-right-[10%] md:min-w-[500px] text-center md:text-start">
        <h2 className="uppercase xl:text-[2.75rem] text-[2.5rem] font-josefin font-light leading-[48px] mb-6">
          The leader in interactive vr
        </h2>
        <p className="text-[15px] text-dark-gray font-alata leading-[200%] md:leading-normal">
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
