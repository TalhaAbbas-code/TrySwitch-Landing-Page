"use client";

import React, { useEffect, useRef, useState } from "react";
import DownloadButton from "../DownloadButton";
import gsap from "gsap";

const Hero = () => {
  const headingRef = useRef<HTMLParagraphElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  const totalFrames = 150;
  const [currentFrame, setCurrentFrame] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // preload imgs
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i <= totalFrames; i++) {
      const frameNum = String(i).padStart(4, "0");
      const img = new Image();
      img.src = `/images/sequence/${frameNum}.png`;

      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames + 1) {
          setImagesLoaded(true);
        }
      };

      images.push(img);
    }

  }, []);
 useEffect(() => {
   const tl = gsap.timeline();

   tl.fromTo(
     headingRef.current,
     { x: -100, opacity: 0 },
     { x: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
   )
   .fromTo(
     buttonRef.current,
     { x: -50, opacity: 0 },
     { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
     "-=0.3" 
   );
 }, []);
 //start animation after imgs are loaded
  useEffect(() => {
    if (!imagesLoaded) return;

    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      if (frame > totalFrames) {
        clearInterval(interval);
      } else {
        setCurrentFrame(frame);
      }
    }, 20); 
    return () => clearInterval(interval);
  }, [imagesLoaded]);

 
  return (
    <div className="section-padding  flex">
      <div className="px-[3%] mt-10 max-sm:h-auto flex max-sm:flex-col mb-[5%] w-full bg-gradient-primary rounded-md h-[70vh]">
        <div className="w-[60%] max-sm:w-full max-sm:mt-10 flex flex-col justify-evenly">
          <p
            ref={headingRef}
            className="lg:text-7xl text-5xl max-sm:text-5xl leading-normal font-bold"
          >
            The all-in-one app for off-market deals
          </p>
          <div ref={buttonRef} className="flex gap-10 max-lg:flex-col">
            <DownloadButton />
          </div>
        </div>

        <div className="w-1/2 max-sm:w-full">
          {imagesLoaded ? (
            <img
              src={`/images/sequence/${String(currentFrame).padStart(
                4,
                "0"
              )}.png`}
              alt={`frame-${currentFrame}`}
              className="w-full h-full mt-5 md:mt-10 lg:ml-20"
            />
          ) : (
            <p className="mt-10 text-center">Loading animation...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
