import { workImages } from "@/utils/constants";
import { Divider } from "@mantine/core";
import React from "react";

const Gallary = () => {
  return (
    <div className="bg-slate-100">
      <div className="text-black top-container !py-20 max-sm:!py-10">
        <p className="text-4xl font-merry-bold tracking-tight pb-5 text-center">Gallary</p>
        <Divider />
        <div className="gap-5 py-5 flex flex-wrap">
          {workImages.map((data) => (
            <a href={data.image} target="_blank">
              <img
                key={data.id}
                src={data.image}
                alt={data.image}
                className="rounded-md shadow shadow-primary hover:scale-95 transition-all duration-150"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallary;
