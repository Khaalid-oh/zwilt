import Image from "next/image";
import React from "react";

function StripeBg() {
  return (
    <div>
      <Image
        src="/Union.png"
        quality={100}
        height={132}
        width={2000}
        alt="union stripe background"
      />
    </div>
  );
}

export default StripeBg;
