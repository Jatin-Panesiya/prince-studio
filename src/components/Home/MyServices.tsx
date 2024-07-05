import { services } from "@/utils/constants";
import { Divider } from "@mantine/core";
import React from "react";

const MyServices = () => {
  return (
    <div className="bg-dark">
      <div className="text-white top-container !py-20 max-sm:!py-10">
        <p className="text-4xl font-merry-bold tracking-tight text-center pb-5">
          My <span className="text-primary"> Services </span>
        </p>
        <Divider />

        <div className="grid grid-cols-3 max-[800px]:grid-cols-2 max-[500px]:grid-cols-1 mt-10 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="w-full h-[250px] border-[#99999977] rounded border flex flex-col gap-y-3 p-5 justify-center shadow shadow-primary/20"
            >
              <p className="rounded p-1 w-fit">
                <service.Icon size={45} className="text-primary" />
              </p>
              <p className="text-lg font-poppins-medium">{service.title}</p>
              <p className="text-sm text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyServices;
