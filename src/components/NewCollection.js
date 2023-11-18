import React from "react";


import col from "../../src/assets/col.png";
import col1 from "../../src/assets/col1.png";

function NewCollection() {
  return (
    <div className="bg-[#7843E8] px-14 py-10">
      <div className="flex justify-between items-center">
     
        <div className="flex flex-1 items-center gap-[20px]">
          <img src={col} />
          <div className="flex flex-col ">
            <h4 className="text-[32px] text-white otf">KABE</h4>
            <h5 className=" text-[#DCDCDC] monument-ultra">Lead Artist</h5>
            <p className="text-xs text-[#DCDCDC] monument-ultra leading-[20px] xl:w-[304px]">
              Award-winning illustrator with an international portfolio
              including clients in film, publishing & the gaming industry. When
              he's not creating awesome artwork, Kabe is wreaking havoc in the
              world of table-top RPGs.
            </p>
          </div>
        </div>
        <div className="flex flex-1 justify-end items-center gap-[20px]">
          <img src={col1} />
          <div className="flex flex-col ">
            <h4 className="text-[32px] text-white otf">KABE</h4>
            <h5 className=" text-[#DCDCDC] monument-ultra">Lead Artist</h5>
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
