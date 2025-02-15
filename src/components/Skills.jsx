import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import Nodejs from "../assets/Nodejs.png";
import Express from "../assets/Express.png";
import MongoDB from "../assets/MongoDB.png";
import Redux from "../assets/Redux.png";
import Firebase from "../assets/Firebase.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import vscode from "../assets/VS Code.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-gray-400",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 4,
      src: javascript,
      title: "JavaScript",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "shadow-sky-400",
    },

    {
      id: 6,
      src: Redux,
      title: "Redux",
      style: "shadow-gray-400",
    },

    {
      id: 7,
      src: Nodejs,
      title: "Node JS",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: Express,
      title: "Express JS",
      style: "shadow-blue-600",
    },
    {
      id: 9,
      src: MongoDB,
      title: "MongoDB",
      style: "shadow-gray-400",
    },
   
    {
      id: 10,
      src: Firebase,
      title: "Firebase",
      style: "shadow-gray-400",
    },
    {
      id: 11,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 12,
      src: vscode,
      title: "Visual Studio Code",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="Skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
          Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} flex flex-col justify-center items-center`}
            >
              <img src={src} alt={title} className="w-20" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
