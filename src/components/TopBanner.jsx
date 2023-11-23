import React from "react";
import { arrow,header_logo,circle_logo } from "..";

const TopBanner = () => {
  return (
    <div>
      <div className=" flex  justify-between bg-[#2C5446] rounded-md px-5 my-3">
        <img src={header_logo} alt="" className=" " />
        <div className=" flex gap-2 w-fit justify-center items-center">
          <img src={circle_logo} alt="" className=" h-5 w-5" />
          <span className=" text-white text-lg">
            Join Our Personalized Nutrition Demo For Free
          </span>
          <img src={arrow} alt="" className=" h-6 w-6" />
        </div>
        <img src={header_logo} alt="" />
      </div>
    </div>
  );
};

export default TopBanner;
