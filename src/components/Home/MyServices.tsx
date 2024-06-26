import { services } from "@/utils/constants";
import React from "react";
import { CiCamera } from "react-icons/ci";

const MyServices = () => {
  return (
    <div className="bg-[#1b1b1b] text-white top-container !py-20">
      <div className="text-center max-w-[700px] mx-auto space-y-5">
        <p className="text-4xl font-merry-bold tracking-tight">
          My <span className="text-primary"> Services </span>
        </p>
        <p>
          Explore <span className="capitalize">prince studio</span>, where we
          specialize in expert photography and videography. From weddings to
          commercial projects, we create visual stories that capture life's
          moments with skill and care
        </p>
      </div>

      <div className="grid grid-cols-3 max-[800px]:grid-cols-2 max-[500px]:grid-cols-1 mt-10 gap-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="w-full h-[250px] border-[#99999977] rounded border flex flex-col gap-y-3 p-5 justify-center shadow shadow-primary/20"
          >
            <p className="rounded p-1 w-fit shadow shadow-primary/40">
              <service.Icon size={45} className="text-primary" />
            </p>
            <p className="text-lg font-poppins-medium">{service.title}</p>
            <p className="text-sm text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyServices;
