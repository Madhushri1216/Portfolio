import React, { useState, useEffect } from "react";
import "./App.css";
import bookStore from "./assets/project-img/book-store.png";
import simonSays from "./assets/project-img/simon.png";
import weather from "./assets/project-img/weather.png";
import quest from "./assets/project-img/internship.jpg";

import {
  FileText,
  Download,
  Mail,
  Phone,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import SkillCard from "./components/SkillCard";
import TimelineItem from "./components/TimelineItem";
import ProjectCard from "./components/ProjectCard";
import About from "./components/About";
import resume from "./assets/Resume/Madhushri_Karekar.pdf";
import resumePreview from "./assets/Resume/Madhushri_Karekar.png";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = [
    "Software Developer",
    "MERN Stack Developer",
    "Java Full Stack Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop - 200 &&
          window.scrollY < sectionTop + sectionHeight - 200
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsNavOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navigation
        activeSection={activeSection}
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        scrollToSection={scrollToSection}
      />

      <Hero titles={titles} titleIndex={titleIndex} />

      <main className="container mx-auto px-6 py-12">
        {/* About me Section */}
        <section section id="aboutMe" className="mb-20 scroll-mt-20">
          {" "}
          <About />
        </section>
        {/* Skills Section */}
        <section id="skills" className="mb-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-gray-100">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard
              title="Languages & Frameworks"
              skills={[
                "Java",
                "Python",
                "Spring Boot",
                "Hibernate",
                "Angular",
                "HTML5",
                "CSS3",
                "JavaScript (ES6+)",
                "Bootstrap",
              ]}
            />
            <SkillCard
              title="Web Development"
              skills={[
                "MERN Stack",
                "REST API",
                "Responsive Design",
                "Performance Optimization",
              ]}
            />
            <SkillCard
              title="Tools & Platforms"
              skills={[
                "Data Analytics",
                "GitHub",
                "Postman",
                "Render (Deployment)",
              ]}
            />
            <SkillCard
              title="Databases"
              skills={["MySQL", "MongoDB", "PostgreSQL"]}
            />
          </div>
        </section>
        {/* Education Section */}
        <section id="education" className="mb-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-gray-100">Education</h2>
          <div className="relative timeline-line">
            <TimelineItem
              year="2023-2024"
              title="Master of Computer Application"
              subtitle="Jain College of Engineering, Belgavi"
              description="CGPA: 9.12"
            />
            <TimelineItem
              year="2019-2022"
              title="Bachelor of Computer Applications"
              subtitle="GSS BCA College, Belgavi"
              description="Percentage: 88.61%"
            />
            <TimelineItem
              year="2017-2019"
              title="XII"
              subtitle="Jain PU College, Belgavi"
              description="Percentage: 89%"
            />
          </div>
        </section>
        {/* Experience Section */}
        <section id="experience" className="mb-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-gray-100">
            Professional Experience
          </h2>
          <div className="relative timeline-line">
            <div className="relative pl-8 timeline-dot mb-8 animate-slide-in">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-blue-900/20 transition-shadow">
                <h3 className="text-xl font-semibold mb-2">
                  Java Full Stack (Intern)
                </h3>
                <p className="text-blue-400 mb-4">
                  Crinsun Technology | hubli | Sep 2024 - Jan 2025
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-1 text-blue-400" />
                    <span>
                      Gained expertise in Java full-stack development, including
                      Spring Boot, Hibernate, and Angular, to build and deploy
                      dynamic web applications.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-1 text-blue-400" />
                    <span>
                      Successfully contributed to a live project, "Quest," an
                      alumni portal for an international school, ensuring
                      efficient database interaction and a user-friendly UI.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-1 text-blue-400" />
                    <span>
                      Learned collaboration in a professional environment,
                      working with cross-functional teams, handling code
                      reviews, version control (Git), and Agile methodologies.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-1 text-blue-400" />
                    <span>
                      Developed communication and teamwork skills, effectively
                      interacting with senior developers, taking feedback
                      constructively, and adapting to industry best practices.
                    </span>
                  </li>
                </ul>
                <br />
                <a
                  href="https://cdn.unstop.com/uploads/user-project-files/679b285c74f19_crinsun_technology_internship_experience_certificate_mdhushree_pdf_other.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Crinsun Technology -Internship Experience Certificate{" "}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
          <div className="relative timeline-line">
            <div className="relative pl-8 timeline-dot mb-8 animate-slide-in">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-blue-900/20 transition-shadow">
                <h3 className="text-xl font-semibold mb-2">
                  Web Developer (Intership)
                </h3>
                <p className="text-blue-400 mb-4">
                  Infynow Software Solutions LLP | Belgaum | Feb 2022 - May 2022
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-1 text-blue-400" />
                    <span>
                      Developed a web application using Python under the
                      mentorship of a senior software developer and team.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-1 text-blue-400" />
                    <span>
                      Successfully completed all assigned tasks, showcasing
                      strong problem-solving and coding skills.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-1 text-blue-400" />
                    <span>
                      Collaborated with the team to implement key project
                      features and enhance functionality.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-1 text-blue-400" />
                    <span>
                      Demonstrated excellent teamwork and adaptability in a
                      professional environment.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-1 text-blue-400" />
                    <span>
                      Gained hands-on experience in software development and
                      learned best industry practices.
                    </span>
                  </li>
                </ul>
                <br />
                <a
                  href="https://cdn.unstop.com/uploads/user-project-files/679b2c0645ea1_madhushri_n_karekar_pdf_other.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Infynow Software Solution LLP - Certificate of Internship{" "}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Projects Section */}
        <section id="projects" className="mb-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-gray-100">
            Featured Projects
            <br />
            <span style={{ fontSize: "1rem" }}>My Top Projects....</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="WonderLust (MERN Stack) 🏡"
              technologies={[
                "MERN Stack",
                "Cloudinary",
                "Mongoose",
                "Mongo Atlas",
                "REST API",
                "Authentication",
                "GitHub",
                "Responsive Design",
              ]}
              description="Accommodation Booking Platform – A MERN stack web app for listing, discovering, and booking stays. Features user authentication, dynamic search, and file uploads. Optimized performance (20% faster load time) and ensured a seamless UI/UX."
              image={wonderlust}
              href="https://github.com/Madhushri1216/WonderLust"
            />
            <ProjectCard
              title="Book Store (MERN Stack) 📚"
              technologies={[
                "Node.js",
                "Express.js",
                "MongoDB",
                "Mongoose",
                "React.js",
                "Vite",
                "Tailwind CSS",
                "REST API",
              ]}
              description="Full-Stack Book Management App – Built a MERN stack app for managing books with CRUD operations, React Router, and Tailwind CSS for UI. Features Express Router, CORS handling, and modals for enhanced UX."
              image={bookStore}
              href="https://github.com/Madhushri1216/Book-Store-MERN"
            />
            <ProjectCard
              title="Simon Says Game 🎮"
              technologies={[
                "HTML5",
                "CSS3",
                "JavaScript",
                "DOM Manipulation",
                "Event Handling",
                "CSS Animations",
              ]}
              description="Simon Says Game – A fun, interactive memory game built with HTML, CSS, and JavaScript. Features dynamic level progression, user input validation, and visual feedback to enhance gameplay."
              image={simonSays}
              href="https://github.com/Madhushri1216/simon-says-game"
            />
            <ProjectCard
              title="WeatherApp 🌤️"
              technologies={[
                "React.js",
                "Vite",
                "Material-UI",
                "Styled-Components",
                "OpenWeather",
              ]}
              description="A minimal weather forecasting app built with React.js and Material-UI. It allows users to search for locations and get real-time weather updates."
              image={weather}
              href="https://github.com/Madhushri1216/Weather-App-React"
            />
            <ProjectCard
              title="Quest | Alumni Portal (Spring Boot & Angular) 🏫"
              technologies={[
                "Spring Boot",
                "Angular",
                "REST API",
                "PostgreSQL",
                "GitLab",
                "Internship",
                "Live Project",
              ]}
              description="Built an alumni portal for an international school in 1.5 months, featuring authentication, profile, and event management. Used Spring Boot with PostgreSQL for secure data handling and Angular with Bootstrap for responsiveness."
              image={quest}
            />
          </div>
        </section>
        {/* Certificates Section */}
        <section id="certificates" className="mb-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-gray-100">
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-blue-900/20 transition-all duration-300 animate-scale-in">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    Data Analytics and Visualization - Accenture
                  </h3>
                  <p className="text-gray-400">Accenture forage</p>
                  <p>
                    This certificate validates proficiency in data analysis and
                    visualization, including data collection, cleaning,
                    analysis, and visualization using various tools. The holder
                    can effectively communicate insights to support data-driven
                    decision-making.
                  </p>
                  <ul>
                    <li>Data Collection & Cleaning</li>
                    <li>Data Analysis</li>
                    <li>Data Visualization</li>
                    <li>Communication of Insights</li>
                  </ul>
                </div>
              </div>
              <br />
              <a
                href="https://drive.google.com/file/d/1TOxAgfOHd6rMQxU_LDZEZtzMXlY5tCft/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Certificate <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
            <div className="group bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-blue-900/20 transition-all duration-300 animate-scale-in">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    Software Testing
                  </h3>
                  <p className="text-gray-400">NPTEL Swayam</p>
                  <p>
                    This certificate validates proficiency in software testing
                    methodologies, ensuring software quality and reliability.
                  </p>
                  <ul>
                    <li>
                      Testing Techniques - Black-box and white-box testing
                      methods.
                    </li>
                    <li>
                      Test Case Design - Creating structured test cases for
                      various scenarios.
                    </li>
                    <li>
                      Defect Management - Identifying, reporting, and tracking
                      software defects.
                    </li>
                    <li>
                      Testing Tools & Techniques Familiarity with various tools
                      used in software testing.
                    </li>
                  </ul>
                </div>
              </div>
              <br />
              <a
                href="https://drive.google.com/file/d/1UxaC7g-FmqF_dLcWWpBFF0v60nl8qodq/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Certificate <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
            <div className="group bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-blue-900/20 transition-all duration-300 animate-scale-in">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    Full Stack Web Development(MERN Stack)
                  </h3>
                  <p className="text-gray-400">Apna College</p>
                  <p>
                    This certificate demonstrates my proficiency in developing
                    full-stack web applications using the MERN stack.
                  </p>
                  <ul>
                    <li>
                      MongoDB: Expertise in NoSQL database management and data
                      modeling.
                    </li>
                    <li>
                      Express.js: Proficient in building backend APIs and
                      server-side logic.
                    </li>
                    <li>
                      React.js: Skilled in developing dynamic, responsive UIs
                      and single-page applications.
                    </li>
                    <li>
                      Node.js: Experienced in server-side development and
                      handling asynchronous operations.
                    </li>
                    <li>
                      Deployment: Knowledge of deploying applications using
                      cloud platforms and version control.
                    </li>
                  </ul>
                </div>
              </div>
              <br />
              <a
                href="https://drive.google.com/file/d/1uRnyEOXBaGYUA50CkaVpBD2112Vt6Rl8/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Certificate <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </section>
        {/* Resume Section */}
        <section id="resume" className="mb-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-100">My Resume</h2>

          {/* Resume Viewer */}
          <div className="mb-8">
            <p className="text-gray-400 mb-4">
              You can view my resume below or download it by clicking the
              button.
            </p>
            {/* Download Resume Button */}
            <a
              href={resume}
              download="Madhushri_Karekar_Resume.pdf"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors mb-5"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </a>

            {/* Thumbnail of Resume */}
            <div className="relative overflow-hidden rounded-lg shadow-md mb-4">
              <img
                src={resumePreview}
                alt="Resume Preview"
                className="w-3/4 h-auto mx-auto border-2 border-gray-600"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-gray-800 text-gray-200 p-12 scroll-mt-20"
      >
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <p>
              I am actively exploring job opportunities and would love to
              connect. If you're looking for a dedicated and skilled
              professional for your team or have any job openings, please feel
              free to reach out. Looking forward to discussing potential
              opportunities with you!
            </p>
          </div>
          <div>
            <ul>
              <li className="flex items-center mb-4">
                <Mail className="w-6 h-6 mr-4 text-blue-400" />
                <a
                  href="mailto:madhushrikarekar16@gmail.com"
                  className="text-blue-400 hover:underline"
                >
                  madhushrikarekar16@gmail.com
                </a>
              </li>
              <li className="flex items-center mb-4">
                <Phone className="w-6 h-6 mr-4 text-blue-400" />
                <span className="text-blue-400">+91 6366718028</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
