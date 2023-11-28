import React from "react";
import { features } from "../data";

const Features = () => {
  return (
    <div className=" flex flex-col items-center gap-20 mb-[180px] md:w-full w-[95%] m-auto">
      <div>
        <h1 className=" text-center text-[#262626] md:text-4xl text-2xl xl:text-5xl font-bold mb-3">
          Features
        </h1>
        <h5 className=" text-sm md:text-base xl:text-lg  text-center text-[#333]">
          Welcome to the Feature Section of Nutritionist, your ultimate
          destination for all things nutrition and wellness.
        </h5>
      </div>
      <div className="grid md:grid-cols-2 gap-5 md:gap-7">
        {features.map((data, index) => (
          <div key={index} className=" col-span-1 px-12 py-10 bg-[#F6FBE9] border border-solid border-[#E5F5BD] rounded-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className=" p-3 xl:p-4 bg-[#CBEA7B] w-fit rounded-lg">
                <img src={data.svg} alt="" className=" xl:h-10 xl:w-10 w-6 h-6 md:w-8 md:h-8"/>
              </div>
              <div className=" text-blackText font-semibold text-lg md:text-xl xl:text-2xl">{data.title}</div>
            </div>
            <div className=" text-sm md:text-base xl:text-lg text-blackText2">{data.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
