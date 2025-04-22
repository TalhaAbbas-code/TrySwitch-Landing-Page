"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const FeatureCard = ({
  title,
  description,
  image,
  bg,
  reverse,
}: {
  title: string;
  description: string;
  image: string;
  bg: string;
  reverse: boolean;
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 60%",
        },
      });

      tl.from(cardRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          imageRef.current,
          {
            y: reverse ? 50 : -50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.1"
        )
        .from(
          headingRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.4,
          },
          "-=0.1"
        )
        .from(paragraphRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.4,
        });
    }, cardRef);

    return () => ctx.revert();
  });

  return (
    <div
      ref={cardRef}
      className={`rounded-3xl px-5 py-5 bg-cover bg-center flex flex-col ${
        reverse ? "flex-col-reverse" : ""
      } items-center justify-between text-center`}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Image
        ref={imageRef}
        src={image}
        alt={title}
        width={200}
        height={300}
        className="rounded-xl object-contain"
      />
      <div>
        <h3 ref={headingRef} className="text-xl font-semibold mb-2">
          {title}
        </h3>
        <p ref={paragraphRef} className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};
