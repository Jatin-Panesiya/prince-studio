"use client";

import HeroSection from "@/components/Home/HeroSection";
import Introduction from "@/components/Home/Introduction";
import MyServices from "@/components/Home/MyServices";
import MyWork from "@/components/Home/MyWork";
import Team from "@/components/Home/Team";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Introduction />
      <MyServices />
      <MyWork />
      {/* <Team theme="dark" /> */}
    </>
  );
};

export default Home;
