"use client";
import Image from "next/image";
import React, { useState } from "react";
import Groove from "../atoms/groovet";
import Left from "../atoms/left";
import Right from "../atoms/right";
import Groover from "../atoms/groover";

const profiles = [
  {
    name: "Jason Makki",
    title: "Engineer at GROOVE",
    location: "San Francisco",
    image: "/jason.png",
  },
  {
    name: "Jane Doe",
    title: "Designer at GROOVE",
    location: "New York",
    image: "/jane.png",
  },
];

function SlantedSession() {
  const [currentProfile, setCurrentProfile] = useState(profiles[0]);
  return (
    <div className="slanted-background flex flex-col md:flex-row relative items-center justify-center h-auto md:h-[840px] text-white w-full -mt-[100px] p-4 py-8 md:py-0 md:p-0">
      <div className="absolute top-0 right-5 w-24 h-24 md:w-44 md:h-44">
        <Image src="/exclam.png" alt="exclam-image" fill />
      </div>
      <div className="w-full md:w-[88%] mt-10 md:mt-0 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-6 md:gap-8 text-center md:text-left">
          <div className="flex flex-col gap-0 md:gap-4 text-3xl md:text-6xl font-semibold">
            <h2 className="flex items-center">How it worked</h2>
            <h2 className="flex items-center justify-center md:justify-start">
              for {currentProfile.name}
              <span className="mx-2 md:mx-4">
                <Image
                  src={currentProfile.image}
                  alt="Person Icon"
                  width={57}
                  className="rounded-full"
                  height={57}
                />
              </span>
              at
            </h2>
            <h2>
              <Groove />
            </h2>
          </div>
          <p className="text-gray-300 text-base md:text-lg font-light">
            Zwilt enabled us to deliver on time and they’ve{" "}
            <br className="hidden md:block" /> been heavy hitters in our corner
            since.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <div className="flex items-center justify-center bg-white w-[50px] h-[50px] rounded-[20px]">
              <Left />
            </div>
            <div className="flex items-center justify-center bg-white w-[50px] h-[50px] rounded-[20px]">
              <Right />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start w-full md:w-[40%] gap-10">
          <div className="flex items-center gap-20 md:gap-4">
            <div className="flex w-[98px] h-[98px] pt-2 items-center justify-center bg-ppurple rounded-[40px]">
              <Groover />
            </div>
            <div className="text-gray-500 text-center md:text-left">
              <h3 className="text-white text-2xl font-medium">
                {currentProfile.name}
              </h3>
              <h4>{currentProfile.title}</h4>
              <h4>{currentProfile.location}</h4>
            </div>
          </div>
          <p className="max-w-96 text-gray-300 font-light text-center md:text-left">
            Zwilt enabled us to deliver on time and they’ve been heavy hitters
            in our corner since. Zwilt enabled us to deliver on time and they’ve
            been heavy hitters in our corner since. Zwilt enabled us to deliver
            on time and they’ve been heavy hitters.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SlantedSession;
