import React from "react";
import {
  imageCuriosityDesktop,
  imageCuriosityMobile,
  imageDeepEarthDesktop,
  imageDeepEarthMobile,
  imageFisheyeDesktop,
  imageFisheyeMobile,
  imageFromAboveDesktop,
  imageFromAboveMobile,
  imageGridDesktop,
  imageGridMobile,
  imageNightArcadeDesktop,
  imageNightArcadeMobile,
  imagePocketBorealisDesktop,
  imagePocketBorealisMobile,
  imageSoccerTeamDesktop,
  imageSoccerTeamMobile,
} from "../assets";

const Projects = () => {
  const projects = [
    {
      title: "Deep Earth",
      imageMobile: imageDeepEarthMobile,
      imageDesktop: imageDeepEarthDesktop,
    },
    {
      title: "Night Arcade",
      imageMobile: imageNightArcadeMobile,
      imageDesktop: imageNightArcadeDesktop,
    },
    {
      title: "Soccer Team VR",
      imageMobile: imageSoccerTeamMobile,
      imageDesktop: imageSoccerTeamDesktop,
    },
    {
      title: "The⠀⠀⠀ Grid",
      imageMobile: imageGridMobile,
      imageDesktop: imageGridDesktop,
    },
    {
      title: "From up Above VR",
      imageMobile: imageFromAboveMobile,
      imageDesktop: imageFromAboveDesktop,
    },
    {
      title: "Pocket Borealis",
      imageMobile: imagePocketBorealisMobile,
      imageDesktop: imagePocketBorealisDesktop,
    },
    {
      title: "The Curiosity",
      imageMobile: imageCuriosityMobile,
      imageDesktop: imageCuriosityDesktop,
    },
    {
      title: "make it fisheye",
      imageMobile: imageFisheyeMobile,
      imageDesktop: imageFisheyeDesktop,
    },
  ];

  return (
    <div className="md:py-20 sm:py-10 py-2 relative w-full">
      <div className="flex items-center justify-center md:justify-between py-10">
        <h2 className="uppercase font-josefin font-light sm:text-[3rem] text-[2rem] leading-none">
          Our Creations
        </h2>
        <a
          className="uppercase text-[15px] text-white hover:text-black font-alata tracking-[4.5px] bg-black hover:bg-white border-2 border-black py-[10px] px-[40px] md:block hidden transition duration-200"
          href=""
        >
          See all
        </a>
      </div>
      <div className="grid p-grid-template gap-8">
        {projects.map((project, index) => (
          <a href="" className="relative mds:h-[450px] h-[150px] overlay">
            <div className="py-8 px-10 w-full h-full flex items-end justify-start">
              <picture>
                <source
                  srcSet={project.imageMobile}
                  media="(max-width: 636px)"
                />
                <source
                  srcSet={project.imageDesktop}
                  media="(min-width: 636px)"
                />
                <img
                  className="absolute h-full w-full z-10 top-0 left-0 object-cover"
                  src={project.imageDesktop}
                  alt={project.title}
                />
              </picture>
              <h3 className="uppercase text-white text-[2rem] font-josefin font-light z-20 relative">
                {project.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
      <div className="w-full flex justify-center mt-10">
        <a
          className="uppercase text-[15px] text-black hover:text-white font-alata tracking-[4.5px] bg-white hover:bg-black border-2 border-black py-[14px] px-[44px] block md:hidden "
          href=""
        >
          See all
        </a>
      </div>
      
    </div>
  );
};

export default Projects;
