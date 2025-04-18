import React from "react";
import Image from "next/image";
import { navLinks } from "../../constants/navLinks";

const Nav = () => {
  return (
    <div className="bg-white section-padding border  border-red-500">
      <div className="   flex flex-row justify-between items-center">
        <div className=" flex">
          <Image
            src="/images/logo.png"
            alt="Dynamic Image"
            width={100}
            height={100}
          />
          <Image
            src="/images/tryswitch.png"
            alt="Dynamic Image"
            width={100}
            height={90}
            className="object-contain max-md:hidden"
          />
        </div>

        <div className=" flex justify-between items-center max-sm:hidden text-primaryBlue max-md:text-xs lg:font-bold gap-2  lg:gap-10">
          {navLinks.map((item, index) => (
            <>
              <a key={index} href={item.name}>
                {item.name}
              </a>
            </>
          ))}
          <button className="bg-red-500 px-4 py-1 rounded-lg text-white text-center text-base">
            {" "}
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
