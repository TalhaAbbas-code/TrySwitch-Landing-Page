import React from "react";
import Image from "next/image";

import DownloadButton from "../DownloadButton";
import Tryswitchhero from "@/public/images/Tryswitch-hero.png";
const Hero = () => {
  return (
    <div className="section-padding  ">
      <div className="px-[3%]  mt-10 max-sm:h-auto  flex max-sm:flex-col mb-[5%] w-full  bg-gradient-primary rounded-md h-[80vh]">
        <div className="w-[60%] max-sm:w-full max-sm:mt-10 flex flex-col justify-evenly ">
          <div className="lg:text-7xl text-5xl max-sm:text-5xl leading-normal font-bold ">
            <p>The all-in-one app for off-market deals</p>
          </div>
          <div className="flex gap-10 max-lg:flex-col ">
            <DownloadButton />
          </div>
        </div>
        <div className="w-1/2 max-sm:w-full ">
          <Image
            src={Tryswitchhero}
            alt="Dynamic Image"
            className="   w-full h-full mt-10   lg:ml-20"
            width={800}
            height={800}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
