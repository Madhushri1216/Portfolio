import React from "react";
import { ExternalLink } from "lucide-react";

const ProjectCard = ({ title, technologies, description, image, href }) => {
  return (
    <div className="group bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-blue-900/20 transition-all duration-300 animate-scale-in">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-100 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-gray-300 mb-4">{description}</p>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            View Project <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
