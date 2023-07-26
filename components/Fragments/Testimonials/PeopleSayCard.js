import React from "react";

function PeopleSayCard() {
  return (
    <div className="p-2">
      <div className="bg-white p-6 rounded-lg flex flex-col">
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => {
            return (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
              >
                <path
                  d="M11.6434 1.09764C11.7556 0.752152 12.2444 0.752153 12.3566 1.09764L14.61 8.03268C14.6602 8.18719 14.8042 8.2918 14.9666 8.2918H22.2585C22.6218 8.2918 22.7729 8.75665 22.479 8.97018L16.5797 13.2563C16.4482 13.3518 16.3932 13.521 16.4434 13.6755L18.6968 20.6106C18.809 20.9561 18.4136 21.2433 18.1197 21.0298L12.2204 16.7437C12.089 16.6482 11.911 16.6482 11.7796 16.7437L5.88029 21.0298C5.5864 21.2433 5.19097 20.9561 5.30322 20.6106L7.55655 13.6755C7.60675 13.521 7.55176 13.3518 7.42033 13.2563L1.52103 8.97018C1.22714 8.75665 1.37818 8.2918 1.74145 8.2918H9.03338C9.19584 8.2918 9.33982 8.18719 9.39002 8.03268L11.6434 1.09764Z"
                  fill="#FFC01D"
                />
              </svg>
            );
          })}
        </div>
        <p className="text-sm font-normal leading-6 mt-5 text-[#777] mb-6 line-clamp-4 text-ellipsis w-full overflow-hidden whitespace-normal">
          I am absolutely thrilled with the incredible results I achieved using
          Product X! This revolutionary product has completely transformed my
          life in ways I never thought possible. From the very first use, I
          noticed a remarkable difference. My energy levels skyrocketed, and I
          felt like a brand new person
        </p>
        <p className="mt-auto text-sm font-medium">Andrew</p>
      </div>
    </div>
  );
}

export default PeopleSayCard;
