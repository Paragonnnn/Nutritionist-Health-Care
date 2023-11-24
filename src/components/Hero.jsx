import React from "react";
import { happycustomers1, happycustomers2, happycustomers3, image } from "..";

const Hero = () => {
  return (
    <div>
      <div className="grid grid-cols-2 place-items-center gap-12  pr-[162px]">
        <section className=" col-span-1  ">
          <img src={image} alt="" />
        </section>
        <section className=" col-span-1 ">
          <section className="  ">
            <h3 className=" text-[28px] font-semibold mb-6 text-[#1A3129]">Transform Your ❤️ Health with</h3>
            <h1 className=" text-6xl font-bold mb-5 text-[#1A3129]">Personalized Nutrition Coaching</h1>
            <p className=" text-lg text-[#333] mb-12">
              Welcome to Nutritionist, your partner in achieving optimal health
              through personalized nutrition coaching. Our certified
              nutritionists are here to guide you on your weight loss journey,
              providing customized plans and ongoing support. Start your
              transformation today and experience the power of personalized
              nutrition coaching.
            </p>
            <div className=" flex gap-5 mb-16">
              <span className=" px-5 py-4 bg-[#CBEA7B] rounded-lg text-lg font-semibold text-[#262626]">Get Starter Today</span>
              <span className="px-5 py-4 bg-[#F6FBE9] rounded-lg text-lg font-semibold border border-solid border-[#E5F5BD] text-[#262626]">Book a Demo</span>
            </div>
          </section>
          <section className="flex items-center gap-4  w-fit  ">
            <div className=" w-[130px] flex items-center relative  border border-solid border-[#CBEA7B] rounded-full h-[70px]">
              <img
                src={happycustomers1}
                alt=""
                className=" absolute left-[10px] h-[50px] w-[50px]"
              />
              <img
                src={happycustomers2}
                alt=""
                className=" absolute left-[40px] h-[50px] w-[50px]  "
              />
              <img
                src={happycustomers3}
                alt=""
                className=" absolute left-[70px] h-[50px] w-[50px]  "
              />
            </div>
            <div className=" flex items-center">
              <span className=" text-xl text-[#468671] font-bold">430+ </span>
              <span className=" ml-2 font-semibold text-[#234338] text-xl"> Happy Customers</span>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Hero;
