"use client";
import React, { ReactNode, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimatedSectionProps = {
  title: string;
  description: string;
  videoSrc: string;
  reverse?: boolean;
  children?: ReactNode;
};

const AnimatedSection = ({
  title,
  description,
  videoSrc,
  reverse = false,
  children,
}: AnimatedSectionProps) => {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(videoRef.current, {
        x: reverse ? 100 : -100,
        opacity: 0,
        duration: 4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 60%",
        },
      });
    });

    return () => ctx.revert();
  }, );

  return (
    <div
      className={`flex mt-10   max-sm:flex-col px-2 items-center justify-around h-[98%] ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      {/* Animate this div */}
      <div className={`w-1/2 max-sm:w-full  flex ${reverse?"justify-end":""} `}>
        <div ref={videoRef} className={`w-[90%] max-sm:w-full`}>
          <video width="100%" height="auto" autoPlay muted loop>
            <source src={videoSrc} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div
        className={`w-1/3 max-sm:w-full h-full flex flex-col justify-evenly`}
      >
        <div className="flex flex-col gap-16">
          <h1 className="text-primaryBlue text-4xl font-bold">{title}</h1>
          <p className="p-text">{description}</p>
        </div>

        <div className="flex justify-center gap-10 max-lg:flex-col">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AnimatedSection;
