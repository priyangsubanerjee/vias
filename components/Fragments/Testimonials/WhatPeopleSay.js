import React, { useEffect } from "react";
import PeopleSayRow from "./PeopleSayRow";
import Link from "next/link";

// 8116626874 - Rahul pal

function WhatPeopleSay() {
  const [state, setState] = React.useState(0);
  useEffect(() => {
    document.querySelector(
      ".firstTestimonialRow"
    ).style.transform = `translateX(-${state * 100}%)`;
    document.querySelector(
      ".secondTestimonialRow"
    ).style.transform = `translateX(-${state * 100}%)`;
    document.querySelector(
      ".thirdTestimonialRow"
    ).style.transform = `translateX(-${state * 100}%)`;
  }, [state]);

  // auto slide testimonial every 5 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setState((state) => (state + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="w-full bg-[#023E8A] lg:bg-[url('https://res.cloudinary.com/db9kd4qbi/image/upload/v1689863610/Dtory/vias/Rectangle_44_blrrmf.png')] bg-cover object-center px-6 py-[50px] lg:px-[96px] lg:py-[90px]">
        <div className="flex items-baseline justify-between">
          <p className="text-2xl lg:text-5xl font-medium text-white w-full lg:w-fit text-center lg:text-left">
            What people say
          </p>
          <Link href={"/testimonials"} className="hidden lg:block">
            <button className="text-[13px] tracking-[1.3px] font-general-sans font-medium text-white hidden lg:block">
              SEE MORE
            </button>
          </Link>
        </div>

        <div className="mt-16 flex overflow-hidden whitespace-nowrap transition-all duration-1000">
          <PeopleSayRow className="firstTestimonialRow" />
          <PeopleSayRow className="secondTestimonialRow" />
          <PeopleSayRow className="thirdTestimonialRow" />
        </div>

        <div className="flex items-center justify-center space-x-3 mt-10">
          {[...Array(3)].map((_, i) => {
            return (
              <div
                onClick={() => setState(i)}
                key={i}
                className={`h-2 w-2  rounded-full border border-white ${
                  state === i ? "bg-white/100" : "bg-white/0"
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WhatPeopleSay;
