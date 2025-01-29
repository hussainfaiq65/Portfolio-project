import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I am an aspiring full-stack web developer with a solid foundation in the MERN stack. Passionate about building interactive and dynamic web applications, I love diving into coding adventures. Excited by new challenges, my goal is to gain valuable experience in the tech world while continuously growing my skills. Eager to learn and contribute to innovative projects, I am always exploring new technologies to find solutions to real-world problems.


        </p>

        <br />

      </div>
    </div>
  );
};

export default About;
