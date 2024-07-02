import { workImages } from "@/utils/constants";
import React from "react";

const MyWork = () => {
  return (
    <div className="bg-slate-100 text-black top-container !py-20 max-sm:!py-10">
      <div className="text-center max-w-[700px] mx-auto space-y-5 pb-5">
        <p className="text-4xl font-merry-bold tracking-tight">
          My <span className="text-primary font-merry-bold">Works</span>
        </p>
      </div>
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
  );
};

export default MyWork;
