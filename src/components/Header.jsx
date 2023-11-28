import React from "react";

import TopBanner from "./TopBanner";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className=" bg-[#1A3129] px-4 md:px-20 xl:px-[162px] py-[10px] fixed w-full top-0 z-10">
      <TopBanner />
      <Navbar />
    </div>
  );
};

export default Header;
