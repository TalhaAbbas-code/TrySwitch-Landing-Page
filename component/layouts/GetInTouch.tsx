"use client";
import React, { useRef, useEffect } from "react";
import ContactForm from "../ContactForm";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const GetInTouch = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        x: -200,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 40%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full section-padding py-10 ">
      <div className="flex max-sm:flex-col justify-between gap-10">
        <div
          ref={imageRef}
          className="relative max-sm:w-full w-[700px] h-[700px]"
        >
          <Image
            src="/images/home.png"
            alt="house"
            fill
            className="rounded-xl"
          />
        </div>

       
        <div className="w-1/2 max-sm:w-full flex flex-col">
          <h2 className="text-4xl font-bold">Let’s Get in Touch</h2>
          <p className="mt-2 text-xl mb-4">
            Get in touch with us at{" "}
            <span className="text-red-500 font-semibold">
              Team@tryswitch.io
            </span>
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
