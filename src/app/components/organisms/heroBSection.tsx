"use client";

import { clsx } from "clsx";
import React, { useState } from "react";

const ITSkills = [
  "Python Developer",
  "Shopify Developer",
  "MERN Stack Developer",
  "Full Stack Developer",
];
const CreativeSkills = [
  "Data Scientist",
  "Front End Developer",
  "Shopify Developer",
  "Python Developer",
];

const MoreSkills = [
  "Shopify Developer",
  "Python Developer",
  "Full Stack Developer",
  "Explore More",
];

function HeroBSection() {
  const [activeTab, setActiveTab] = useState("IT & Development");

  return (
    <div className="flex flex-col justify-evenly items-center bg-bgcard w-full md:w-[60%] h-auto md:h-[230px] rounded-2xl p-4 md:p-0 md:pl-20 gap-4 md:gap-0">
      <div className="flex items-center w-full md:w-[344px] bg-gray-200 rounded-2xl h-12 gap-[6px] text-gray-700 transition-all">
        <button
          onClick={() => setActiveTab("IT & Development")}
          className={clsx("md:p-3 px-6 rounded-2xl", {
            "text-gray-900 md:font-semibold text-[16px] md:text-normal bg-light-green transition-all":
              activeTab === "IT & Development",
          })}
        >
          IT & Development
        </button>
        <button
          onClick={() => setActiveTab("Design and Creative")}
          className={clsx("md:p-3 px-6 rounded-2xl", {
            "text-gray-900 md:font-semibold text-[16px] md:text-normal bg-light-green transition-all":
              activeTab === "Design and Creative",
          })}
        >
          Design and Creative
        </button>
      </div>
      {activeTab === "IT & Development" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-28 font-light w-full">
          <div>
            {ITSkills.map((skill, index) => (
              <p
                key={index}
                className={`text-gray-400 py-[5px] ${
                  skill === "MERN Stack Developer"
                    ? "font-semibold text-gray-800"
                    : ""
                }`}
              >
                {skill}
              </p>
            ))}
          </div>
          <div>
            {CreativeSkills.map((cskill, i) => (
              <p className="text-gray-400 py-[5px]" key={i}>
                {cskill}
              </p>
            ))}
          </div>
          <div>
            {MoreSkills.map((mskill, index) => (
              <p
                key={index}
                className={`text-gray-400 py-[5px] ${
                  mskill === "Explore More" ? "font-semibold text-gray-800" : ""
                }`}
              >
                {mskill}
              </p>
            ))}
          </div>
        </div>
      )}
      {activeTab === "Design and Creative" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-24 font-light w-full">
          <div>
            {CreativeSkills.map((cskill, i) => (
              <p className="text-gray-400 py-[5px]" key={i}>
                {cskill}
              </p>
            ))}
          </div>
          <div>
            {ITSkills.map((skill, index) => (
              <p
                key={index}
                className={`text-gray-400 py-[5px] ${
                  skill === "MERN Stack Developer"
                    ? "font-semibold text-gray-800"
                    : ""
                }`}
              >
                {skill}
              </p>
            ))}
          </div>
          <div>
            {MoreSkills.map((mskill, index) => (
              <p
                key={index}
                className={`text-gray-400 py-[5px] ${
                  mskill === "Explore More" ? "font-semibold text-gray-800" : ""
                }`}
              >
                {mskill}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default HeroBSection;
