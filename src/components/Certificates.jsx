import React from "react";
import certificateImage from "../assets/udemy-certificate.jpg"; // Ensure this path is correct

const Certificates = () => {
  return (
    <div
      id="certificates"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full py-16 text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Certificates
          </p>
        </div>

        {/* Container for the certificates */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {/* Certificate Item 1 */}
          <div className="shadow-md py-4 rounded-lg bg-gray-700 p-6 flex flex-col justify-center items-center transition-all">
            <h3 className="text-xl text-center text-gray-300"> </h3>
            
            {/* Display Live Certificate Image */}
            <img
  src={certificateImage}
  alt="The Complete 2024 Web Development Bootcamp"
  className="mt-4 w-full h-auto rounded-lg shadow-lg"
/>

            {/* Show Credential Button */}
            <a
              href="https://www.udemy.com/certificate/UC-c56d20fd-efa2-4fd9-8bbd-f32035d402f6/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg"
            >
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
