import React, { useEffect, useState } from "react";
import { iconClose, iconHamburger, logo } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(t => !t)
   
  }

  useEffect(()=>{
    
     if(toggle){
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

  },[toggle])

  return (
    <nav className="w-full flex items-center justify-between">
      <img src={logo} alt="loopstudio" className="z-30" />
      <ul className="flex-1 items-center justify-end gap-[2rem] hidden md:flex">
        {["About", "Careers", "Events", "Products", "support"].map(
          (navlink, index) => (
            <li className="hover-effect cursor-pointer" key={index}>
              <a className="font-alata text-[15px] text-white" href="">
                {navlink}
              </a>
            </li>
          )
        )}
      </ul>

      <div className="flex md:hidden ">
        <img src={toggle ? iconClose : iconHamburger} alt="" className="relative z-30" onClick={handleToggle} />

        <div className={`${toggle ? "translate-x-[0]" : "translate-x-[100%]" } transition duration-200 fixed inset-0 bg-black sm:px-14 p-6`}>
          <ul className="flex-1 flex flex-col items-start justify-center gap-[1.5rem] h-full">
            {["About", "Careers", "Events", "Products", "support"].map(
              (navlink, index) => (
                <li className="hover-effect cursor-pointer" key={index}>
                  <a className="uppercase font-josefin font-light text-[24px] text-white" href="">
                    {navlink}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
