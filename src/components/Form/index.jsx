import React from "react";
import CustomiseDP from "./CustomiseDP";

const BuildDPCard = () => {

  return (
    <section className="py-10 px-4 md:px-[10em] xl:px-[20em] bg-black relative">
      <div className="text-lg text-[#c7a761] mb-3">Customise your Devfest DP</div>
      <div className="text-white text-center">
        <CustomiseDP />
      </div>
    </section>
  );
};

export default BuildDPCard;
