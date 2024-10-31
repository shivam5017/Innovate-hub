import React, { useEffect, useState } from "react";
import { CustomBtnWithIcon } from "../Components/buttons/button";
import { GitHubIcon, LinkedIn } from "../Components/svgs/AllSvgs";
import { client } from "../sanityClient"; // Import the Sanity client
import { Skeleton } from "@mui/material"; // Import Skeleton from MUI

const TeamPage = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchTeamMembers = async () => {
      const query = `*[_type == "member"]{name, position, bio, image, linkedIn, github}`; // Fetch members directly
      const data = await client.fetch(query);
      setTeamMembers(data); // Set the fetched members
      setLoading(false); // Set loading to false after data is fetched
    };

    fetchTeamMembers();
  }, []);

  // Determine how many skeletons to show
  const skeletonCount = loading ? Math.max(1, teamMembers.length) : 0; // Show at least 1 skeleton if loading

  return (
    <section id="team" className="py-8 container pt-24">
      <h2 className="text-2xl lg:text-3xl font-bold text-center font-primary">Meet the Team</h2>
      <p className="text-center text-sm lg:text-lg text-lightText mb-6 font-paragraph">
        Discover the talented individuals driving InnovateHub's success.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {loading ? (
          // Show skeletons while loading, based on the number of team members
          Array.from(new Array(skeletonCount)).map((_, index) => (
            <div key={index} className="rounded-lg shadow-md p-4 text-center">
              <Skeleton variant="circular" width={128} height={128} className="mx-auto mb-4" />
              <Skeleton variant="text" height={40} className="mb-2" />
              <Skeleton variant="text" height={40} width="60%" className="mb-2" />
              <Skeleton variant="text" height={40} width="80%" />
              <div className="flex gap-5 mt-10">
              <Skeleton variant="text" height={50} width="30%" />
              <Skeleton variant="text" height={50} width="30%"/>
              </div>
            </div>
          ))
        ) : (
          teamMembers.map((member, index) => (
            <div key={index} className="rounded-lg shadow-md p-4 text-center">
              {member?.image && member?.image?.assetId && (
                <img
                  src={member?.image?.url}
                  alt={member?.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
              )}
              <h3 className="text-sm lg:text-xl font-semibold font-primary">{member?.name}</h3>
              <h4 className="text-sm text-lightText font-paragraph">{member?.position}</h4>
              <p className="mt-2 text-lightText text-sm font-paragraph">{member?.bio}</p>
              <div className="flex gap-5 mt-10">
                {member.github && (
                  <CustomBtnWithIcon text={"GitHub"} icon={<GitHubIcon />} onClick={() => window.open(member?.github, "_blank")} />
                )}
                {member.linkedIn && (
                  <CustomBtnWithIcon text={"LinkedIn"} icon={<LinkedIn />} onClick={() => window.open(member?.linkedIn, "_blank")} />
                )}
              </div>
            </div>
          ))
        )}
      </div>
      <div className="text-center mt-8 font-paragraph text-lightText">
        <p>Want to know more? Explore our projects or connect with us!</p>
      </div>
    </section>
  );
}

export default TeamPage;
