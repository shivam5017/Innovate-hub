// ProjectsSection.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import ProjectCard from "../../Components/cards/ProjectCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Projects.css";
import { FeatureButton } from "../../Components/buttons/button";

const ProjectsSection = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Devs Mania",
      status: "Upcoming",
      statusColor: "bg-yellow-500",
      description: "Post your queries and get answers",
      imageUrl: "path/to/your/image.jpg",
      projectUrl: "https://devsmania.com",
      githubUrl: "https://github.com/user/devs-mania",
      media: ["path/to/screenshot1.jpg", "path/to/screenshot2.jpg"],
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

  return (
    <section className="flex flex-col container h-full text-center">
      <div className="container mx-auto flex justify-center items-center text-center mb-12">
        <FeatureButton />
      </div>

      {projects.map((project) => {
        console.log(`Rendering project: ${project.title}`); // Log each project being rendered
        return (
          <div
            className="flex justify-center"
            key={project.id}
            onClick={() => navigate(`/projects/${project.id}`)}
          >
            <ProjectCard
              title={project.title}
              status={project.status}
              statusColor={project.statusColor}
              description={project.description}
              imageUrl={project.imageUrl}
              id={project.id}
            />
          </div>
        );
      })}
    </section>
  );
};

export default ProjectsSection;
