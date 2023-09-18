import TestimonialCard from "@/components/TestimonialCard";
import React from "react";

function Testimonials() {
  return (
    <div className="lg:px-[96px] py-[90px] px-6 font-general-sans bg-[#D7F3FF] min-h-screen ">
      <h1 className="text-[32px] font-semibold">VIAS Cabinet Store Reviews</h1>
      <p className="leading-7 mt-4">
        We love to hear back from our customers about their home improvement
        projects and our products. Whether you were installing a full kitchen,
        or just remodeling your bathroom, if it involves our RTA Kitchen
        Cabinets or RTA Bathroom Vanities, we want to hear about it (good or
        bad). Use the Customer Feedback section to brag about your handywork or
        throw in a good word about our products and/or service.
      </p>
      <h2 className="mt-10 italic font-bold text-center text-[72px] outline-text">
        579
      </h2>
      <h2 className="-mt-5 font-bold text-[#023E8A] text-center text-[72px]">
        REVIEWS
      </h2>
      <div className="grid grid-cols-1 gap-[80px] lg:px-[100px] mt-[112px] mb-44">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
}

export default Testimonials;
