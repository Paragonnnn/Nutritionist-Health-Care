import React from "react";
import { gmail, location, logo, logo_text, menu, phone, top_arrow } from "..";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" w-full bg-[#1A3129] py-10 px-20 mt-24">
      <div className="flex justify-between  max-w-[1920px] m-auto pb-10">
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={logo} alt="" className=" h-7 w-7" />
          <img src={logo_text} alt="" />
        </div>
        {/* <div>
          <img src={menu} alt="" className=" block md:hidden" />
        </div> */}
        <div className=" items-center gap-10 flex ">
          <ul className="flex gap-6 text-sm text-white items-center">
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`/about`}>About</Link>
            </li>
            <li>
              <Link to={`/team`}>Team</Link>
            </li>
            <li>
              <Link to={`/process`}>Process</Link>
            </li>
            <li>
              <Link to={`/pricing`}>Pricing</Link>
            </li>
            <li>
              <Link to={`/blog`}>Blog</Link>
            </li>
          </ul>
        </div>
        <div className=" flex gap-5 items-center">
          <div className=" text-white text-base">Get To Top</div>
          <span className=" bg-[#234338] rounded-full p-3 cursor-pointer"><a href="/#"><img src={top_arrow} alt="" /></a></span>
        </div>
      </div>
      <div className=" max-w-[1920px] bg-[#234338] m-auto flex justify-between p-3 rounded-lg border border-solid border-[#2C5446] items-center text-white">
        <section className=" flex gap-5 ">
        <div className=" flex gap-2 border border-solid border-[#2C5446] p-[14px] rounded-md items-center">
          <img src={gmail} alt="" />
          <span className=" text-base">hello@squareup.com</span>
        </div>
        <div className=" flex gap-2 border border-solid border-[#2C5446] p-[14px] rounded-md items-center">
          <img src={phone} alt="" />
          <span className=" text-base">+91 91813 23 2309</span>
        </div>
        <div className=" flex gap-2 border border-solid border-[#2C5446] p-[14px] rounded-md items-center">
          <img src={location} alt="" />
          <span className=" text-base">Somewhere in the World</span>
        </div>
        </section>
        <section>
          <div className=" text-[#F2F2F2] font-normal mr-3">© 2023 Nutritionist. All rights reserved.</div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
