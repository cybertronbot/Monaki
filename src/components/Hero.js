import React from "react";
import hero from "../../src/assets/man.png";
import mask from "../../src/assets/mask.png";
import bottom from "../../src/assets/bottom.png";
import Navbar from "./Navbar";
import NewCollection from "./NewCollection";

function Hero() {
  return (
    <div className="xl:h-screen">
      <Navbar />
      <div className="">
        <div className="">
          <div className="flex justify-between xl:flex-row flex-col items-center xl:gap-0 gap-5 border-t-[1px] border-b-[1px] v relative  border-[#fff] px-4  xl:px-14 w-full">
            <div className="flex flex-1 flex-col  border-[#fff]">
              <h1 className="text-white otf xl:text-[97px] text-[40px] leading-[50px] xl:leading-[110px] xl:mt-0 mt-14">
                Virtual <br/> world
              </h1>
              <h4 className="monument-ultra text-[#A3A3A3] xl:text-base text-sm xl:w-[708px]">
                WELCOME TO Monaki! MEET OUR COLLECTION OF 3.333 UNIQUE NFT.
                SUPPORT AND JOIN OUR COMMUNITY, A NEW WORLD ARE WAITING FOR YOU.
              </h4>
            </div>
            <div className="flex justify-center  flex-1 relative w-[100%] items-center pt-6">
              <img src={hero} className="z-10" alt="hero" />
              <img src={mask} className="absolute rotate " alt="mask" />
            </div>
          </div>
        </div>
    
      </div>
      <NewCollection />
    </div>
  );
}

export default Hero;
