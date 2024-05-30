import React from "react";
import SkillIcon from "../atoms/skillIcon";
import CategoryIcon from "../atoms/scategoryIcon";
import PeopleStarIcon from "../atoms/peopleStarIcon";

function SkillHighlight() {
  const skillsList = [
    { id: 0, label: "989 Skills", icon: <SkillIcon /> },
    { id: 1, label: "45 Sub-Categories", icon: <CategoryIcon /> },
    { id: 2, label: "1011 Profiles", icon: <PeopleStarIcon /> },
  ];
  return (
    <div className="grid grid-cols-2 w-[360px] md:w-[400px] h-28">
      {skillsList.map((skill, i) => (
        <div
          key={i}
          className="flex items-center justify-start text-gray-700 font-light gap-3"
        >
          {skill.icon}
          <span>{skill.label}</span>
        </div>
      ))}
    </div>
  );
}

export default SkillHighlight;
