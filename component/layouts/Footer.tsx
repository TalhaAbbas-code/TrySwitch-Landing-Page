import React from "react";
import Image from "next/image";
import {
  footerLinks,
  socialIcons,
  footerBottomLinks,
} from "@/constants/footerLinks";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="  text-white pt-10 bg-white flex flex-col gap-10 pb-1  mt-10">
      <div className="w-full section-padding  flex flex-col md:flex-row justify-between  items-start max-sm:gap-10 max-sm:items-start max-sm:px-2  pb-8">
        <div className="flex flex-col gap-5">
          <div className="flex gap-2  ">
            <Image
              src="/images/logo.png"
              alt="TrySwitch"
              width={60}
              height={60}
              className=""
            />
            <Image
              src="/images/tryswitch.png"
              alt="TrySwitch"
              width={150}
              height={150}
              className=" object-contain"
            />
          </div>
          {/* Footer links  */}

          <div className="flex gap-10 text-base font-semibold text-black">
            {footerLinks.map((link, index) => (
              <a key={index} href={link.href} className="hover:underline">
                {link.label}
              </a>
            ))}
          </div>
          {/* Social  icons  */}
          <div className="flex gap-2 justify-between text-xl mt-4 text-black">
            {socialIcons.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link key={index} href={item.href}>
                  <Icon className="" />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="w-1/2 flex flex-col gap-5 max-sm:w-full">
          <h3 className="text-2xl mb-2 text-transparent bg-clip-text bg-gradient-primary-strong">
            
            Subscribe to get new updates & offers
          </h3>
          <form className="flex items-center border-2 border-gray-300 bg-white rounded-lg overflow-hidden w-full">
            <input
              type="email"
              placeholder="Enter your email address here"
              className="w-full px-4 py-2  text-black outline-none"
            />
            <button className="bg-white px-4 py-2 text-primaryBlue font-semibold">
              ➔
            </button>
          </form>
          <p className="text-md text-black mt-2">
            By checking this box, you agree to receive updates, news, and
            exclusive offers from us. You can unsubscribe at any time.
          </p>
        </div>
      </div>
      {/* Footer bottom links  */}
      <div className="flex section-padding justify-center items-center  text-black gap-3 lg:gap-10 mb-2 mt-4">
        {footerBottomLinks.map((item, index) => (
          <div key={index} className="flex items-center gap-3 lg:gap-10 ">
            <span>{item}</span>
            {index !== footerBottomLinks.length - 1 && (
              <div className="w-px h-5 bg-gray-300" />
            )}
          </div>
        ))}
      </div>

      <div className="text-xs py-4 bg-gradient-primary-strong text-center  text-black">
        <p className="text-lg mt-2">
          Copyright © 2024 TrySwitch, All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
