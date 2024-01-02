import React from "react";
import { testimonials } from "../data";
import { quotation } from "..";

const Testimonials = () => {
  return (
    <div>
      <header className=" px-64 mb-16">
        <h1 className="text-4xl font-bold text-[#262626] text-center">
          Our Testimonials
        </h1>
        <p className=" text-center">
          Our satisfied clients share their success stories and experiences on
          their journey to better health and well-being.
        </p>
      </header>
      <section className=" flex gap-5">
        {testimonials.map((testi, i) => (
          <div
            key={i}
            className=" rounded-xl border border-solid border-[#EEF8D3] bg-[#FAFDF2]"
          >
            <div className=" p-8">
            <img src={quotation} alt="" className=" mb-10" />
            <p className=" text-[#333] mb-8">{testi.paragraph}</p>

            </div>
            <div className=" bg-[#F6FBE9] border px-8 py-5 border-solid border-[#EEF8D3] flex items-center gap-3">
              <img src={testi.image} alt="" />
              <div className=" text-[#1A3129] font-semibold">{testi.namee}</div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Testimonials;
