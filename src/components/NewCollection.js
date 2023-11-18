import React from "react";

import col from "../../src/assets/collection1.png";
import col1 from "../../src/assets/col1.png";

function NewCollection() {
  return (
    <div className="bg-[#7843E8] xl:px-14 px-4 py-10">
      <div className="flex md:flex-row flex-col  gap-[60px] items-center">
        <div className="flex flex-1 xl:flex-row flex-col items-center gap-[20px]">
          <div className="p-5 bg-black border-[3px] border-[#fff] rounded-[16px] shadow-[8px_8px_0_0_#FFF253]">
            <img src={col}  />
          </div>
          <div className="flex flex-col ">
            <h4 className="text-[32px] text-white otf">KABE</h4>
            <h5 className=" text-[#DCDCDC] monument-ultra pb-[20px] pt-[6px]">Lead Artist</h5>
            <p className="text-xs text-[#DCDCDC] monument-ultra leading-[20px] xl:w-[304px]">
              Award-winning illustrator with an international portfolio
              including clients in film, publishing & the gaming industry. When
              he's not creating awesome artwork, Kabe is wreaking havoc in the
              world of table-top RPGs.
            </p>
          </div>
        </div>
        <div className="flex flex-1 justify-end  xl:flex-row flex-col items-center gap-[20px]">
          <div className="p-5 bg-black border-[3px] border-[#fff] rounded-[16px] shadow-[8px_8px_0_0_#FFF253]">
            <img src={col} />
          </div>
          <div className="flex flex-col ">
            <h4 className="text-[32px] text-white otf">KABE</h4>
            <h5 className=" text-[#DCDCDC] monument-ultra pb-[20px] pt-[6px]">Lead Artist</h5>
            <p className="text-xs text-[#DCDCDC] monument-ultra leading-[20px] xl:w-[304px]">
              Award-winning illustrator with an international portfolio
              including clients in film, publishing & the gaming industry. When
              he's not creating awesome artwork, Kabe is wreaking havoc in the
              world of table-top RPGs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCollection;
