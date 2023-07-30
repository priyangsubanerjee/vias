/* eslint-disable @next/next/no-img-element */
import React from "react";

function TestimonialCard() {
  return (
    <div className="flex space-x-[13px]">
      <div className="shrink-0 relative w-[48px] h-[48px] lg:w-[64px] lg:h-[64px]">
        <img
          src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1690469294/Dtory/vias/680e5f031341468307693f303873f6ca_n0zbl3.jpg"
          className="w-full h-full rounded-full object-cover shrink-0"
          alt=""
        />
        <div className="rounded-full p-[2px] absolute bottom-0 right-0  bg-[#D7F3FF]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8 1C6.61553 1 5.26216 1.41054 4.11101 2.17971C2.95987 2.94888 2.06266 4.04213 1.53285 5.32122C1.00303 6.6003 0.86441 8.00776 1.13451 9.36563C1.4046 10.7235 2.07129 11.9708 3.05026 12.9497C4.02922 13.9287 5.2765 14.5954 6.63437 14.8655C7.99224 15.1356 9.3997 14.997 10.6788 14.4672C11.9579 13.9373 13.0511 13.0401 13.8203 11.889C14.5895 10.7378 15 9.38447 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1ZM7 10.795L4.5 8.295L5.295 7.5L7 9.205L10.705 5.5L11.503 6.293L7 10.795Z"
              fill="#64B134"
            />
          </svg>
        </div>
      </div>
      <div>
        <div className="flex text-base">
          <span className="font-semibold text-[16px] lg:text-[18px]">
            Judi B.
          </span>
          <span className="text-[#808080] ml-[12px] text-[14px] lg:text-base">
            Verified Buyer
          </span>
          <span className="text-[#808080] ml-auto font-medium">12/07/10</span>
        </div>
        <div className="flex items-center space-x-2 mt-[12px]">
          {[1, 2, 3, 4, 5].map((item, index) => {
            return (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.5245 1.46353C11.6741 1.00287 12.3259 1.00287 12.4755 1.46353L14.5819 7.9463C14.6488 8.15232 14.8408 8.2918 15.0574 8.2918H21.8738C22.3582 8.2918 22.5596 8.9116 22.1677 9.1963L16.6531 13.2029C16.4779 13.3302 16.4046 13.5559 16.4715 13.7619L18.5779 20.2447C18.7276 20.7053 18.2003 21.0884 17.8085 20.8037L12.2939 16.7971C12.1186 16.6698 11.8814 16.6698 11.7061 16.7971L6.19153 20.8037C5.79967 21.0884 5.27243 20.7053 5.42211 20.2447L7.52849 13.7619C7.59543 13.5559 7.5221 13.3302 7.34685 13.2029L1.83227 9.1963C1.44041 8.9116 1.6418 8.2918 2.12616 8.2918H8.94256C9.15917 8.2918 9.35115 8.15232 9.41809 7.9463L11.5245 1.46353Z"
                  fill="#E8AD16"
                />
              </svg>
            );
          })}
        </div>
        <h2 className="mt-[12px] text-[14px] lg:text-base font-semibold lg:font-bold text-[#1B1B1B]">
          Extremely impressed with quality and
        </h2>
        <p className="mt-[8px] text-[14px] lg:text-base text-[#1B1B1B] leading-7">
          Your company is so service oriented. I expected a replacement for the
          irregular piece but received an entire new cabinet and it arrived at
          warped speed. You&apos;re an amazing company with very helpful and
          caring staff.
        </p>
      </div>
    </div>
  );
}

export default TestimonialCard;
