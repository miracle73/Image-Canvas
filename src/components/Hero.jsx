import React from "react";
import logo from "../assets/dv.png";
import cup from "../assets/cup-code.webp";
import globe from "../assets/globe-doodle.webp";
import sp_avatar_1 from "../assets/sp_avatar_1.webp";
import sp_avatar_2 from "../assets/sp_avatar_2.webp";
const Hero = () => {
  return (
    <div className="h-[550px] sm:h-[450px]">
      <section className="flex pt-3 flex-col items-center justify-center">
        <div className="flex flex-col justify-center items-start">
          <img className="w-[14em] h-[8em] relative" src={logo} />
          <img alt="" src={cup} />
        </div>
        <div className="mx-auto lg:text-left text-center">
          <h2 className="md:text-6xl text-5xl leading-normal text-black font-bold">
            Pepper demmm!🥳
          </h2>
          <div className="flex lg:text-lg text-md mt-4 font-bold text-center text-gray-500 items-center justify-between">
            <img alt="" className="w-[80px]" src={sp_avatar_2} />
            <span>Generate and share your unique <br/> Devfest Lagos 2023 DP</span>
            <img alt="" className="w-[80px]" src={sp_avatar_1} />
          </div>
        </div>

        <img alt="" src={globe} />
      </section>
    </div>
  );
};

export default Hero;
