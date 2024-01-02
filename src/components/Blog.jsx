import React from "react";
import { blog } from "../data";
import { bookmark, heart } from "..";

const Blog = () => {
  return (
    <div>
      <header className=" px-64 mb-16">
        <h1 className=" text-4xl font-bold text-[#262626] text-center">
          Our Blogs
        </h1>
        <p className=" text-center">
          Our blog is a treasure trove of informative and engaging articles
          written by our team of nutritionists, dietitians, and wellness
          experts. Here's what you can expect from our blog.
        </p>
      </header>
      <section className=" grid grid-cols-2 gap-5">
        {blog.map((blog, i) => (
          <div
            key={i}
            className=" bg-[#F6FBE9] border border-solid border-[#EEF8D3] col-span-1 p-8"
          >
            <div>
              <img
                src={blog.top.image}
                alt=""
                className=" rounded-xl w-full  mb-10"
              />
              <h5 className=" w-full text-base text-[#333]">{blog.top.text}</h5>
              <h3 className=" w-full text-2xl font-semibold text-[#262626] mb-5">
                {blog.top.heading}
              </h3>
              <p className=" w-full text-base text-[#4C4C4D] mb-5">
                {blog.top.paragraph}
              </p>
            </div>
            <div className=" p-4 flex gap-4 bg-[#FAFDF2] border border-solid border-[#EEF8D3]">
              <img src={blog.bottom.avatar} alt="" className=" w-12 h-12" />
              <div className=" w-full">
                <div className=" flex justify-between items-center gap-5">
                  <div className=" flex flex-col">
                    <span className=" font-semibold text-lg text-[#1A3129]">{blog.bottom.namee}</span>
                    <span className=" text-[#59595A]">{blog.bottom.date}</span>
                  </div>
                  <div className="flex gap-2">
                    <img src={heart} alt="" className=" p-3 bg-[#F6FBE9] border border-solid border-[#EEF8D3]"/>
                    <img src={bookmark} alt="" className=" p-3 bg-[#F6FBE9] border border-solid border-[#EEF8D3]"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Blog;
