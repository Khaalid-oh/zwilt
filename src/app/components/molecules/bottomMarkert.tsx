import React from "react";
import SkillHighlight from "./skillHighlight";
import Bcard from "./bCard";

function BottomMarket() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="">
        <p className="text-xl font-medium">
          Explore Creative individuals with a <br /> keen eye for detail.
        </p>
        <SkillHighlight />
      </div>
      <div>
        <Bcard />
      </div>
    </div>
  );
}

export default BottomMarket;
