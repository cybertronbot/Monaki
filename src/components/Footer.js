import React from "react";

function Footer() {
  return (
    <div>
      <div className="flex justify-between items-center  md:flex-row flex-col gap-5 xl:px-14 md:px-8 py-[50px]">
        <button className="xl:px-16 px-8 md:px-10  xl:py-3 py-2 border-[1px] border-[#FFF] rounded-[120px] shadow-[4px_4px_0_0_#000] text-white uppercase xl:text-sm text-xs monument-normal">
          Bid Now
        </button>
        <button className="xl:px-16 px-8 md:px-10  xl:py-3 py-2 bg-[#7843E8] rounded-[120px] shadow-[4px_4px_0_0_#FFF] text-white uppercase xl:text-sm text-xs monument-normal">
         Virtual art
        </button>
        <button className="xl:px-16 px-8 md:px-10 xl:py-3 py-2 border-[1px] border-[#FFF] rounded-[120px] shadow-[4px_4px_0_0_#000] text-white uppercase xl:text-sm text-xs monument-normal">
         artwork
        </button>
        <button className="xl:px-16 px-8 md:px-10 xl:py-3 py-2 border-[1px] border-[#FFF] rounded-[120px] shadow-[4px_4px_0_0_#000] text-white uppercase xl:text-sm text-xs monument-normal">
      giraffe network
        </button>
        <button className="xl:px-16 px-8 md:px-10 xl:py-3 py-2 border-[1px] border-[#FFF] rounded-[120px] shadow-[4px_4px_0_0_#000] text-white uppercase xl:text-sm text-xs monument-normal">
          physical network
        </button>
      </div>
    </div>
  );
}

export default Footer;
