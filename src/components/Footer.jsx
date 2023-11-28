import React from "react";
import { logo, logo_text, menu } from "..";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" w-full bg-[#1A3129] ">
      <div className="flex justify-between my-5 max-w-[1920px] m-auto ">
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={logo} alt="" className=" h-11 w-11" />
          <img src={logo_text} alt="" />
        </div>
        <div>
          <img src={menu} alt="" className=" block md:hidden" />
        </div>
        <div className=" items-center gap-10 flex">
          <ul className="flex gap-6 text-lg text-white items-center">
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
      </div>
    </div>
  );
};

export default Footer;
