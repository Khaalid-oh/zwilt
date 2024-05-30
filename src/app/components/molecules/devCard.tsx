import React from "react";
import Image from "next/image";

const candidates = [
  {
    name: "Ruby Developer",
    location: "Redwood City, California",
    experience: "7 years experience",
    image: "/ruby.png",
    bgColor: "bg-pink-200",
  },
  {
    name: "System ops engineer",
    location: "Abu Dhabi, UAE",
    experience: "5 years experience",
    image: "/opseng.png",
    bgColor: "bg-green-200",
  },
  {
    name: "Another Developer",
    location: "New York, NY",
    experience: "3 years experience",
    image: "/vpardon.png",
    bgColor: "bg-purple-200",
  },
  {
    name: "Another Developer",
    location: "New York, NY",
    experience: "3 years experience",
    image: "/oops.png",
    bgColor: "bg-yellow-300",
  },
];

function FindYourStar() {
  return (
    <div className=" grid grid-cols-2">
      {candidates.map((candidate, i) => (
        <div
          key={i}
          className={`flex flex-col p-4 rounded-lg ${candidate.bgColor}`}
        >
          <div className="">
            <Image
              src={candidate.image}
              alt={candidate.name}
              width={360}
              height={180}
              className="rounded-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default FindYourStar;
