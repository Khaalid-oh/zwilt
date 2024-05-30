import React from "react";
import Image from "next/image";
import HeroBSection from "./heroBSection";
import HeroSearch from "../molecules/heroSearch";

function Hero() {
  return (
    <div className="flex flex-col items-center mt-2 md:mt-10  space-y-12 w-full px-4 md:px-0">
      <div className="flex flex-col items-center justify-center text-center bg-white">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 w-full md:w-[60%]">
          Finding the right fit
          <span className="inline-block align-middle ml-[1.5px]">
            <Image
              src="/Gif_1.gif"
              alt="Person gif"
              width={68}
              height={43}
              quality={100}
              className="rounded-full"
            />
          </span>
          has never been easier.
        </h1>
        <p className="text-sm md:text-lg text-gray-500 w-full md:w-1/2 px-4 md:px-0">
          With our rigorous pre-vetting process, you'll never have to worry
          about finding the ideal candidate ever again.
        </p>
      </div>
      <HeroSearch />
      <HeroBSection />
    </div>
  );
}

export default Hero;
