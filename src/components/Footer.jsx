import React from "react";
import { iconFacebook, iconInstagram, iconPinterest, iconTwitter, logo } from "../assets";

const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-between gap-10 py-16">
      <div className="flex flex-col md:items-start items-center justify-start gap-10">
        <img src={logo} alt="logo" />
        <ul className="flex items-center justify-center gap-5 flex-col sm:flex-row">
          {
            ['About', 'Careers', 'Events', 'Products', 'Support'].map((navLink,index)=> 
              <li key={index}><a className="text-white font-josefin font-semibold" href="#">{navLink}</a></li>
            )
          }
        </ul>
      </div>
      <div className="flex flex-col md:items-end items-center justify-center gap-10 ">
        <ul className="flex items-center justify-center gap-5 ">
          {
            [
              {
                name:'facebook',
                icon: iconFacebook
              },
              {
                name:'twitter',
                icon: iconTwitter
              },
              {
                name:'Pinterest',
                icon: iconPinterest
              },
              {
                name:'instagram',
                icon: iconInstagram
              }
            ].map((socialLink,index)=>
              <li key={index}><a href="#"><img src={socialLink.icon} alt={socialLink.name} /></a></li>
            )
          }
        </ul>
        <p className="text-[14px] text-dark-gray font-alata font-bold tracking-[.5px]"> 2021 Loopstudios. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
