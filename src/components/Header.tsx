import React from "react";
import Image from "next/image";
import Logo from "@/public/image/GameShopLOGO.png";

function Header() {
  return (
    <div className="sticky top-0 z-10 w-full h-14 flex justify-between md:justify-around items-center bg-[#3C1F42]">
      <div className="w-52 h-full flex items-center">
        <div className="w-20 h-9 mr-3">
          <Image
            src={Logo}
            alt="GameShop LOGO"
            className="max-w-full max-h-full"
          />
        </div>
        <span className="text-white font-bold text-sm italic ">
          Pay For Win
        </span>
      </div>
      <div className="bg-[#6242FC] hover:bg-[#4E31DA] rounded-full h-7 w-20 flex justify-center mr-2">
        <button className="text-white font-bold">Sign Up</button>
      </div>
    </div>
  );
}

export default Header;
