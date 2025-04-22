"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Community = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const paraRef = useRef(null);
  const imgRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
        },
      });

      tl.from(titleRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          paraRef.current,
          {
            x: -100,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .from(
          imgRef.current,
          {
            x: 100,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .from(
          btnRef.current,
          {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=1.6"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex section-padding max-sm:flex-col px-2 mt-10 items-center justify-around h-[98vh] "
    >
      <div className="w-1/2 max-sm:w-full h-full flex flex-col gap-5 justify-evenly">
        <div className="flex flex-col gap-10">
          <h1 ref={titleRef} className="text-primaryBlue text-5xl font-bold">
            Join Our Community
          </h1>
          <p ref={paraRef} className="max-sm:w-full w-[80%] p-text">
            Beneath the quiet glow of the evening sky, the world seemed to pause
            in a moment of calm. Trees swayed gently as if whispering secrets to
            the wind. A distant dog barked, breaking the stillness with a touch
            of life. Everything felt both familiar and strangely magical, like a
            memory you can almost remember.
          </p>
        </div>
        <button
          ref={btnRef}
          className="bg-orange-600 px-10 py-2 md:mt-10 rounded-md max-w-40 font-semibold text-white text-center"
        >
          Subscribe
        </button>
      </div>
      <div ref={imgRef} className="w-1/3 max-sm:h-1/2 max-sm:w-full">
        <Image
          src="/images/Frame.png"
          alt="Dynamic Image"
          className="w-full h-full mt-10"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default Community;
