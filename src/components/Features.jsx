import React from "react";
import { features } from "../data";

const Features = () => {
  return (
    <div className=" flex flex-col items-center m-auto max-w-[1569px] gap-20">
      <div>
        <h1 className=" text-center text-[#262626] text-5xl font-bold mb-3">
          Features
        </h1>
        <h5 className=" text-lg text-center text-[#333]">
          Welcome to the Feature Section of Nutritionist, your ultimate
          destination for all things nutrition and wellness.
        </h5>
      </div>
      <div className="grid grid-cols-2">
        {features.map((data, index) => (
          <div key={index} className=" col-span-1">
            <div className="flex items-center gap-4">
              <div className=" p-7 bg-[#CBEA7B] w-fit rounded-lg">
                <img src={data.svg} alt="" />
              </div>
              <div>{data.title}</div>
            </div>
            <div>{data.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
