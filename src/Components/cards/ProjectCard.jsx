import React, { useState } from "react";
import CustomBtn from "../buttons/button";
import "./ProjectCard.css";
import Wave from "../wavedesign/wave"

const ProjectCard = ({ title, status, statusColor, description, imageUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxDescriptionLength = 100; // Adjust this number based on your preference

  // Toggle the description expansion
  const toggleDescription = () => setIsExpanded(!isExpanded);

  // Determine if description needs truncation
  const shouldTruncate = description.length > maxDescriptionLength;
  const displayText = isExpanded
    ? description
    : description.slice(0, maxDescriptionLength) + "...";

  return (
    <div className="flex flex-col sm:flex-row items-center bg-background text-text rounded-lg shadow-xl w-full sm:w-3/4 lg:w-full p-6 mb-8 max-h-full relative overflow-hidden transition-transform duration-500 hover:translate-y-[-4px] cursor-pointer border-2 border-lightText hover:border-accent">
      <Wave />
      {/* Image Section */}
      <div className="w-32 h-32 bg-gray-300 rounded-full sm:mr-8 flex-shrink-0">
        <img
          src={imageUrl}
          alt={`${title} logo`}
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center flex-grow p-4 sm:p-0">
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

        {/* Description */}
        <p className="text-sm font-paragraph text-text mb-6 ">
          {displayText}
          {shouldTruncate && (
            <span
              onClick={toggleDescription}
              className="text-accent cursor-pointer ml-2"
            >
              {isExpanded ? "Read Less" : "Read More"}
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
