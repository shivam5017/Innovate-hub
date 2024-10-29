// ProjectsSection.js
import React from "react";
import { PiCrown } from "react-icons/pi";
import Carousel from "../../Components/carousel/carousel";
import { HeadingsBtn } from "../../Components/buttons/button";

const ProjectsSection = () => {
 
  return (
    <section className="flex flex-col container h-full text-center mb-24">
      <div className="container mx-auto flex justify-center items-center text-center mb-12">
        <HeadingsBtn text={'Featured Products'} icon={<PiCrown />} />
      </div>
      <Carousel />
    </section>
  );
};

export default ProjectsSection;
