import React from "react";
import PlayWhite from "../atoms/playWrite";
import PlayBlack from "../atoms/playBlack";

const candidateStep = [
  {
    step: "Step 1",
    context: "Resume Screening",
    description: "",
    icon: <PlayBlack />,
  },
  {
    step: "Step 2",
    context: "Video Interview",
    description:
      "Candidates are assessed through skill-based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
    icon: <PlayWhite />,
  },
  {
    step: "Step 3",
    context: "Technical Evaluation",
    description: "",
    icon: <PlayBlack />,
  },
  {
    step: "Step 4",
    context: "Application Review",
    description: "",
    icon: <PlayBlack />,
  },
  {
    step: "Step 5",
    context: "Let's get to work",
    description: "",
    icon: <PlayBlack />,
  },
];

function FourthSection() {
  return (
    <div className="flex flex-col w-full md:w-[90%] gap-8 px-4 md:px-0">
      <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left">
        How we ensure you’re <br className="hidden md:block" /> in good hands.
      </h1>
      <p className="text-gray-700 font-light text-center md:text-left">
        With our comprehensive screening process, we hand-pick highly{" "}
        <br className="hidden md:block" />
        skilled candidates so you can onboard them in a matter of days.
      </p>
      <div className="flex flex-col gap-2">
        {candidateStep.map((step, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-start md:items-center justify-center md:justify-start gap-4 border-[1px] border-gray-200 rounded-md w-full md:w-[635px] h-auto px-4 py-2 ${
              step.description ? "shadow-xl" : "shadow-sm"
            }`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`flex items-center justify-center rounded-full p-4 md:p-6 ${
                  i === 1 ? "bg-purple-300" : "bg-gray-200"
                }`}
              >
                {step.icon}
              </div>
              <div className="flex flex-col gap-2">
                <p className="flex font-bold text-gray-700 gap-1">
                  {step.step}:
                  <span className="font-normal">{step.context}</span>
                </p>
              </div>
            </div>
            {/* {step.description && (
              <p className="text-gray-600 text-md mt-2 md:mt-0 md:ml-4">
                {step.description}
              </p>
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FourthSection;
