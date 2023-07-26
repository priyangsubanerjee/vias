/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import PeopleSayCard from "@/components/Fragments/Testimonials/PeopleSayCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import WhatPeopleSay from "@/components/Fragments/Testimonials/WhatPeopleSay";
import Real from "@/components/Fragments/Realkitchen";
import ShopByCategory from "@/components/Fragments/ShopByCategory/index.js.js";
import Youtube from "@/components/Fragments/Youtube";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="font-general-sans">
      <div className="flex flex-col-reverse lg:flex-row lg:h-[600px] pb-24 lg:pb-[100px] px-6 py-[30px] lg:px-[96px] lg:py-[90px] bg-[#D7F3FF]">
        <div className="lg:w-1/2 mt-7 lg:mt-0">
          <p className="uppercase font-semibold tracking-[0.08125rem] text-xs">
            Fast. <span className="text-[#0070E0]">Affordable</span>. Stylish.
          </p>
          <h1 className="text-3xl lg:text-5xl font-medium lg:font-bold mt-5">
            Quality VIAS Cabinets
          </h1>
          <ul className="mt-10 space-y-6 text-sm font-medium">
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5ZM10.5 16.1925L6.75 12.4425L7.9425 11.25L10.5 13.8075L16.0575 8.25L17.2545 9.4395L10.5 16.1925Z"
                  fill="#023E8A"
                />
              </svg>
              <span>3 Day Quick Ship Guaranteed</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5ZM10.5 16.1925L6.75 12.4425L7.9425 11.25L10.5 13.8075L16.0575 8.25L17.2545 9.4395L10.5 16.1925Z"
                  fill="#023E8A"
                />
              </svg>
              <span>0% APR 12 Month Financing</span>
            </li>{" "}
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5ZM10.5 16.1925L6.75 12.4425L7.9425 11.25L10.5 13.8075L16.0575 8.25L17.2545 9.4395L10.5 16.1925Z"
                  fill="#023E8A"
                />
              </svg>
              <span>FREE Kitchen Design Services</span>
            </li>
          </ul>
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-5 text-sm font-medium">
            <button className="text-white bg-[#023E8A] hover:bg-[#001f47] h-[47px] rounded-lg">
              Explore Cabinets
            </button>
            <button className="h-[47px] rounded-lg hover:bg-[#002b6333] border text-[#0070E0] border-[#0070E0]">
              Get Free Design & Quote
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <img
            className="h-full object-cover"
            src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1689826520/Dtory/vias/Right_Side_epqb6g.png"
            alt=""
          />
        </div>
      </div>
      <WhatPeopleSay />
      <Real />
      <ShopByCategory />
      <Youtube />
      <Footer />
      {/*
       */}
    </main>
  );
}
