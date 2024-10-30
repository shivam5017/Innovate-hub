import React from "react";
import { CustomBtnWithIcon } from "../Components/buttons/button";
import { GitHubIcon,Twitter } from "../Components/svgs/AllSvgs";
// import Img1 from "../../Images/team1.jpg"; // Replace with actual images
// import Img2 from "../../Images/team2.jpg"; 
// import Img3 from "../../Images/team3.jpg"; 

const teamMembers = [
  {
    name: "Alice Johnson",
    position: "CEO & Founder",
    bio: "Alice is a visionary leader passionate about driving innovation.",
    // imageUrl: Img1,
    linkedIn: "#", // Add actual links
  },
  {
    name: "Bob Smith",
    position: "CTO",
    bio: "Bob oversees technology development and engineering.",
    // imageUrl: Img2,
    linkedIn: "#",
  },
  {
    name: "Charlie Brown",
    position: "Head of Marketing",
    bio: "Charlie specializes in digital marketing strategies and brand growth.",
    // imageUrl: Img3,
    linkedIn: "#",
  },
  // Add more team members as needed
];

export default function TeamPage() {
  return (
    <section id="team" className="py-8 container pt-24">
      <h2 className="text-2xl lg:text-3xl font-bold text-center font-primary">Meet the Team</h2>
      <p className="text-center text-sm lg:text-lg text-lightText mb-6 font-paragraph">
        Discover the talented individuals driving InnovateHub's success.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="rounded-lg shadow-md p-4 text-center">
            <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-sm lg:text-xl font-semibold font-primary ">{member.name}</h3>
            <h4 className="text-sm  text-lightText font-paragraph">{member.position}</h4>
            <p className="mt-2 text-lightText text-sm  font-paragraph">{member.bio}</p>
            <div className="flex gap-5 mt-10">
                <CustomBtnWithIcon text={"Github"} icon={<GitHubIcon />} />
                <CustomBtnWithIcon text={"Twitter"} icon={<Twitter />} />
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8 font-paragraph text-lightText">
        <p>Want to know more? Explore our projects or connect with us!</p>
      </div>
    </section>
  );
}
