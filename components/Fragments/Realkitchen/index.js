import React from "react";
import RealCard from "./Card";

function Real() {
  return (
    <div className="bg-[#D7F3FF] h-[750px] py-[100px] px-[96px]">
      <h1 className="text-center text-[40px] font-general-sans font-medium">
        Real{" "}
        <span className="text-transparent bg-gradient-to-r from-[#0070E0] to-[#023E8A] font-semibold bg-clip-text">
          Kitchens.
        </span>{" "}
        Real{" "}
        <span className="text-transparent bg-gradient-to-r from-[#0070E0] to-[#023E8A] font-semibold bg-clip-text">
          Results.
        </span>
      </h1>
      <p className="text-center text-[13px] mt-2 uppercase tracking-[1.3px] font-semibold text-[#1B1B1B]">
        OUR CUSTOMER&apos;S CREATION
      </p>
      <div className="mt-16">
        <RealCard />
      </div>
    </div>
  );
}

export default Real;
