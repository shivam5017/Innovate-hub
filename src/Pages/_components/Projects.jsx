// ProjectsSection.js
import React, { useEffect, useState } from "react";
import { PiCrown } from "react-icons/pi";
import { client } from "../../sanityClient"; // Import your Sanity client
import { HeadingsBtn } from "../../Components/buttons/button";
import { Skeleton } from "@mui/material"; // Import MUI Skeleton
import Carousel from "../../Components/carousel/carousel";
import NoProjectCard from "../../Components/noProject/NoProjectCard";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch projects from Sanity
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const projectData = await client.fetch(`*[_type == "project"]{
          _id,
          title,
          status,
          statusColor,
          description,
          image,
          projectUrl,
          goals,
          testimonials,
          version,
          futurePlans
        }`);
        setProjects(projectData);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError("Error fetching projects.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="flex flex-col container h-full text-center mb-24">
      <div className="container mx-auto flex justify-center items-center text-center mb-12">
        <HeadingsBtn text={"Featured Products"} icon={<PiCrown />} />
      </div>
      {loading ? (
        <div className="flex flex-col items-center justify-center h-64 space-y-4">
          <Skeleton variant="text" width="40%" height={120} />
          <Skeleton variant="rectangular" width="100%" height={250} className="rounded-lg" />
          <Skeleton variant="text" width="60%" height={30} />
          <Skeleton variant="text" width="80%" height={30} />
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-lg text-red-600">{error}</p>
        </div>
      ) : projects.length === 0 ? (
        <NoProjectCard />
      ) : (
        <Carousel projects={projects} /> // Pass projects to the Carousel component
      )}
    </section>
  );
};

export default ProjectsSection;
