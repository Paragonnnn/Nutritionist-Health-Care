import React from "react";
import Hero from "./Hero";
import Features from "./Features";

const Home = () => {
  return (
    <div className=" w-full ">
      <Hero />
      <div className="max-w-[1569px]  m-auto">
        <Features />
      </div>
    </div>
  );
};

export default Home;
