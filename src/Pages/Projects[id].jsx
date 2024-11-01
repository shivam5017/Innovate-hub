import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client, urlFor } from "../sanityClient"; // Import your Sanity client and urlFor function
import { CustomBtn, HeadingsBtn } from "../Components/buttons/button";
import { GoGoal } from "react-icons/go";
import { SiFuturelearn } from "react-icons/si";
import { BsChatSquareQuote } from "react-icons/bs";
import { GoFileMedia } from "react-icons/go";
import { Skeleton } from "@mui/material"; // Import MUI Skeleton

const ProjectDetail = () => {
  const { id } = useParams(); // Get the project ID from the URL
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projectData = await client.fetch(
          `*[_type == "project" && _id == $id][0]{
             _id,
            title,
            status,
            statusColor,
            description,
            image,
            projectUrl,
            media[]{
              asset->{
                _id,
                url
              }
            },
            goals,
            testimonials,
            version,
            futurePlans
          }`,
          { id }
        );

        setProject(projectData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col container mx-auto pt-24 pb-8 text-center">
        <Skeleton variant="text" height={120} width="60%" className="mb-4" />
        <Skeleton
          variant="rectangular"
          height={200}
          className="rounded-lg mb-4"
        />
        <Skeleton variant="text" height={120} className="mb-2" />
        <Skeleton variant="text" height={120} className="mb-2" />
        <Skeleton variant="text" height={120} className="mb-6" />
        <Skeleton variant="text" height={130} className="mb-2" />
        <Skeleton variant="text" height={130} className="mb-6" />
      </div>
    );
  }

  return (
    <div className="flex flex-col container mx-auto pt-24 pb-8 text-center">
      {/* Title and Status */}
      <h1 className="text-3xl md:text-5xl font-bold font-primary mb-4">
        {project?.title}
      </h1>

      <div className="flex items-center space-x-2">
        <span
          className={`h-2 w-2 rounded-full ${project?.statusColor} animate-glow`}
        ></span>
        <span className="text-sm">{project?.status}</span>
      </div>

      {/* Project Image */}
      <img
        src={urlFor(project?.image).url()} // Use urlFor to get the image URL
        className="w-full h-auto rounded-lg shadow-lg mb-6"
        alt={project?.title}
      />

      {/* Description */}
      <p className="text-md md:text-lg max-w-2xl mx-auto mb-6 font-paragraph text-lightText">
        {project?.description}
      </p>

      {/* Project Links */}
      <div className="flex justify-center space-x-4 mb-6">
        <CustomBtn disabled={project?.status !== "Live"}>
          {project.status}
        </CustomBtn>
      </div>

      {/* Additional Information */}
      <div className="mb-6">
        <div className="container mx-auto flex justify-center items-center text-center mb-12">
          <HeadingsBtn text={"Goals"} icon={<GoGoal />} />
        </div>
        <p className="text-md md:text-lg font-paragraph text-lightText">
          {project?.goals}
        </p>
      </div>

      {/* Future Plans */}
      <div className="mb-6">
        <div className="container mx-auto flex justify-center items-center text-center mb-12">
          <HeadingsBtn text={"Future Plans"} icon={<SiFuturelearn />} />
        </div>
        <p className="text-md md:text-lg font-paragraph text-lightText">
          {project?.futurePlans}
        </p>
      </div>

      {/* Testimonials */}
      <div className="mb-6">
        <div className="container mx-auto flex justify-center items-center text-center mb-12">
          <HeadingsBtn text={"Testimonials"} icon={<BsChatSquareQuote />} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {Array.isArray(project?.testimonials) &&
          project?.testimonials.length > 0 ? (
            project.testimonials.map((test, index) => (
              <div
                key={index}
                className="relative bg-white shadow-lg rounded-lg overflow-hidden font-paragraph text-lightText"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-transparent opacity-80"></div>
                <div className="relative p-6 z-10">
                  <p className="text-md md:text-lg italic mb-2">
                    "{test?.feedback}"
                  </p>
                  <cite className="block text-sm text-lightText font-semibold">
                    - {test?.name}
                  </cite>
                </div>
                <div className="absolute bottom-0 right-0 h-20 w-20 bg-accent rounded-full transform translate-x-1/2 translate-y-1/2 z-0"></div>
              </div>
            ))
          ) : (
            <p>No testimonials available.</p>
          )}
        </div>
      </div>

      {/* Media Gallery */}
      <div>
        <div className="container mx-auto flex justify-center items-center text-center mb-12">
          <HeadingsBtn text={"Media"} icon={<GoFileMedia />} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.isArray(project?.media) && project?.media?.length > 0 ? (
            project?.media.map((mediaItem, index) => (
              <img
                key={index}
                src={urlFor(mediaItem.asset).url()} // Use urlFor for media items
                className="w-full h-auto rounded-lg shadow-lg"
                alt={`Media ${index + 1}`}
                width={32}
                height={32}
                loading="lazy"
                srcSet={`${urlFor(mediaItem.asset).url()} 128w, ${urlFor(mediaItem.asset).url()}?size=256 256w`}
              />
            ))
          ) : (
            <p>No media available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
