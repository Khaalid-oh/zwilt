import React from "react";
import WzwiltLogo from "./wzwilt-logo";

function Buttonz() {
  return (
    <div className="flex items-center gap-4">
      <button className="flex items-center justify-center h-[50px] w-[50px] bg-gray-900 rounded-[20px]">
        <WzwiltLogo />
      </button>
      Join Now
    </div>
  );
}

export default Buttonz;
