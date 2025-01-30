import React from "react";

const TimelineItem = ({ year, title, subtitle, description }) => {
  return (
    <div className="relative pl-8 timeline-dot mb-8 animate-slide-in">
      <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-blue-900/20 transition-shadow">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-100">{title}</h3>
            <p className="text-gray-400">{subtitle}</p>
            <p className="text-blue-400 font-medium">{description}</p>
          </div>
          <div className="mt-2 md:mt-0">
            <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
              {year}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
