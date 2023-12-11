import React, { useEffect, useState } from "react";
import logo from "../assets/images/binance-logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className={`w-full`}>
      <div className="flex py-4 items-center justify-between">
        <Link to="/" className="flex mx-7 gap-x-2 items-center justify-center">
          <img src={logo} className="w-[30px] h-[30px] object-cover" />
          <h4 className="text-2xl text-[#F3BA2F] uppercase font-bold">
            BNB<span className="font-normal"> CHAIN</span>
          </h4>
        </Link>
        <div className={`mr-6 text-[2em] text-white hover:text-[#F3BA2F]`}>
          <ion-icon name="menu"></ion-icon>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
