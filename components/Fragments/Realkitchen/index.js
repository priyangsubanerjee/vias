import React, { useEffect } from "react";
import RealCard from "./Card";
import RealCardRow from "./Row";

function Real() {
  const [state, setState] = React.useState(0);
  useEffect(() => {
    let firstRealCardRow = document.querySelectorAll(".firstRealCardRow");
    let secondRealCardRow = document.querySelectorAll(".secondRealCardRow");
    let thirdRealCardRow = document.querySelectorAll(".thirdRealCardRow");

    firstRealCardRow.forEach((item) => {
      item.style.transform = `translateX(-${state * 100}%)`;
    });
    secondRealCardRow.forEach((item) => {
      item.style.transform = `translateX(-${state * 100}%)`;
    });

    thirdRealCardRow.forEach((item) => {
      item.style.transform = `translateX(-${state * 100}%)`;
    });
  }, [state]);

  return (
    <div className="bg-[#D7F3FF] h-[750px] lg:py-[100px] lg:px-[96px] px-6 py-[50px]">
      <h1 className="text-center text-[24px] lg:text-[40px] font-general-sans font-medium">
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
      <div className="mt-16 flex overflow-hidden whitespace-nowrap transition-all duration-1000">
        <RealCardRow className="firstRealCardRow" />
        <RealCardRow className="secondRealCardRow" />
        <RealCardRow className="thirdRealCardRow" />
      </div>

      <div className="mt-16 flex items-center justify-center space-x-2">
        <button
          onClick={() => setState(state === 0 ? 2 : state - 1)}
          className="h-[48px] w-[38px] flex items-center justify-center border-[2px] rounded border-[#023E8A]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M11 6.75C11.4142 6.75 11.75 6.41421 11.75 6C11.75 5.58579 11.4142 5.25 11 5.25V6.75ZM0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.46967 5.46967ZM11 5.25L1 5.25V6.75L11 6.75V5.25Z"
              fill="#023E8A"
            />
          </svg>
        </button>
        <button
          onClick={() => setState(state === 2 ? 0 : state + 1)}
          className="h-[48px] w-[38px] flex items-center justify-center border-[2px] rounded border-[#023E8A]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="rotate-180"
          >
            <path
              d="M11 6.75C11.4142 6.75 11.75 6.41421 11.75 6C11.75 5.58579 11.4142 5.25 11 5.25V6.75ZM0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.46967 5.46967ZM11 5.25L1 5.25V6.75L11 6.75V5.25Z"
              fill="#023E8A"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Real;
