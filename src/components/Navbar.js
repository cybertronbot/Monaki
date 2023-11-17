import React from "react";

function Navbar() {
  return (
    <div>
      <div className="px-10 h-[77px] flex justify-between items-center ">
        <div>
          <h5 className="text-white text-sm monument-normal">Monaki</h5>
        </div>
        <nav>
          <ul className="flex gap-[54px] items-center text-white text-sm monument-normal">
            <li>HOME</li>
            <li>GALLERY</li>
            <li>DISCORD</li>
          </ul>
        </nav>
        <button className="px-16 py-3 bg-[#FFF] rounded-[120px] shadow-[4px_4px_0_0_#7843E8] text-black text-sm monument-normal">BUY NFT</button>
      </div>
    </div>
  );
}

export default Navbar;
