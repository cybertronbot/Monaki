import React from "react";

function Footer() {
  return (
    <div>
      <div className="flex justify-between items-center xl:px-[92px] xl:flex-row flex-col gap-5 xl:gap-0 px-4 py-[50px]">
        <button className="xl:px-16 px-8 xl:py-3 py-2 border-[1px] border-[#FFF] rounded-[120px] shadow-[4px_4px_0_0_#000] text-white uppercase text-sm monument-normal">
          Bid Now
        </button>
        <button className="xl:px-16 px-8 xl:py-3 py-2 bg-[#7843E8] rounded-[120px] shadow-[4px_4px_0_0_#FFF] text-white uppercase text-sm monument-normal">
         Virtual art
        </button>
        <button className="xl:px-16 px-8 xl:py-3 py-2 border-[1px] border-[#FFF] rounded-[120px] shadow-[4px_4px_0_0_#000] text-white uppercase text-sm monument-normal">
         artwork
        </button>
        <button className="xl:px-16 px-8 xl:py-3 py-2 border-[1px] border-[#FFF] rounded-[120px] shadow-[4px_4px_0_0_#000] text-white uppercase text-sm monument-normal">
      giraffe network
        </button>
        <button className="xl:px-16 px-8 xl:py-3 py-2 border-[1px] border-[#FFF] rounded-[120px] shadow-[4px_4px_0_0_#000] text-white uppercase text-sm monument-normal">
          physical network
        </button>
      </div>
    </div>
  );
}

export default Footer;
