import React, { useState } from "react";
import { pricing } from "../data";

const Pricing = () => {
  const [toggleYear,setToggleYear] = useState(true)
  return (
    <div>
      <header className=" px-64 mb-16">
        <h1 className="text-4xl font-bold text-[#262626] text-center">
          Our Pricing
        </h1>
        <p className=" text-center text-[#333]">
          We outline our flexible and affordable options to support you on your
          journey to optimal health and nutrition. We believe that everyone
          deserves access to personalized nutrition guidance and resources
        </p>
      </header>
      <section className="w-fit  m-auto ">
        <div className="border border-solid border-[#DCF1A7] rounded-xl mb-3 p-3 flex">
          <button className={`${toggleYear ? 'bg-[#234338]' : ' text-[#4C4C4C]'} px-6 py-[10px] flex justify-center items-center text-white  rounded-md transition-all`} onClick={() => {setToggleYear(true)}}>
            Monthly
          </button>
          <button className={`${!toggleYear ? 'bg-[#234338] text-white' : 'text-[#4C4C4C]'} px-6 py-[10px] rounded-md transition-all`} onClick={() => {setToggleYear(false)}}>Yearly</button>
        </div>
        <section className=" text-center text-[#4C4C4D]">
          Save 50% on Yearly
        </section>
      </section>
      <section className=" flex gap-5">
        {pricing.map((price, i) => (
          <div
            key={i}
            className=" p-10 border border-solid border-[#EEF8D3] bg-[#F6FBE9] rounded-xl flex flex-col gap-8"
          >
            <section>
              <h3 className=" text-2xl text-[#262626] font-semibold">
                {price.plan}
              </h3>
              <span className=" text-[#4C4C4D]">{price.discount}</span>
            </section>
            <section>
              <p className=" text-[#262626]">{price.paragraph}</p>
            </section>
            <section>
              <div className="flex items-center mb-6">
                <span className=" text-[40px] text-[#2C5446] font-bold">{price.price}</span><span className=" text-[#333]">/month</span>
              </div>
              <button className=" px-6 py-3 bg-[#CBEA7B] rounded-md w-full">Choose Plan</button>
            </section>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Pricing;
