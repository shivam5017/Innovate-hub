import React from "react";
import { CustomBtn } from "../buttons/button";
import "./ProjectCard.css";
import Wave from "../wavedesign/wave";
import { FaUserFriends } from "react-icons/fa"; // Import an icon for the team/user

const ProjectCard = ({
  title,
  status,
  statusColor,
  description,
  imageUrl,
  id,
  teamName,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-background text-text rounded-lg shadow-xl w-full p-6 mb-8 max-h-full h-full lg:w-full lg:h-96 relative overflow-hidden transition-transform duration-500 hover:translate-y-[-4px] cursor-pointer border-2 border-lightText hover:border-accent justify-center ">
      <Wave />
      {/* Image Section */}
      <div className="w-48 h-48 bg-gray-300 rounded-full sm:mr-8 flex-shrink-0 flex items-center justify-center">
        <img
          src={imageUrl}
          alt={`${title} logo`}
          className="w-full h-full rounded-full object-contain"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center flex-grow p-2 sm:p-0 items-center text-center">
        {/* Status Indicator */}
        <div className="absolute top-4 right-4 flex items-center space-x-2">
          <span
            className={`h-2 w-2 rounded-full ${statusColor} animate-glow`}
          ></span>
          <span className="text-sm">{status}</span>
        </div>

        {/* Title */}
        <h2 className="text-lg sm:text-2xl font-semibold font-primary mb-6">
          {title}
        </h2>

        {/* Team Section */}
        {teamName && (
          <div className="flex items-center space-x-2 mb-4">
            <FaUserFriends className="text-accent" />
            <span className="text-sm font-paragraph text-lightText">
              {teamName}
            </span>
          </div>
        )}

        {/* Description */}
        <p className="text-sm font-paragraph text-lightText mb-6 ">
          {description.length > 100 ? description.slice(0, 100) : description}
          {description.length > 100 && (
            <span
              onClick={() => {
                /* Add navigation logic here */
              }}
              className="text-accent cursor-pointer"
            >
              {" ...Read More"}
            </span>
          )}
        </p>

        {/* Button */}
        <div className="w-auto inline-block">
          <CustomBtn text={"View"} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
