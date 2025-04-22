"use client";
import { slides } from "@/constants/slides";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Carousell() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .fromTo(
        ".currentSlideInfo",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        0
      )
      .to(
        ".currentSlideInfo",
        {
          y: 20,
          opacity: 0,
          duration: 0.7,
        },
        4.2
      )
      .to(
        ".carouselContent",
        {
          x: `-${currentIndex * 100}%`,
          duration: 1,
          ease: "power2.inOut",
        },
        0
      );

    return () => {
      timeline.kill();
    };
  }, [currentIndex]);

  {/* text animation */}
useEffect(() => {
  const textEl = document.querySelector(".ticker-text") as HTMLElement | null;

  if (!textEl) return; 

  const width = textEl.scrollWidth;

  const ticker = gsap.fromTo(
    textEl,
    { x: window.innerWidth },
    {
      x: -width,
      duration: 12,
      ease: "linear",
      repeat: -1,
    }
  );

  return () => {
    ticker.kill(); 
  };
}, []);




  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className=" flex flex-col  overflow-hidden   h-[90vh] section-padding md:px-12">
      <h2 className="text-center  text-4xl font-bold text-orange-600 ">
        Features
      </h2>

      <div className="relative w-full my-10 overflow-hidden">
        <div className="ticker-text whitespace-nowrap  text-7xl font-semibold text-gray-300 px-4">
          TRYSWITCH-YOUR GATEWAY TO OFF-MARKET DEALS.
        </div>
      </div>

      <div className="flex  max-sm:flex-col  max-sm:px-5 max-sm:gap-5">
        <div className="w-1/2 max-sm:w-full flex flex-col items-center justify-between">
          {/* Current Slide Info */}
          <div className="currentSlideInfo ">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={slides[currentIndex].icon}
                alt="Icon"
                width={70}
                height={70}
              />
              <h3 className="text-2xl max-sm:text-xl font-bold text-primaryBlue uppercase">
                {slides[currentIndex].title}
              </h3>
            </div>
            <p className="text-gray-600 text-base leading-relaxed max-w-md">
              {slides[currentIndex].desc}
            </p>
          </div>

          {/* Dots for navigation */}
          <div className="flex justify-center max-sm:mt-10 md:mt-[30%] gap-3">
            {slides.map((_, index) => (
              <span
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 w-5 cursor-pointer rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-orange-500 w-8"
                    : "bg-gray-300 w-6"
                }`}
              ></span>
            ))}
          </div>
        </div>

        <div className="w-1/2 max-sm:w-full flex   ">
          <Carousel className="w-full max-w-6xl mx-auto overflow-hidden">
            <CarouselContent className="carouselContent flex ">
              {slides.map((slide, index) => (
                <CarouselItem
                  key={index}
                  className="flex-shrink-0 w-full  flex-col md:flex-row items-center justify-between gap-12 px-4 md:px-10"
                >
                  {/* Right */}
                  <div className=" flex justify-center">
                    <Image
                      src={slide.image}
                      alt="Slide Image"
                      width={350}
                      height={350}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
