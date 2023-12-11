import React from "react";
import logo from "../assets/dv.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <div className="flex p-4 py-2 sm:pl-[5em] gap-6 text-center items-center justify-between text-black">
        <div className="flex flex-col items-start justify-start text-black">
          <a className="hover:text-[#F3BA2F] mt-2 text-[12px] sm:text-[15px]" href="https://trustwallet.com/">Join the community</a>
          <a className="hover:text-[#F3BA2F] mt-2 text-[12px] sm:text-[15px]" href="https://dappbay.bnbchain.org/">Privacy policy</a>
        </div>
        <div className="flex flex-col items-start justify-start text-black">
          <img className="w-[14em] h-[8em] relative" src={logo} />
        </div>
        <div className="flex flex-col items-start justify-start text-black">

          </div>
      </div>

      <div className="flex flex-row sm:flex-row text-[12px] sm:text-sm p-3 gap-2 text-center items-center justify-center text-black">
        Powered by<a className="text-[16px] text-[#34a853]" href="https://upraisertech.vercel.app">upraisertech</a>
      </div>
    </>
  );
};

export default Footer;
