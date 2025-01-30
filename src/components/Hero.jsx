import React from "react";
import profileImage from "../assets/profile.png";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-16 min-h-screen  bg-gradient-to-r from-gray-700 to-gray-900"
    >
      <div className="container mx-auto px-20 py-20 relative z-10">
        <div className="flex flex-wrap justify-between items-center">
          {/* Left section: Text and Typewriter */}
          <div className="w-full md:w-7/12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hi There!{" "}
              <span role="img" aria-labelledby="wave" className="wave">
                👋🏻
              </span>
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              I'M <span className="text-blue-400">Madhushri Karekar</span>
            </h1>
            <p className="text-lg text-white mb-8">
              <Typewriter
                options={{
                  strings: [
                    "Software Developer",
                    "Java Full Stack Developer",
                    "MERN Stack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/madhushrikarekar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Madhushri1216"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Right section: Profile Image */}
          <div className="w-full md:w-5/12 mt-12 md:mt-0">
            <img
              src={profileImage}
              alt="Profile"
              className=""
              style={{ maxHeight: "450px", objectFit: "containe" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
