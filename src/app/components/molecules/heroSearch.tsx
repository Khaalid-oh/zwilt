import React from "react";
import ZwiltIcon from "../atoms/zwiltIcon";

function HeroSearch() {
  return (
    <div className="flex items-center justify-between w-full md:w-[570px] h-[74px] border-[1.5px] border-gray-300 rounded-2xl pl-4 md:pl-4 border-r-0 mx-4 md:mx-0">
      <label htmlFor="hero-search" className="text-sm md:text-[16px]">
        Looking for <span className="text-gray-400">design |</span>
      </label>
      <input
        className="h-full w-[30%] md:w-[55%] focus:outline-none"
        id="hero-search"
        placeholder=""
      />
      <button className="w-[74px] h-[74px] flex items-center justify-center bg-custom-yellow rounded-2xl">
        <ZwiltIcon />
      </button>
    </div>
  );
}

export default HeroSearch;
