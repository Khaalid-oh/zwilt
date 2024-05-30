import Image from "next/image";
import React from "react";

const ITX = [
  { label: "", image: "/vector-1.png" },
  { label: "UX Designer", image: "/figma.png" },
  { label: "Graphic Designer", image: "/ps.png" },
  { label: "Illustration Artist", image: "/illust.png" },
  { label: "Unreal Engine", image: "/unreal.png" },
  { label: "Cinema 4D", image: "/i4d.png" },
];
function Bcard() {
  return (
    <div className="w-[400px] md:w-[730px] h-[700px] md:h-[224px] rounded-lg flex flex-col justify-between items-center md:items-start gap-4 md:gap-0 bg-white p-4">
      <p className="font-medium">Design & Creative</p>
      <div className="flex flex-col md:flex-row md:gap-4 justify-between">
        {ITX.map((card, i) => (
          <div className="flex flex-col gap-6 md:gap-3 items-center">
            <div
              className={`md:w-24 md:h-24 w-16 h-16 ${
                i === 0 ? "rounded-3xl" : "rounded-full"
              } bg-gray-200 flex items-center justify-center`}
            >
              {
                <Image
                  alt="stack images"
                  height={40}
                  width={40}
                  src={card.image}
                />
              }
            </div>
            <p className="text-center text-sm font-medium">{card.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bcard;
