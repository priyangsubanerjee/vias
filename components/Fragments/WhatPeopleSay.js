import React from "react";
import PeopleSayCard from "../PeopleSayCard";

function WhatPeopleSay() {
  return (
    <div>
      <div className="w-full bg-[#023E8A] lg:bg-[url('https://res.cloudinary.com/db9kd4qbi/image/upload/v1689863610/Dtory/vias/Rectangle_44_blrrmf.png')] object-cover object-center px-6 py-[50px] lg:px-[96px] lg:py-[90px]">
        <div className="flex items-center justify-between">
          <p className="text-2xl lg:text-5xl font-medium text-white w-full lg:w-fit text-center lg:text-left">
            What people say
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <PeopleSayCard />
          <PeopleSayCard />
          <PeopleSayCard />
        </div>

        <div className="flex items-center justify-center space-x-3 mt-10">
          {[...Array(1)].map((_, i) => {
            return (
              <div
                key={i}
                className="h-2 w-2 bg-white rounded-full border border-white"
              ></div>
            );
          })}
          {[...Array(2)].map((_, i) => {
            return (
              <div
                key={i}
                className="h-2 w-2 bg-white/0 rounded-full border border-white"
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WhatPeopleSay;
