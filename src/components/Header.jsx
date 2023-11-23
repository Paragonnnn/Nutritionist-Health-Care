import React from "react";

import TopBanner from "./TopBanner";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className=" bg-[#1A3129] px-[162px] py-[10px] ">
      <TopBanner />
      <Navbar />
    </div>
  );
};

export default Header;
