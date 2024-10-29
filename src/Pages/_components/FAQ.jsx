// ProjectsSection.js
import React from "react";
import { HeadingsBtn } from "../../Components/buttons/button";
import { FaQuoteLeft } from "react-icons/fa6";

const FAQ = () => {
 
  return (
    <section className="flex flex-col container h-full text-center">
      <div className="container mx-auto flex justify-center items-center text-center mb-12">
       <HeadingsBtn text={'FAQ'} icon={<FaQuoteLeft />}/>
      </div>
    </section>
  );
};

export default FAQ;
