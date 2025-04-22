"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { navLinks } from "../../constants/navLinks";

const Nav = () => {
  const navLinksRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (navLinksRef.current) {
      const items = Array.from(navLinksRef.current.children);

      gsap.fromTo(
        items,
        {
          y: -30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        }
      );
    }
  }, []);

  return (
    <div className="bg-white section-padding">
      <div className="flex flex-row justify-between items-center">
        <div className="flex">
          <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
          <Image
            src="/images/tryswitch.png"
            alt="TrySwitch"
            width={100}
            height={90}
            className="object-contain max-md:hidden"
          />
        </div>

        {/* Nav links */}
        <div
          ref={navLinksRef}
          className="flex justify-between items-center max-sm:hidden text-primaryBlue max-md:text-xs lg:font-bold gap-2 lg:gap-10"
        >
          {navLinks.map((item, index) => (
            <a key={index} href={item.name}>
              {item.name}
            </a>
          ))}
          <button className="bg-red-500 px-4 py-1 rounded-lg text-white text-center text-base">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
