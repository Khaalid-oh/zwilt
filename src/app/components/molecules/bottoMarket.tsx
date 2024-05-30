import React from "react";
import Image from "next/image";
import TopMarket from "../molecules/topMarket";
import Card from "../molecules/mCard";

function MarketPlace() {
  return (
    <div className="flex items-center relative w-full">
      <Image
        src="/Union.png"
        quality={100}
        height={132}
        width={2000}
        alt="union stripe background"
      />
      <div className="clipped-background h-[1130px] w-full flex justify-center absolute top-28 pt-40">
        <div className="flex flex-col items-center">
          <p className="font-bold text-5xl w-[44%] h-40 text-center">
            Your one-stop marketplace for finding the talent your business
            needs.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between w-[90%]">
            <TopMarket />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketPlace;
