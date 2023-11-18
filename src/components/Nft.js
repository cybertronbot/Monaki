import React from "react";
import nft from "../assets/nft.png";
import people from "../assets/people.png";
import LiveTimer from "./LiveTimer";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Nft = () => {
  const [width, setWidth] = useState(0);
  const container = useRef();

  useEffect(() => {
    setWidth(container.current.scrollWidth - container.current.offsetWidth);
  }, []);

  return (
    <motion.div className="xl:p-20 lg:p-10 py-10 px-5">
      <div>
        <motion.div className="sm:hidden flex">
          <motion.div
            ref={container}
            className="w-[100%] flex cursor-grab overflow-hidden   "
          >
            <motion.div
              className="inline-flex"
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              whileTap={{ cursor: "grabbing" }}
            >
              <ul className="flex  gap-10">
                <li className="">
                  <div className="w-[375px]">
                    <div className="p-[20px] w-full bg-[#FFF89F]  xl:mx-0 rounded-lg shadow-[8px_8px_0_0_#000]">
                      <div className="pb-[26px] flex justify-between xl:flex-row flex-col items-start xl:items-center">
                        <img src={people} />
                        <div className="flex flex-col gap-2">
                          <h3 className="text-[18px] monument-ultra">
                            Remaining Time
                          </h3>
                          <LiveTimer />
                        </div>
                      </div>
                      <div className="bg-black pt-10 xl:pr-[30px] pr-4 rounded-[21px] ">
                        <img src={nft} />
                      </div>
                      <div className="pt-[20px] flex xl:flex-row flex-col justify-between xl:items-center">
                        <div className="flex flex-col gap-2">
                          <h3 className="text-[18px] monument-ultra">
                            Current Bid
                          </h3>
                          <h3 className="text-[40px] monument-ultra text-[#7843E8]">
                            7 ETH
                          </h3>
                        </div>
                        <button className="xl:px-16 px-8 xl:py-3 py-2 bg-[#7843E8] rounded-[120px] shadow-[4px_4px_0_0_#000] text-white uppercase text-sm monument-normal">
                          Bid Now
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="">
                  <div className="w-[375px]">
                    <div className="p-[20px] w-full bg-[#FFF89F]  xl:mx-0 rounded-lg shadow-[8px_8px_0_0_#000]">
                      <div className="pb-[26px] flex justify-between xl:flex-row flex-col items-start xl:items-center">
                        <img src={people} />
                        <div className="flex flex-col gap-2">
                          <h3 className="text-[18px] monument-ultra">
                            Remaining Time
                          </h3>
                          <LiveTimer />
                        </div>
                      </div>
                      <div className="bg-black pt-10 xl:pr-[30px] pr-4 rounded-[21px] ">
                        <img src={nft} />
                      </div>
                      <div className="pt-[20px] flex xl:flex-row flex-col justify-between xl:items-center">
                        <div className="flex flex-col gap-2">
                          <h3 className="text-[18px] monument-ultra">
                            Current Bid
                          </h3>
                          <h3 className="text-[40px] monument-ultra text-[#7843E8]">
                            7 ETH
                          </h3>
                        </div>
                        <button className="xl:px-16 px-8 xl:py-3 py-2 bg-[#7843E8] rounded-[120px] shadow-[4px_4px_0_0_#000] text-white uppercase text-sm monument-normal">
                          Bid Now
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Nft;
