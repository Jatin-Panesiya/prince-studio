import Link from "next/link";
import React from "react";


const HeroSection = () => {
  return (
    <div className="bg-[url('../assets/Images/HeroBg.jpg')] bg-cover bg-center relative">
      <div className=" top-container !py-10 ">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-[600px] space-y-3 h-[calc(100vh-187px)] flex flex-col text-white justify-center">
          <p>Welcome to my</p>
          <h1 className="uppercase text-6xl max-sm:text-5xl font-merry-extrabold text-primary">
            prince studio
          </h1>
          <p>
            I love to pause the world wild, happy and real moments of life just
            to hear their story untold
          </p>
          <div className="flex items-center gap-3 flex-wrap pt-10">
            <Link
              href="/gallary"
              className="bg-slate-100 text-center  py-3 shadow-md max-[330px]:max-w-52 max-[330px]:w-full hover:shadow-white/30 shadow-black/30 px-7 hover:bg-transparent hover:text-white transition-all duration-150 text-black border border-white rounded-full"
            >
              Gallary
            </Link>
            <Link
              href="/contact-us"
              className="bg-transparent py-3  text-center shadow-md max-[330px]:max-w-52 max-[330px]:w-full hover:shadow-black/30 shadow-white/30  hover:bg-slate-100 hover:text-black transition-all duration-150 px-7 text-white border border-white rounded-full"
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
