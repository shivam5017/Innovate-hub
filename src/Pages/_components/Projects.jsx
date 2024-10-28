// ProjectsSection.js
import React from "react";
import ProjectCard from "../../Components/cards/ProjectCard";

const ProjectsSection = () => {
  return (
    <section className="flex flex-col container h-full  text-center">
      <div className="container mx-auto text-center mb-12">
        <h1 className="text-2xl md:text-4xl  font-bold font-primary">
          PROJECTS
        </h1>
      </div>
      <div className="flex flex-col items-center space-y-8 mb-8 ">
        <ProjectCard
          title="Animatia"
          status="Live"
          statusColor="bg-green-500"
          description="At InnovateHub, we create breakthrough solutions that push the limits of technology and design."
          imageUrl="path/to/your/image.jpg"
        />
        <ProjectCard
          title="Devs Mania"
          status="Upcoming"
          statusColor="bg-yellow-500"
          description="Post your queries and get answers from experienced developers and enthusiasts.Post your queries and get answers from experienced developers and enthusiasts. "
          imageUrl="path/to/your/image.jpg"
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
