import React from "react";
import SkillHighlight from "./skillHighlight";
import Card from "./mCard";

function TopMarket() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className=" w-24px">
        <p className="text-xl font-medium">
          Find Dev and IT professionals <br /> to scale your business.
        </p>
        <SkillHighlight />
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
}

export default TopMarket;
