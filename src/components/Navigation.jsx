import React from "react";
import { Menu, X } from "lucide-react";

const Navigation = ({
  activeSection,
  isNavOpen,
  setIsNavOpen,
  scrollToSection,
}) => {
  const sections = [
    "home",
    "aboutMe",
    "skills",
    "education",
    "experience",
    "projects",
    "certificates",
    "resume",
    "contact",
  ];

  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <span className="text-xl font-bold">MK</span>

          <button
            className="md:hidden"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? <X /> : <Menu />}
          </button>

          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <button
                style={{ cursor: "pointer" }}
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize ${
                  activeSection === section
                    ? "text-blue-400 font-medium"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>

        <div className={`md:hidden ${isNavOpen ? "block" : "hidden"} pb-4`}>
          <div className="flex flex-col space-y-4">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize ${
                  activeSection === section
                    ? "text-blue-400 font-medium"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
