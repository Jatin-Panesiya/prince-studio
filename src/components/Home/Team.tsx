import TeamContainer from "@/app/about/components/TeamContainer";
import { Divider } from "@mantine/core";
import React from "react";

const Team = ({ theme }: { theme: string }) => {
  return (
    <div
      className={`${
        theme === "light" ? "bg-slate-100 text-black" : "bg-dark text-white"
      }`}
    >
      <div className="top-container !py-20 max-sm:!py-10">
        <div className="text-center space-y-5">
          <p className="text-4xl font-merry-bold tracking-tight max-[375px]:text-3xl">
            Professional Team
          </p>
          <Divider />
          <div className="flex justify-between max-[680px]:justify-center gap-3 flex-wrap">
            <TeamContainer
              imagePath="/Images/chandresh.jpg"
              name="Chandresh Chavda"
            />
            <TeamContainer
              imagePath="/Images/chandresh.jpg"
              name="Chandresh Chavda"
            />
            <TeamContainer
              imagePath="/Images/chandresh.jpg"
              name="Chandresh Chavda"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
