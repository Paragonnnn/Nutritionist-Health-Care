import React from "react";
import { logo,logo_text, menu, } from "..";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex justify-between my-5 ">
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={logo} alt="" className=" h-11 w-11" />
          <img src={logo_text} alt="" />
        </div>
        <div><img src={menu} alt="" className=" block md:hidden" /></div>
        <div className=" items-center gap-10 hidden md:flex">
          <ul className="flex gap-6 text-lg text-white items-center">
            <li><Link to={`/`}>Home</Link></li>
            <li><Link to={`/about`}>About</Link></li>
            <li><Link to={`/team`}>Team</Link></li>
            <li><Link to={`/process`}>Process</Link></li>
            <li><Link to={`/pricing`}>Pricing</Link></li>
            <li><Link to={`/blog`}>Blog</Link></li>
              <li className=" px-6 py-3 bg-[#CBEA7B] rounded-lg text-[#262626] font-semibold text-lg cursor-pointer hover:opacity-80">
            <Link to={`/contact`}>
                Contact Us
            </Link>
              </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
