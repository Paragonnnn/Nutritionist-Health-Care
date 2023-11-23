import React from "react";
import { logo,logo_text, } from "..";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between my-5 ">
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={logo} alt="" className=" h-11 w-11" />
          <img src={logo_text} alt="" />
        </div>
        <div className="flex items-center gap-10">
          <ul className="flex gap-6 text-lg text-white ">
            <Link to={`/`}><li>Home</li></Link>
            <Link to={`/about`}><li>About</li></Link>
            <Link to={`/team`}><li>Team</li></Link>
            <Link to={`/process`}><li>Process</li></Link>
            <Link to={`/pricing`}><li>Pricing</li></Link>
            <Link to={`/blog`}><li>Blog</li></Link>
          </ul>
          <div className=" px-6 py-3 bg-[#CBEA7B] rounded-lg text-[#262626] font-semibold text-lg cursor-pointer hover:opacity-80">
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
