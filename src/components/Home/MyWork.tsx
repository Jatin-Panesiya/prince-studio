import { workImages } from "@/utils/constants";
import { Divider } from "@mantine/core";
import React from "react";

const Gallary = () => {
  return (
    <div className="bg-slate-100">
      <div className="text-black top-container !py-20 max-sm:!py-10">
        <p className="text-4xl font-merry-bold tracking-tight pb-5 text-center">
          Gallary
        </p>
        <Divider className="pb-10" />
        <div className="grid grid-cols-3 max-[850px]:grid-cols-2 max-[400px]:grid-cols-1 gap-2">
          {workImages.map((ele) => (
            <a href={ele.image} target="_blank">
              <img key={ele.id} src={ele.image} alt={ele.image} className="object-cover h-full" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallary;
