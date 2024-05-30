import React from "react";
import WzwiltLogo from "../atoms/wzwilt-logo";

function XpMore() {
  return (
    <div className="flex text-sm md:text-[16px] mb-4 md:mb-0 items-center justify-between w-[90%] md:w-[60.5%]">
      <div className="flex items-center gap-2 text-sm md:text-lg">
        <div className="flex items-center justify-center w-[60px] h-[60px] md:w-[74px] md:h-[74px] rounded-[30px] bg-gray-900">
          <WzwiltLogo />
        </div>
        Explore More
      </div>
      <p className="text-gray-800 font-semibold text-sm md:text-[16px]">
        30 more <span className="text-gray-500 font-normal">to explore</span>
      </p>
    </div>
  );
}

export default XpMore;
