import React from "react";
import Image from "next/image";
import TopMarket from "../molecules/topMarket";
import BottomMarket from "../molecules/bottomMarkert";
import XpMore from "../molecules/xpMore";
import StripeBg from "../atoms/stripe-bg";
import SlantedSession from "./slantedSession";

function MarketPlace() {
  return (
    <div className="flex flex-col items-center w-full ">
      <div className="hidden md:block">
        <StripeBg />
      </div>
      <div className="clipped-background md:-mt-10 h-auto w-full py-20 flex justify-center">
        <div className="flex flex-col items-center mt-10 gap-14">
          <p className="font-bold text-3xl md:text-5xl w-[90%] md:w-[55%] h-40 text-center">
            Your one-stop marketplace for finding the talent your business
            needs.
          </p>
          <div className="flex w-[90%] flex-col gap-10">
            <TopMarket />
            <BottomMarket />
            <XpMore />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketPlace;
