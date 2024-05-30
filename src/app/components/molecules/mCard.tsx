import Image from "next/image";
import React from "react";

const ITD = [
  { label: "Shopify Developer", image: "/shopify.png" },
  { label: "Magento Developer", image: "/magento.png" },
  { label: "Data Scientist", image: "/stack.png" },
  { label: "Webflow Developer", image: "/webdev.png" },
  { label: "Dot Not Developer", image: "/dotnet.png" },
  { label: "", image: "/vector.png" },
];
function Card() {
  return (
    <div className="w-[400px] md:w-[730px] h-[680px] md:h-[224px] rounded-lg flex flex-col justify-between items-center md:items-start gap-4 md:gap-0 bg-white p-4">
      <p className="font-medium">IT & Development</p>
      <div className="flex flex-col md:flex-row justify-evenly">
        {ITD.map((Ccard, i) => (
          <div className="flex flex-col gap-6 md:gap-3 items-center">
            <div
              className={`md:w-24 md:h-24 w-16 h-16 ${
                i === ITD.length - 1 ? "rounded-[30px]" : "rounded-full"
              } bg-gray-200 flex items-center justify-center`}
            >
              {
                <Image
                  alt="stack images"
                  height={40}
                  width={40}
                  src={Ccard.image}
                />
              }
            </div>
            <p className="text-center text-sm font-medium">{Ccard.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
