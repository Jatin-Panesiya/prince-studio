import Introduction from "@/components/Home/Introduction";
import { Divider } from "@mantine/core";
import Image from "next/image";
import React from "react";
import TeamContainer from "./components/TeamContainer";

const About = () => {
  return (
    <div>
      <div className="bg-dark relative bg-[url('/Images/bgContact.jpg')] bg-cover bg-center">
        <div className="top-container items-center text-white !py-20 max-sm:py-10">
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="max-w-[500px] relative z-10 my-20 max-sm:my-10">
            <p className="text-4xl text-primary font-merry-bold">About Us</p>
            <Divider className="my-2" />
            <p className="leading-7">
              At Prince Studio, we take beautiful photos and videos of your
              special moments. We love what we do and pay close attention to
              detail to make sure your special memories are captured perfectly.
            </p>
          </div>
        </div>
      </div>

      <Introduction />

      <div className="bg-dark">
        <div className="top-container bg-dark text-white !py-20 max-sm:!py-10 grid grid-cols-2 max-[850px]:grid-cols-1 max-[850px]:justify-center">
          <div className="max-w-[400px] max-[850px]:max-w-[600px]">
            <Image
              src="/Images/chandresh.jpg"
              width={350}
              height={400}
              className="hover:scale-95 min-w-[350px] min-h-[400px] max-sm:min-w-0 max-sm:min-h-0 transition-all duration-500 rounded my-5"
              alt="Chandresh Chavda"
            />
            <p className="text-2xl py-5">
              My only mission: Capture captivating moments
            </p>
            <p>
              Nulla quis efficitur lacus, pulvinar posuere augue. Duis eu
              vestibulum arcuman. Mauris luctus nulla a scelerisque ultricies.
              Integer leo nisl, auctor ac aliquamen the placerat quis risus.
              Maecenas vitae tellus massa.
            </p>
          </div>
          <div className="max-w-[400px] grid max-[850px]:max-w-[600px]">
            <div className="max-[850px]:order-1">
              <p className="text-2xl py-5">Why I started as a photographer</p>
              <p>
                Nulla quis efficitur lacus, pulvinar posuere augue. Duis eu
                vestibulum arcuman. Mauris luctus nulla a scelerisque ultricies.
                Integer leo nisl, auctor ac aliquamen the placerat quis risus.
                Maecenas vitae tellus massa. Phasellus faucibus leo in finibus
                pharetra. Suspendisse est diam, convallis vitae arcuma euismo.
              </p>
            </div>
            <Image
              src="/Images/chandresh.jpg"
              width={350}
              height={400}
              className="hover:scale-95 min-w-[350px] min-h-[400px] max-sm:min-w-0 max-sm:min-h-0 transition-all duration-500 rounded my-5"
              alt="Chandresh Chavda"
            />
          </div>
        </div>
      </div>

      <div className="bg-slate-100">
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
    </div>
  );
};

export default About;
