import Image from "next/image";
import React from "react";
import Buttonz from "../atoms/button";

export default function Journey() {
  return (
    <div className="w-full md:w-[90%] mt-10 md:mt-16 flex flex-col -space-y-8 md:space-y-12 px-4 md:px-0">
      <h2 className="text-center text-3xl md:text-[3.375rem] font-bold mb-8 md:mb-6">
        Start your journey today.
      </h2>

      <div className="slanted-both flex flex-col md:flex-row justify-between items-center bg-[#EDEFFF] px-6 py-8 md:py-0">
        <div className="flex flex-col gap-8 items-center md:items-start">
          <div className="flex gap-5 items-center">
            <span className="h-fit bg-clip-text text-transparent bg-gradient-to-b from-[#A387D1] to-[#D1C4E275] font-semibold text-6xl md:text-8xl">
              1
            </span>
            <div className="max-w-md text-center md:text-left">
              <h3 className="font-semibold text-2xl md:text-[34px] leading-tight md:leading-[44px] md:mt-0 mt-20">
                Find your next star performer.
              </h3>
              <p className="mt-5 font-light text-gray-600">
                Explore the vast Zwilt marketplace to find the candidate that
                meets your needs.
              </p>
            </div>
          </div>
          <div className="ml-0 md:ml-20">
            <Buttonz />
          </div>
        </div>

        <div className="flex items-center justify-center mt-8 md:mt-0">
          <Image src="/group.png" alt="group" width={500} height={500} />
        </div>
      </div>

      <div className="slanted-both flex flex-col md:flex-row justify-between items-center bg-[#FFF7E1] px-6 py-8 md:py-0">
        <div className="flex flex-col gap-8 items-center md:items-start">
          <div className="flex gap-5 items-center">
            <span className="h-fit bg-clip-text text-transparent bg-gradient-to-b from-[#FFBE2EC2] to-[#FFBE2E00] font-semibold text-6xl md:text-8xl">
              2
            </span>
            <div className="max-w-md text-center md:text-left">
              <h3 className="font-semibold text-2xl md:text-[34px] leading-tight md:leading-[44px] md:mt-0 mt-20">
                Evaluate to your heart’s content.
              </h3>
              <p className="mt-5 font-light text-gray-600">
                Assess the candidate through work history, transparent{" "}
                <br className="hidden md:block" /> tests and video interviews.
              </p>
            </div>
          </div>
          <div className="ml-0 md:ml-20">
            <Buttonz />
          </div>
        </div>
        <div className="flex items-center justify-center mt-8 md:mt-0">
          <Image src="/group2.png" alt="group" width={500} height={500} />
        </div>
      </div>

      <div className="slanted-both flex flex-col md:flex-row justify-between items-center bg-[#F3F3F3] px-6 py-8 md:py-0">
        <div className="flex flex-col gap-8 items-center md:items-start">
          <div className="flex gap-5 items-center">
            <span className="h-fit bg-clip-text text-transparent bg-gradient-to-b from-black/80 to-black/15 font-semibold text-6xl md:text-8xl">
              3
            </span>
            <div className="max-w-md text-center md:text-left">
              <h3 className="font-semibold text-2xl md:text-[34px] leading-tight md:leading-[44px] md:mt-0 mt-20">
                Start building your team.
              </h3>
              <p className="mt-5 font-light text-gray-600">
                Onboard your candidate right away and start{" "}
                <br className="hidden md:block" /> creating the next big thing.
              </p>
            </div>
          </div>
          <div className="ml-0 md:ml-20">
            <Buttonz />
          </div>
        </div>
        <div className="flex items-center justify-center mt-8 md:mt-0">
          <Image src="/group3.png" alt="group 3" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}
