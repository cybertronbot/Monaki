import React from "react";
import hero from "../../src/assets/man.png";
import mask from "../../src/assets/mask.png";
import bottom from "../../src/assets/bottom.png";
import Navbar from "./Navbar";
import NewCollection from "./NewCollection";

function Hero() {
  return (
    <div className="xl:h-screen ">
      <Navbar />
      <div className="">
        <div className="">
          <div className="flex justify-between h-[calc(100vh-72px-70px)]  md:flex-row flex-col items-center xl:gap-0 gap-5 border-t-[1px] border-b-[1px] v relative  border-[#fff] px-4  xl:px-14  w-full">
            <div className="flex flex-1 flex-col  border-[#fff]">
              <h1 className="text-white otf 2xl:text-[85px] xl:text-[70px] text-[40px] leading-[50px] xl:leading-[85px] 2xl:leading-[110px] xl:mt-0 mt-14">
                Virtual <br /> world
              </h1>
              <h4 className="monument-ultra text-[#A3A3A3] xl:text-base text-sm xl:w-[500px] 2xl:w-[608px] ">
                WELCOME TO Monaki! MEET OUR COLLECTION OF 3.333 UNIQUE NFT.
                SUPPORT AND JOIN OUR COMMUNITY, A NEW WORLD ARE WAITING FOR YOU.
              </h4>
            </div>
            <div className="flex justify-center  flex-1  w-[100%] items-center pt-6">
              <img src={hero} className="z-10 absolute  bottom-0 md:w-[50%] w-full" alt="hero" />
              <img src={mask} className="absolute bottom-0  rotate md:w-[40%] " alt="mask" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[100%]  flex cursor-pointer overflow-hidden">
        <div className="grid h-[70px] border-b-[1px] border-[#fff] items-center ">
          <ul className="slide-track text-white">
            <li className="slide">
              <h4 className="xl:text-[32px] text-[28px] monument-ultra ">
                Our Collection
              </h4>
            </li>
            <li className="slide">
              <h4 className="xl:text-[32px] text-[28px] monument-ultra ">
                Our Collection
              </h4>
            </li>
            <li className="slide">
              <h4 className="xl:text-[32px] text-[28px] monument-ultra ">
                Our Collection
              </h4>
            </li>
            <li className="slide">
              <h4 className="xl:text-[32px] text-[28px] monument-ultra ">
                Our Collection
              </h4>
            </li>
            <li className="slide">
              <h4 className="xl:text-[32px] text-[28px] monument-ultra ">
                Our Collection
              </h4>
            </li>
            <li className="slide">
              <h4 className="xl:text-[32px] text-[28px] monument-ultra ">
                Our Collection
              </h4>
            </li>
            <li className="slide">
              <h4 className="xl:text-[32px] text-[28px] monument-ultra ">
                Our Collection
              </h4>
            </li>
            <li className="slide">
              <h4 className="xl:text-[32px] text-[28px] monument-ultra ">
                Our Collection
              </h4>
            </li>
            <li className="slide">
              <h4 className="xl:text-[32px] text-[28px] monument-ultra ">
                Our Collection
              </h4>
            </li>
            <li className="slide">
              <h4 className="xl:text-[32px] text-[28px] monument-ultra ">
                Our Collection
              </h4>
            </li>
            <li className="slide">
              <h4 className="xl:text-[32px] text-[28px] monument-ultra ">
                Our Collection
              </h4>
            </li>
            <li className="slide">
              <h4 className="xl:text-[32px] text-[28px] monument-ultra ">
                Our Collection
              </h4>
            </li>
            <li className="slide">
              <h4 className="xl:text-[32px] text-[28px] monument-ultra ">
                Our Collection
              </h4>
            </li>
            <li className="slide">
              <h4 className="xl:text-[32px] text-[28px] monument-ultra ">
                Our Collection
              </h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hero;
