import React, { useEffect } from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS Styles

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2
            className="text-4xl sm:text-7xl font-bold text-white"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            I'm Muhammad Hussain Faiq
          </h2>
          <p
            className="text-gray-500 py-4 max-w-md"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            Full Stack Web Developer
          </p>

          <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="1200">
            <a
              href="/resume.pdf"  // Path to the resume file (inside the public folder)
              download="Resume_Muhammad_Faiq.pdf"  // Optional: name the file on download
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Download CV
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
            data-aos="fade-left"
            data-aos-delay="900"
            data-aos-duration="1500"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
