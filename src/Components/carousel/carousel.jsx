import React, { useState } from "react";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { CustomBtn } from "../buttons/button";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Img from "../../Images/img.png"; 
import Wave from "../svgs/wave";

const projects = [
  {
    id: 1,
    title: "PDF Builder",
    status: "Coming Soon",
    statusColor: "bg-yellow-500",
    description: "Build PDF's easy and fast with just 1 click",
    imageUrl: "path/to/your/image.jpg",
    projectUrl: "https://devsmania.com",
    media: [
      "path/to/screenshot1.jpg",
      "path/to/screenshot2.jpg",
      "path/to/screenshot3.jpg",
    ],
    goals:
      "To provide a platform for users to convert simple text into PDF's.",
    testimonials: [
      { name: "Alice", feedback: "This platform changed how I Build PDF's!" },
      { name: "Bob", feedback: "A great resource for PDF's Building" },
    ],
    version: "1.0.0",
    futurePlans: "Adding more collaboration tools in the next release.",
  },
  // Add more projects as needed
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const handleProjectClick = (id) => {
    navigate(`/projects/${id}`); // Navigate to the project page using the id
  };

  return (
    <motion.section
      id="projects"
      className="flex flex-col items-center py-4 "
    >
      <motion.div className="relative mb-2 mt-8 w-full lg:w-[70%] overflow-hidden ">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project) => (
            <div key={project.id} className="w-full flex-shrink-0 ">
              <div className="grid grid-cols-1 gap-4 rounded-xl border-2 p-4 lg:grid-cols-5">
                <div 
                  className="col-span-1 flex flex-col overflow-hidden rounded-xl bg-accent/30 md:col-span-3 cursor-pointer 
                  border border-transparent " 
                  onClick={() => handleProjectClick(project.id)} // Add click handler
                >
                
                  <div className="mb-4 flex items-center">
                  <Wave />
                    <img
                      src={Img}
                      alt={project.title}
                      className="mr-4 h-12 w-12 rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-primary font-bold">{project.title}</h3>
                      <div className="flex items-center space-x-2">
                        <span
                          className={`h-2 w-2 rounded-full ${project.statusColor}`}
                        ></span>
                        <span className="text-sm font-paragraph">{project.status}</span>
                      </div>
                    </div>
                  </div>
                  <div className="my-4 flex-grow px-2">
                    <p className="text-sm font-paragraph">{project.description}</p>
                  </div>
                </div>
                <div className="rounded-xl border-2 bg-primary/5 drop-shadow-2xl md:col-span-2 h-full">
                  <img
                    src={Img}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    alt={`${project.title}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <div className="flex justify-center space-x-4">
        <CustomBtn onClick={prevProject}>
          <FaCircleArrowLeft className="h-4 w-4" />
        </CustomBtn>
        <CustomBtn onClick={nextProject}>
          <FaCircleArrowRight className="h-4 w-4" />
        </CustomBtn>
      </div>
    </motion.section>
  );
}
