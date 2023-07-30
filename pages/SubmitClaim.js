import React from "react";

function SubmitClaim() {
  return (
    <div className="lg:px-[96px] lg:py-[90px] px-6 py-10 font-general-sans bg-[#D7F3FF] min-h-screen">
      <h1 className="lg:text-[32px] text-xl font-semibold">
        Product Damages And Fulfillment: Claims Form
      </h1>
      <div className="flex mt-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="shrink-0"
          fill="none"
        >
          <path
            d="M11 17H13V11H11V17ZM12 9C12.2833 9 12.521 8.904 12.713 8.712C12.905 8.52 13.0007 8.28267 13 8C13 7.71667 12.904 7.479 12.712 7.287C12.52 7.095 12.2827 6.99933 12 7C11.7167 7 11.479 7.096 11.287 7.288C11.095 7.48 10.9993 7.71733 11 8C11 8.28333 11.096 8.521 11.288 8.713C11.48 8.905 11.7173 9.00067 12 9ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6867 5.825 19.9743 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26333 14.6833 2.00067 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31333 6.88333 4.02567 5.825 4.925 4.925C5.825 4.025 6.88333 3.31267 8.1 2.788C9.31667 2.26333 10.6167 2.00067 12 2C13.3833 2 14.6833 2.26267 15.9 2.788C17.1167 3.31333 18.175 4.02567 19.075 4.925C19.975 5.825 20.6877 6.88333 21.213 8.1C21.7383 9.31667 22.0007 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6867 17.1167 19.9743 18.175 19.075 19.075C18.175 19.975 17.1167 20.6877 15.9 21.213C14.6833 21.7383 13.3833 22.0007 12 22Z"
            fill="#333333"
          />
        </svg>
        <div className="ml-2">
          <p>
            Note: Please make sure you&apos;ve inspected your entire order and
            you have photos of any damages before proceeding.
          </p>
          <ul className="list-disc pl-4 mt-6">
            <li>
              Get more information on how to make a claim{" "}
              <a className="text-[#023E8A] font-semibold" href="">
                here!
              </a>
            </li>
            <li>Have any other questions: call us at 800-580-5535.</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center mt-20 w-full">
        <div className="w-full lg:w-[870px] p-6 lg:p-10 border border-[#B0B0B0] rounded-2xl">
          <h2 className="text-center font-semibold text-[#1B1B1B]">
            Get started! Enter your order number and billing zip code to start
            your claim!
          </h2>

          <div className="flex flex-col items-center mt-7 space-y-5">
            <input
              className="bg-[#F0F0F0] border border-[#BEBEBE] w-full lg:w-[431px] h-[60px] rounded-lg px-4"
              type="text"
              placeholder="Your Order #"
              name=""
              id=""
            />
            <input
              type="text"
              placeholder="Your Billing Zip Code"
              className="bg-[#F0F0F0] border border-[#BEBEBE] w-full lg:w-[431px] h-[60px] rounded-lg px-4"
              name=""
              id=""
            />

            <button className="bg-[#023E8A] border border-[#023E8A] w-full lg:w-[431px] py-3 text-white rounded-lg font-medium">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmitClaim;
