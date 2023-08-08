import React from "react";

function OrderStatus() {
  return (
    <div>
      <div className='h-[420px] font-general-sans flex flex-col items-center justify-center bg-[url("https://res.cloudinary.com/db9kd4qbi/image/upload/v1691511634/Dtory/vias/Rectangle_54_gaksml.png")]'>
        <h1 className="text-5xl text-white font-semibold">
          Check your order status
        </h1>
        <input
          placeholder="Enter your tracking id#"
          className="lg:w-[430px] h-[55px] px-5 rounded-lg mt-10 w-[95%] bg-[#F0F0F0]"
          type="text"
          name=""
          id=""
        />
        <button className="lg:w-[430px] h-[50px] text-white font-medium mt-4 w-[95%] bg-[#023E8A] rounded-lg">
          Track Now
        </button>
      </div>
      <div className="lg:px-[96px] py-[90px] px-6 font-general-sans bg-[#D7F3FF] min-h-screen">
        <h2 className="font-semibold text-black text-[40px]">How it works:</h2>
        <div className="flex items-center justify-center mt-20 space-x-16">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="h-[96px] w-[96px] flex items-center justify-center bg-[#023E8A] rounded-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="45"
                viewBox="0 0 46 45"
                fill="none"
              >
                <path
                  d="M4.25 12.6562C4.25 11.2887 4.79325 9.97721 5.76023 9.01023C6.72722 8.04325 8.03873 7.5 9.40625 7.5H36.5938C37.9613 7.5 39.2728 8.04325 40.2398 9.01023C41.2068 9.97721 41.75 11.2887 41.75 12.6562V32.3438C41.75 33.0209 41.6166 33.6914 41.3575 34.317C41.0984 34.9425 40.7186 35.511 40.2398 35.9898C39.761 36.4686 39.1925 36.8484 38.567 37.1075C37.9414 37.3666 37.2709 37.5 36.5938 37.5H9.40625C8.72912 37.5 8.05862 37.3666 7.43304 37.1075C6.80745 36.8484 6.23903 36.4686 5.76023 35.9898C5.28143 35.511 4.90162 34.9425 4.6425 34.317C4.38337 33.6914 4.25 33.0209 4.25 32.3438V12.6562ZM31.9625 13.5375C31.699 13.2737 31.3416 13.1253 30.9688 13.125H26.2812C25.9083 13.125 25.5506 13.2732 25.2869 13.5369C25.0232 13.8006 24.875 14.1583 24.875 14.5312C24.875 14.9042 25.0232 15.2619 25.2869 15.5256C25.5506 15.7893 25.9083 15.9375 26.2812 15.9375H27.575L24.35 19.1606C24.2118 19.2894 24.101 19.4446 24.0242 19.6171C23.9473 19.7896 23.906 19.9758 23.9026 20.1646C23.8993 20.3535 23.934 20.541 24.0048 20.7161C24.0755 20.8912 24.1808 21.0503 24.3143 21.1838C24.4478 21.3174 24.6069 21.4226 24.782 21.4934C24.9571 21.5641 25.1447 21.5988 25.3335 21.5955C25.5223 21.5922 25.7085 21.5508 25.881 21.474C26.0535 21.3971 26.2088 21.2863 26.3375 21.1481L29.5625 17.925V19.2188C29.5625 19.5917 29.7107 19.9494 29.9744 20.2131C30.2381 20.4768 30.5958 20.625 30.9688 20.625C31.3417 20.625 31.6994 20.4768 31.9631 20.2131C32.2268 19.9494 32.375 19.5917 32.375 19.2188V14.5312C32.3747 14.1584 32.2263 13.801 31.9625 13.5375ZM15.0312 31.875H19.7206C20.0936 31.875 20.4513 31.7268 20.715 31.4631C20.9787 31.1994 21.1269 30.8417 21.1269 30.4688C21.1269 30.0958 20.9787 29.7381 20.715 29.4744C20.4513 29.2107 20.0936 29.0625 19.7206 29.0625H18.4269L21.6519 25.8375C21.9079 25.5722 22.0495 25.2169 22.0461 24.8482C22.0427 24.4794 21.8947 24.1268 21.6338 23.8662C21.373 23.6056 21.0202 23.4579 20.6515 23.4548C20.2828 23.4518 19.9276 23.5937 19.6625 23.85L16.4375 27.0712V25.7775C16.4375 25.4045 16.2893 25.0469 16.0256 24.7831C15.7619 24.5194 15.4042 24.3713 15.0312 24.3713C14.6583 24.3713 14.3006 24.5194 14.0369 24.7831C13.7732 25.0469 13.625 25.4045 13.625 25.7775V30.465C13.625 30.838 13.7732 31.1956 14.0369 31.4594C14.3006 31.7231 14.6583 31.8712 15.0312 31.8712V31.875Z"
                  fill="#D7F3FF"
                />
              </svg>
            </div>
            <h2 className="font-semibold text-2xl mt-6">1. Kitchen Size</h2>
            <p className="w-[162px] text-[14px] font-medium text-[#3F3F3F] mt-2">
              Specify your kitchen foot print size
            </p>
          </div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="101"
              height="16"
              viewBox="0 0 101 16"
              fill="none"
            >
              <path
                d="M100.707 8.70711C101.098 8.31658 101.098 7.68342 100.707 7.29289L94.3431 0.928932C93.9526 0.538408 93.3195 0.538408 92.9289 0.928932C92.5384 1.31946 92.5384 1.95262 92.9289 2.34315L98.5858 8L92.9289 13.6569C92.5384 14.0474 92.5384 14.6805 92.9289 15.0711C93.3195 15.4616 93.9526 15.4616 94.3431 15.0711L100.707 8.70711ZM0 9H100V7H0V9Z"
                fill="#023E8A"
              />
            </svg>
          </span>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="h-[96px] w-[96px] flex items-center justify-center bg-[#023E8A] rounded-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="47"
                height="46"
                viewBox="0 0 47 46"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.25 5.75H21.5833V13.4167H33.0833V24.9167H40.75V40.25H25.4167V32.5833H13.9167V21.0833H6.25V5.75ZM29.25 17.25H17.75V28.75H29.25V17.25Z"
                  fill="#D7F3FF"
                />
              </svg>
            </div>
            <h2 className="font-semibold text-2xl mt-6">2. Arrange Cabinets</h2>
            <p className="w-[162px] text-[14px] font-medium text-[#3F3F3F] mt-2">
              Select & arrange your kitchen cabinets
            </p>
          </div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="101"
              height="16"
              viewBox="0 0 101 16"
              fill="none"
            >
              <path
                d="M100.707 8.70711C101.098 8.31658 101.098 7.68342 100.707 7.29289L94.3431 0.928932C93.9526 0.538408 93.3195 0.538408 92.9289 0.928932C92.5384 1.31946 92.5384 1.95262 92.9289 2.34315L98.5858 8L92.9289 13.6569C92.5384 14.0474 92.5384 14.6805 92.9289 15.0711C93.3195 15.4616 93.9526 15.4616 94.3431 15.0711L100.707 8.70711ZM0 9H100V7H0V9Z"
                fill="#023E8A"
              />
            </svg>
          </span>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="h-[96px] w-[96px] flex items-center justify-center bg-[#023E8A] rounded-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="47"
                height="46"
                viewBox="0 0 47 46"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.25 5.75H21.5833V13.4167H33.0833V24.9167H40.75V40.25H25.4167V32.5833H13.9167V21.0833H6.25V5.75ZM29.25 17.25H17.75V28.75H29.25V17.25Z"
                  fill="#D7F3FF"
                />
              </svg>
            </div>
            <h2 className="font-semibold text-2xl mt-6">3. Review Design</h2>
            <p className="w-[162px] text-[14px] font-medium text-[#3F3F3F] mt-2">
              Review spec sheet & finalize items
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderStatus;
