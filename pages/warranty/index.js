import React from "react";

function Warranty() {
  return (
    <div className="lg:px-[96px] py-[90px] px-6 font-general-sans bg-[#D7F3FF] min-h-screen">
      <h1 className="text-[32px] font-semibold text-center lg:text-left">
        VIAS Cabinet Warranty
      </h1>
      <div className="flex items-center justify-center mt-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="88"
          height="88"
          viewBox="0 0 88 88"
          fill="none"
        >
          <circle opacity="0.5" cx="44" cy="44" r="44" fill="#023E8A" />
        </svg>
      </div>
      <div className="mt-7">
        <p className="text-center text-sm lg:text-base text-[16px] lg:px-[100px] leading-8 font-medium text-[#565656]">
          There are a lot of on-line companies selling Ready-to-Assemble Kitchen
          Cabinets and Bathroom Vanities, but very few are willing to stand by
          their product. As a direct importer, we are confident in the cabinets
          we sell and we are willing to back it up with a 5 year warranty.
        </p>
      </div>
      <div className="mt-8">
        <h1 className="text-[32px] font-semibold text-black text-center">
          Five Year Limited Warranty
        </h1>
        <p className="lg:px-[100px] text-sm lg:text-base text-center mt-6 leading-7 font-medium text-[#565656]">
          RTA Cabinet Store warrants its products by providing to the original
          consumer purchaser a LIMITED WARRANTY for a period of FIVE YEARS from
          the original date of purchase. Should any of our products fail due to
          defects in material or workmanship under normal use within this FIVE
          YEAR period, RTA Cabinet Store will at its own discretion repair or
          replace the defective part.
          <br />
          <br />
          This warranty does not cover products which are misused, abused,
          mishandled, improperly installed, improperly stored, changed, modified
          or are subject to extreme temperature or moisture level.
          <br /> <br />
          This warranty is not valid for products used for any purpose other
          than the purpose for which they ere originaly intended. This warranty
          does not include or cover the cost of installation, removal,
          subsequent damage or transportation of the defective product,
          regardless of whether work was performed by a contractor, service f.
          <br />
          <br />
          Variations in color and grain patterns are a natural characteristic of
          wood. Color changes may occur in the finished wood products as a
          result of exposure to light and other elements which are part of the
          aging process. These material variations and changes are not covered
          by this warranty.
        </p>
      </div>
    </div>
  );
}

export default Warranty;
