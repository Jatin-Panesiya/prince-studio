import React from "react";

const HeroSection = () => {
  return (
    <div className="relative top-container !py-10 bg-[url('../assets/Images/HeroBg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative max-w-[600px] space-y-3 h-[calc(100vh-165px)] flex flex-col text-white justify-center">
        <p>Welcome to my</p>
        <p className="uppercase text-6xl font-merry-extrabold text-primary">
          prince studio
        </p>
        <p>
          I love to pause the world wild, happy and real moments of life just to
          hear their story untold
        </p>
        <div className="flex items-center gap-3 flex-wrap pt-10">
          <button className="bg-white py-3 shadow-md hover:shadow-white/30 shadow-black/30 px-7 hover:bg-transparent hover:text-white transition-all duration-150 text-black border border-white rounded-full">
            My works
          </button>
          <button className="bg-transparent py-3 shadow-md hover:shadow-black/30 shadow-white/30  hover:bg-white hover:text-black transition-all duration-150 px-7 text-white border border-white rounded-full">
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
