"use client";
import {slides} from '@/constants/slides'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Carousell() {
  const [currentIndex, setCurrentIndex] = useState(0);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 section-padding md:px-12 border  border-red-500 ">
      <h2 className="text-center text-3xl font-bold text-orange-600 mb-10">
        Features
      </h2>
      <div className="flex ">
        <div className="w-1/2 flex flex-col items-center justify-evenly">
          {/* Current Slide Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={slides[currentIndex].icon}
                alt="Icon"
                width={70}
                height={70}
              />
              <h3 className="text-2xl font-bold text-primaryBlue  uppercase">
                {slides[currentIndex].title}
              </h3>
            </div>
            <p className="text-gray-600 text-base leading-relaxed max-w-md">
              {slides[currentIndex].desc}
            </p>
          </div>

          {/* Dots for navigation */}
          <div className="flex justify-center mt-[30%] gap-3">
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

        <div className="w-1/2">
          <Carousel
            className="w-full max-w-6xl mx-auto overflow-hidden"
            opts={{ loop: true }}
          >
            <CarouselContent
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: "transform 0.6s ease-in-out",
                display: "flex",
              }}
            >
              {slides.map((slide, index) => (
                <CarouselItem
                  key={index}
                  className="flex-shrink-0 w-full flex flex-col md:flex-row items-center justify-between gap-12 px-4 md:px-10"
                >
                  {/* Left */}

                  {/* Right */}
                  <div className="flex-1 flex justify-center">
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

            {/* Dots */}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
