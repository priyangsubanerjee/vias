import React from "react";
import RealCard from "./Card";

function RealCardRow({ className }) {
  return (
    <div
      className={`${className} grid grid-cols-3 gap-[48px] w-full shrink-0 transition-all duration-1000`}
    >
      <RealCard />
      <RealCard />
      <RealCard />
    </div>
  );
}

export default RealCardRow;
