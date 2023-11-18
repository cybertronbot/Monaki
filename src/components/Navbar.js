import React from "react";

function Navbar() {
  return (
    <div>
      <div className="xl:px-10 px-4 xl:h-[77px] border-t-[1px] border-[#fff] relative nav h-[60px] flex justify-between items-center ">
        <div className="">
          <h5 className="text-white text-sm monument-normal">Monaki</h5>
        </div>
        <nav className="xl:flex hidden">
          <ul className="flex gap-[54px] items-center text-white text-sm monument-normal">
            <li>HOME</li>
            <li>GALLERY</li>
            <li>DISCORD</li>
          </ul>
        </nav>
        <button className="xl:px-16 px-8 xl:py-3 py-2 bg-[#FFF] rounded-[120px] shadow-[4px_4px_0_0_#7843E8] text-black text-sm monument-normal">BUY NFT</button>
      </div>
    </div>
  );
}

export default Navbar;
