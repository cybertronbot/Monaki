import React from "react";
import nft from "../assets/nft.png";
import people from "../assets/people.png";
import nft1 from "../assets/NFT1.png";
function VirtualWorld() {
  return (
    <div className="xl:px-16 bg-[#FFF253] ">
      <div className="flex xl:flex-row flex-col items-center relative">
        <div className="flex flex-1 border-r-[1px] border-[#000] py-10">
          <div className="p-[20px] bg-[#FFF89F] mx-4 xl:mx-0 rounded-lg shadow-[8px_8px_0_0_#000]">
            <div className="pb-[26px] flex justify-between xl:flex-row flex-col items-start xl:items-center">
              <img src={people} />
              <div className="flex flex-col gap-2">
                <h3 className="text-[18px] monument-ultra">Remaining Time</h3>
                <h3 className="text-[22px] monument-ultra text-[#7843E8]">
                  09H : 11M : 07s
                </h3>
              </div>
            </div>
            <div className="bg-black pt-10 xl:pr-[30px] pr-4 rounded-[21px] ">
              <img src={nft} />
            </div>
            <div className="pt-[20px] flex justify-between items-center">
              <div className="flex flex-col gap-2">
                <h3 className="text-[18px] monument-ultra">Current Bid</h3>
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
        <div className="flex flex-1 flex-col pl-4 xl:pl-12">
          <h5 className="monument-ultra text-[18px]">December 14, 2022</h5>
          <h2 className="otf xl:text-5xl text-2xl text-[#7843E8] xl:pt-[20px] pb-4 xl:pb-7">
            Rare <br /> Virtual World
          </h2>
          <h5 className="monument-ultra text-[18px]">Owned By OXOJ</h5>
          <p className="monument-ultra xl:w-[561px] text-sm pt-5 xl:pt-[62px]">
            A NEW WAVE OF COLLECTIBLES IS ABOUT TO HIT THE ETHEREUM BLOCKCHAIN.
            A SET OF 3.333 UNIQUE COLLECTABLES, THE ADDITION TO YOUR NFT
            COLLECTION YOUVE BEEN WAITING FOR.
          </p>
          
        </div>
        <div className="-right-12 absolute bottom-0">
            <img src={nft1} />
          </div>
      </div>
    </div>
  );
}

export default VirtualWorld;
