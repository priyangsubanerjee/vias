import React from "react";
import RealCard from "./Card";

function RealCardRow({ className }) {
  return (
    <>
      <div
        className={`${className} hidden lg:grid grid-cols-3 gap-[48px] w-full shrink-0 transition-all duration-1000`}
      >
        <RealCard />
        <RealCard />
        <RealCard />
      </div>
      <div
        className={`${className} grid place-content-center place-items-center lg:hidden grid-cols-1 gap-[48px] w-full shrink-0 transition-all duration-1000`}
      >
        <RealCard />
      </div>
    </>
  );
}

export default RealCardRow;
