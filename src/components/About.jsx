import React from "react";
import myImg from "../assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="pt-16">
      <div className="container mx-auto px-6">
        {/* First Row: About me section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/3 text-center mb-8 md:mb-0">
            <Tilt>
              <img src={myImg} className="rounded-lg shadow-lg" alt="avatar" />
            </Tilt>
          </div>
          <div className="md:w-2/3 text-center md:text-left mb-8 md:mb-0 px-20">
            <h1 className="text-3xl md:text-4xl font-bold">
              LET ME <span className="text-blue-400"> INTRODUCE </span> MYSELF
            </h1>
            <p className="text-lg mt-6">
              I fell in love with programming when i started my BCA
            </p>
            <br />
            <p className="text-lg">
              I am fluent in classics like{" "}
              <strong className="text-blue-400">
                Java, JavaScript, and Spring Boot
              </strong>
            </p>
            <br />
            <p className="text-lg">
              My field of interest lies in building new &nbsp;
              <strong className="text-blue-400">
                Web Technologies and Products
              </strong>{" "}
              and I am also exploring areas related to{" "}
              <strong className="text-blue-400">
                Full-Stack Development and Responsive Design.
              </strong>
            </p>
            <br />
            <p className="text-lg">
              Whenever possible, I also apply my passion for developing products
              with <strong className="text-blue-400">Node.js</strong> and{" "}
              <strong className="text-blue-400">
                Modern Javascript Libraries and Frameworks
              </strong>{" "}
              like <strong className="text-blue-400">React.js</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
