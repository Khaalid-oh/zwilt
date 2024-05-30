import React from "react";
import WzwiltLogo from "../atoms/wzwilt-logo";
import Image from "next/image";

const sections = [
  {
    title: "Why choose Zwilt?",
    description:
      "We take complex hiring processes - and simplify them. Connecting you to the world’s highly qualified talent pool.",
    button: "Learn More",
    points: [],
    image: "/",
  },
  {
    title: "Onboard without the risk.",
    description: "",
    button: "Learn More",
    points: [
      "We pick the best for you to select.",
      "Thousands of vetted candidates in dozens of categories.",
      "Risk-free resource swapping for the best fit.",
    ],
    image: "/",
  },
  {
    title: "An open book.",
    description: "",
    button: "Learn More",
    points: [
      "Easy and transparent one-to-one chat with candidates.",
      "Simple and convenient payment methods.",
      "Review past ratings.",
    ],
    image: "/",
  },
  {
    title: "Stay in the loop.",
    description: "",
    button: "Learn More",
    points: [
      "Track your staff activity down to every minute with screenshots.",
      "Comprehensive timesheet data to process payments.",
      "Create projects to organize and assign tasks more effectively.",
    ],
    image: "/",
  },
];

function WhySection() {
  return (
    <div className="w-full bg-gradient-to-t from-[#D8D2FF]/50 flex flex-col md:flex-row items-center px-4 md:pl-20 py-16 -mt-12 space-y-8 md:space-y-0">
      <div className="flex flex-col gap-8 w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
          Why choose <br /> Zwilt?
        </h1>
        <p className="max-w-96 font-normal text-gray-600">
          We take complex hiring processes - and simplify them. Connecting you
          to the world’s highly qualified talent pool.
        </p>
      </div>
      <div className="boxShadow flex flex-col md:flex-row items-centery py-8 md:p-0 px-4 md:pl-8 shadow-md h-auto md:h-[652px] w-full md:w-[1300px] bg-white rounded-[20px] translate-x-0 md:translate-x-40">
        <div className="flex flex-col justify-around w-full md:w-1/2 h-full md:h-2/3 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Onboard without
            <br /> the risk.
          </h1>
          <div className="flex flex-col gap-2 text-[14px]">
            <div className="flex gap-2 items-center text-gray-600">
              <div className="w-4 h-1 rounded-md bg-purple-800"></div>
              <p className="max-w-96 font-normal text-gray-600">
                We pick the best for you to select
              </p>
            </div>
            <div className="flex gap-2 items-center text-gray-600">
              <div className="w-4 h-1 rounded-md bg-purple-800"></div>
              <p className="max-w-96 font-normal text-gray-600">
                Thousands of vetted in dozens of categories.
              </p>
            </div>
            <div className="flex gap-2 items-center text-gray-600">
              <div className="w-4 h-1 rounded-md bg-purple-800"></div>
              <p className="max-w-96 font-normal text-gray-600">
                Risk-free resource swapping for the best fit.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2 md:text-lg text-md">
            <div className="flex items-center justify-center w-[50px] h-[50px] md:w-[74px] md:h-[74px] rounded-[16px] md:rounded-[30px] bg-gray-900 mt-4 md:mt-0">
              <WzwiltLogo />
            </div>
            <h2 className="pt-4">Explore More</h2>
          </div>
        </div>
        <div className="flex items-center justify-center w-full md:w-auto mt-8 md:mt-0">
          <Image
            alt="otherside"
            src="/otherside.png"
            height={560}
            width={650}
            className="w-full md:w-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default WhySection;
