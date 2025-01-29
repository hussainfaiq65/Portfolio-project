import React from "react";
import { FaGithub } from "react-icons/fa";
import Udemyclone from "../assets/portfolio/Udemy Clone.png";
import tripadvisorClone from "../assets/portfolio/tripadvisor-clone.png";
import Nostra from "../assets/portfolio/Nostra.png";
import Greenden from "../assets/portfolio/Greenden.png";
import actodo from "../assets/portfolio/actodo.png";

const Portfolio = () => {
  const portfolios = [
   
    {
      id: 1,
      src: actodo, // Replace with actual image paths
      name: "Actodo",
      techStack: "Tailwind CSS , React JS",
      visitLink: "https://actodo-seven-flax.vercel.app/",
      githubLink: "https://github.com/hussainfaiq65/Actodo"
    },

    {
      id: 2,
      src: Greenden , // Replace with actual image paths
      name: "Greenden",
      techStack: "HTML, Tailwind-CSS, JavaScript",
      visitLink: "https://hussainfaiq65.github.io/greenden-project/",
      githubLink: "https://github.com/hussainfaiq65/greenden-project"
    },

    {
      id: 3,
      src: Nostra, // Replace with actual image paths
      name: "Nostra",
      techStack: "HTML, CSS, JavaScript",
      visitLink: "https://hussainfaiq65.github.io/nostra-project/",
      githubLink: "https://github.com/hussainfaiq65/nostra-project"
    },
    {
      id: 4,
      src: tripadvisorClone, // Replace with actual image paths
      name: "Tripadvisor Clone",
      techStack: "HTML, CSS",
      visitLink: "https://hussainfaiq65.github.io/tripadvisor-clone/",
      githubLink: "https://github.com/hussainfaiq65/tripadvisor-clone"
    },
    {
      id: 5,
      src: Udemyclone, // Use the actual imported image
      name: "Udemy Clone",
      techStack: "HTML, CSS",
      visitLink: "https://hussainfaiq65.github.io/udemy-clone/", // Replace with actual visit link
      githubLink: "https://github.com/hussainfaiq65/udemy-clone" // Replace with actual GitHub link
    },

   
   
    // Add more projects as needed
  ];

  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen py-12"
    >
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-12 text-center">
          <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
            Projects
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8">
          {portfolios.map(({ id, src, name, techStack, visitLink, githubLink }) => (
            <div
              key={id}
              className="group relative rounded-xl overflow-hidden shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl bg-transparent"
            >
              <div className="aspect-w-16 aspect-h-9 w-full">
                <img
                  src={src}
                  alt={name}
                  className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
                />
              </div>

              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100">
                <p className="text-xl font-bold text-white">{name}</p>
                <p className="text-sm text-gray-300 mt-2">{techStack}</p>
                <div className="mt-4 flex space-x-4">
                  <a
                    href={visitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white px-4 py-2 bg-teal-600 rounded-md hover:bg-teal-700 transition-all duration-300"
                  >
                    Visit
                  </a>
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white px-4 py-2 bg-gray-600 rounded-md hover:bg-gray-700 transition-all duration-300"
                  >
                    <FaGithub className="text-lg" />
                
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;