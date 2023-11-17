import React from "react";
import hero from "../../src/assets/man.png";
import mask from "../../src/assets/mask.png";
import { useEffect, useRef } from "react";

function Hero() {
  
  return (
    <div>
      <div className="flex justify-between items-center h-[calc(100vh-72px)] px-14 v relative ">
        <div className="flex flex-1 flex-col  border-[#fff]">
          <h1 className="text-white otf text-[97px] leading-[110px]">
            Virtual world
          </h1>
          <h4 className="monument-ultra text-[#A3A3A3] xl:w-[708px]">
            WELCOME TO Monaki! MEET OUR COLLECTION OF 3.333 UNIQUE NFT. SUPPORT
            AND JOIN OUR COMMUNITY, A NEW WORLD ARE WAITING FOR YOU.
          </h4>
        </div>
        <div className="flex justify-center  flex-1 relative w-[100%] items-center">
          <img src={hero} className="z-10" alt="hero" />
          <img  src={mask} className="absolute rotate " alt="mask" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
