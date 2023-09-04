import React from "react";
import RealCard from "./Card";

function RealCardRow({ className }) {
  return (
    <>
      <div
        className={`${className} hidden lg:grid grid-cols-3 gap-[40px] w-full shrink-0 transition-all duration-1000`}
      >
        <RealCard
          image={
            "https://res.cloudinary.com/dccmraknj/image/upload/v1693848155/Rectangle_37_egf4fh.png"
          }
          title={"Marie D. Mount Prospect, II"}
        />
        <RealCard
          image={
            "https://res.cloudinary.com/dccmraknj/image/upload/v1693848155/Rectangle_51_wcgtoe.png"
          }
          title={"Julie S. Mount Prospect, II"}
        />
        <RealCard
          image={
            "https://res.cloudinary.com/dccmraknj/image/upload/v1693848154/Rectangle_52_tu3rwe.png"
          }
          title={"Robert J. Mount Prospect, II"}
        />
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
