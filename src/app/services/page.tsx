import MyServices from "@/components/Home/MyServices";
import { services } from "@/utils/constants";
import { Divider } from "@mantine/core";
import React from "react";

const Services = () => {
  return (
    <div>
      <div className="bg-dark relative bg-[url('/Images/bgContact.jpg')] bg-cover bg-center">
        <div className="top-container items-center text-white !py-20 max-sm:py-10">
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="max-w-[500px] relative z-10 my-20 max-sm:my-10">
            <p className="text-4xl text-primary font-merry-bold">
              Our Services
            </p>
            <Divider className="my-2" />
            <p className="leading-7">
              Explore Prince Studio, where we specialize in expert photography
              and videography. From weddings to commercial projects, we create
              visual stories that capture life's moments with skill and care
            </p>
          </div>
        </div>
      </div>
      <div className="bg-slate-100">
      <div className="top-container !py-20 max-sm:!py-10">
        <div className="grid grid-cols-3 max-[800px]:grid-cols-2 max-[500px]:grid-cols-1 mt-10 gap-5">
          {services.map((service) => (
            <div
              key={service.id}
              className="w-full h-[250px] border-[#99999977] rounded border flex flex-col gap-y-3 p-5 justify-center shadow shadow-primary/20"
            >
              <p className="rounded p-1 w-fit">
                <service.Icon size={45} className="text-black" />
              </p>
              <p className="text-lg font-poppins-medium">{service.title}</p>
              <p className="text-sm text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Services;
