import Gallary from "@/components/Home/MyWork";
import { Divider } from "@mantine/core";
import React from "react";

const MyWork = () => {
  return (
    <div>
      <div className="bg-dark relative bg-[url('/Images/bgContact.jpg')] bg-cover bg-center">
        <div className="top-container items-center text-white !py-20 max-sm:py-10">
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="max-w-[500px] relative z-10 my-20 max-sm:my-10">
            <p className="text-4xl text-primary font-merry-bold">
              Our Dedication to Quality
            </p>
            <Divider className="my-2" />
            <p className="leading-7">
              At Prince Studio, we are committed to creating excellent work that
              captures the true spirit of your important moments. With careful
              attention to detail and a passion for creativity, we ensure every
              photo and video reflects the beauty and significance of your
              special events.
            </p>
          </div>
        </div>
      </div>
      <Gallary />
    </div>
  );
};

export default MyWork;
