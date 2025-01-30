import React from "react";
import { ChevronRight } from "lucide-react";

const SkillCard = ({ title, skills }) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-blue-900/20 transition-all duration-300 animate-scale-in">
      <h3 className="text-xl font-semibold mb-4 text-gray-100">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <ChevronRight className="w-4 h-4 mr-2 text-blue-400" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
