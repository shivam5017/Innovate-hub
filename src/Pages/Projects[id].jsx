import React from "react";
import { useParams } from "react-router-dom";
import Img from "../Images/img.png";
import { CustomBtn } from "../Components/buttons/button";
// Sample project data
const projects = [
  {
    id: 1,
    title: "Devs Mania",
    status: "Live",
    statusColor: "bg-green-500",
    description: "Description",
    imageUrl: "path/to/your/image.jpg",
    projectUrl: "https://devsmania.com",
    media: [
      "path/to/screenshot1.jpg",
      "path/to/screenshot2.jpg",
      "path/to/screenshot3.jpg",
    ],
    goals:
      "To provide a platform for developers to connect and share knowledge.",
    testimonials: [
      { name: "Alice", feedback: "This platform changed how I collaborate!" },
      { name: "Bob", feedback: "A great resource for finding solutions." },
    ],
    version: "1.0.0",
    futurePlans: "Adding more collaboration tools in the next release.",
  },
  // Add more projects as needed
];

const ProjectDetail = () => {
  const { id } = useParams(); // Get the project ID from the URL
  const projectId = parseInt(id, 10); // Convert to a number

  // Find the project that matches the ID
  const project = projects.find((proj) => proj.id === projectId);

  if (!project) {
    return <h1>Project not found!</h1>; // Handle the case where the project doesn't exist
  }

  return (
    <div className="flex flex-col container mx-auto pt-24 pb-8 text-center">
      {/* Title and Status */}
      <h1 className="text-3xl md:text-5xl font-bold font-primary mb-4">
        {project.title}
      </h1>
  
      <div className="flex items-center space-x-2">
          <span
            className={`h-2 w-2 rounded-full ${project.statusColor} animate-glow`}
          ></span>
          <span className="text-sm">{project.status}</span>
        </div>
      {/* Project Image */}
      <img
        src={Img}
        className="w-full h-auto rounded-lg shadow-lg mb-6"
        alt={`${project.title}`}
      />


      {/* Description */}
      <p className="text-md md:text-lg max-w-2xl mx-auto mb-6 font-paragraph text-lightText">
        {project.description}
      </p>


      {/* Project Links */}
      <div className="flex justify-center space-x-4 mb-6">
        <CustomBtn text={"View Live"}/>
      </div>

      {/* Additional Information */}
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-bold mb-2 font-primary">Project Goals:</h2>
        <p className="text-md md:text-lg font-paragraph text-lightText">{project.goals}</p>
      </div>

      {/* Future Plans */}
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-bold mb-2 font-primary">Future Plans:</h2>
        <p className="text-md md:text-lg font-paragraph text-lightText">
          {project.futurePlans}
        </p>
      </div>

      {/* Testimonials */}
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-bold mb-4 font-primary">Testimonials:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {project.testimonials.map((test) => (
            <div
              key={test.name}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden font-paragraph text-lightText"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-transparent opacity-80"></div>
              <div className="relative p-6 z-10">
                <p className="text-md md:text-lg italic mb-2">
                  "{test.feedback}"
                </p>
                <cite className="block text-sm text-lightText font-semibold">
                  - {test.name}
                </cite>
              </div>
              <div className="absolute bottom-0 right-0 h-20 w-20 bg-accent rounded-full transform translate-x-1/2 translate-y-1/2 z-0"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Media Gallery */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold mb-2">Media:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.media.map((mediaUrl, index) => (
            <img
              key={index}
              src={Img}
              className="w-full h-auto rounded-lg shadow-lg"
              alt={`Media ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
