import React from "react";
import navImg from "../../assets/logo.png";
const NavBar = ({ availableBalance }) => {
  return (
    <div className="navbar max-w-[1200px] mx-auto ">
      <div className="flex-1">
        <a className=" text-xl">
          <img className="w-[60px] h-[60px]" src={navImg} alt="" />
        </a>
      </div>
      <div className="flex items-center">
        <span className="mr-1 ml-2">{availableBalance}</span>
        <span className="mr-1">Coin</span>
        <span>🪙</span>
      </div>
    </div>
  );
};

export default NavBar;
