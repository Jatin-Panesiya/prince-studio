import Image from "next/image";
import React from "react";

interface ITeamContainerProps {
  imagePath: string;
  name: string;
}

const TeamContainer = ({ imagePath, name }: ITeamContainerProps) => {
  return (
    <div className="relative">
      <Image
        src={imagePath}
        width={300}
        height={350}
        className="min-w-[300px] min-h-[350px] max-sm:min-w-0 max-sm:min-h-0 rounded my-5"
        alt={name}
      />
      <div className="flex justify-center">
        <p className="absolute bottom-5 text-center text-sm bg-dark/90 font-poppins-medium text-white py-2 w-[200px] mx-auto rounded">
          {name}
        </p>
      </div>
    </div>
  );
};

export default TeamContainer;
