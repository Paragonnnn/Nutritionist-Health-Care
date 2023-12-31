import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import Blog from "./Blog";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";

const Home = () => {
  return (
    <div className=" w-full ">
      <Hero />
      <div className="max-w-[1569px]  m-auto">
        <Features />
        <Blog />
        <Testimonials />
        <Pricing />
      </div>
    </div>
  );
};

export default Home;
