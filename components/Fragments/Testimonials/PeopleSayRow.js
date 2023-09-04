import React from "react";
import PeopleSayCard from "./PeopleSayCard";

function PeopleSayRow({ className }) {
  return (
    <>
      <div
        className={`${className} grid grid-cols-1 lg:grid-cols-3 gap-6 w-full shrink-0 transition-all duration-1000`}
      >
        <PeopleSayCard
          description={
            "I am absolutely thrilled with the incredible results I achieved using Product X! This revolutionary product has completely transformed my life in ways I never thought possible. From the very first use, I noticed a remarkable difference. My energy levels skyrocketed, and I felt like a brand new person"
          }
          name={"Andrew"}
        />
        <PeopleSayCard
          description={
            "I am absolutely thrilled with the incredible results I achieved using Product X! This revolutionary product has completely transformed my life in ways I never thought possible. From the very first use, I noticed a remarkable difference. My energy levels skyrocketed, and I felt like a brand new person"
          }
          name={"Ben Rogers"}
        />
        <PeopleSayCard
          description={
            "I am absolutely thrilled with the incredible results I achieved using Product X! This revolutionary product has completely transformed my life in ways I never thought possible. From the very first use, I noticed a remarkable difference. My energy levels skyrocketed, and I felt like a brand new person Katie"
          }
          name={"Katie"}
        />
      </div>
    </>
  );
}

export default PeopleSayRow;
