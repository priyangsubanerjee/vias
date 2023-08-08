import React from "react";

function FAQ() {
  return (
    <div>
      <div className="hidden h-[420px] bg-[url('https://res.cloudinary.com/db9kd4qbi/image/upload/v1691514128/Dtory/vias/faq_tcgifd.png')] lg:flex flex-col items-center justify-center">
        <h1 className="text-[48px] font-semibold text-center text-white">
          Help Center
        </h1>
        <div className="bg-white flex items-center w-[500px] h-[46px] px-6 rounded mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.2658 12.0274C16.305 10.6877 16.7947 9.00245 16.6354 7.31448C16.4761 5.6265 15.6797 4.06261 14.4083 2.94097C13.1368 1.81933 11.4858 1.22419 9.79117 1.27663C8.0965 1.32907 6.48546 2.02515 5.28581 3.22326C4.0851 4.4222 3.38675 6.03386 3.33305 7.72981C3.27936 9.42577 3.87437 11.0784 4.99683 12.3509C6.11929 13.6234 7.68472 14.42 9.37412 14.5783C11.0635 14.7367 12.7497 14.2449 14.0891 13.2033L14.125 13.2408L17.66 16.7766C17.7374 16.854 17.8293 16.9154 17.9305 16.9573C18.0316 16.9992 18.1401 17.0208 18.2496 17.0208C18.3591 17.0208 18.4675 16.9992 18.5686 16.9573C18.6698 16.9154 18.7617 16.854 18.8391 16.7766C18.9166 16.6992 18.978 16.6072 19.0199 16.5061C19.0618 16.4049 19.0834 16.2965 19.0834 16.187C19.0834 16.0775 19.0618 15.9691 19.0199 15.8679C18.978 15.7668 18.9166 15.6748 18.8391 15.5974L15.3033 12.0624C15.2911 12.0504 15.2786 12.0387 15.2658 12.0274ZM13.5358 4.40242C14.0063 4.86532 14.3805 5.4168 14.6368 6.02504C14.8931 6.63328 15.0265 7.28624 15.0291 7.94627C15.0318 8.60631 14.9038 9.26034 14.6525 9.87064C14.4011 10.4809 14.0314 11.0355 13.5647 11.5022C13.098 11.9689 12.5435 12.3386 11.9332 12.5899C11.3229 12.8413 10.6689 12.9693 10.0088 12.9666C9.34879 12.9639 8.69582 12.8306 8.08758 12.5743C7.47935 12.318 6.92787 11.9438 6.46497 11.4733C5.5399 10.533 5.02385 9.26529 5.02922 7.94627C5.03459 6.62726 5.56095 5.36379 6.49365 4.4311C7.42634 3.4984 8.6898 2.97205 10.0088 2.96667C11.3278 2.9613 12.5955 3.47736 13.5358 4.40242Z"
              fill="#565656"
            />
          </svg>
          <input
            className="font-general-sans ml-4 w-full outline-none"
            placeholder="Type your question"
            type="text"
            name=""
            id=""
          />
        </div>
      </div>
      <div className="lg:px-[96px] py-[90px] px-6 font-general-sans bg-[#D7F3FF]">
        <h1 className="text-[32px] font-semibold">
          Need assistance? We&apos;re here to support you.
        </h1>
        <p className="text-[14px] text-[#565656] mt-2">
          From assembly to order status find help for everything.
        </p>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-start mt-16 lg:items-center space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="h-[251px] w-[251px] border border-[#B0B0B0] rounded-lg flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="96"
              height="96"
              viewBox="0 0 96 96"
              fill="none"
            >
              <path
                d="M81 13.5H15C13.0109 13.5 11.1032 14.2902 9.6967 15.6967C8.29018 17.1032 7.5 19.0109 7.5 21V60C7.5 61.9891 8.29018 63.8968 9.6967 65.3033C11.1032 66.7098 13.0109 67.5 15 67.5H81C82.9891 67.5 84.8968 66.7098 86.3033 65.3033C87.7098 63.8968 88.5 61.9891 88.5 60V21C88.5 19.0109 87.7098 17.1032 86.3033 15.6967C84.8968 14.2902 82.9891 13.5 81 13.5ZM79.5 58.5H16.5V22.5H79.5V58.5ZM88.5 78C88.5 79.1935 88.0259 80.3381 87.182 81.182C86.3381 82.0259 85.1935 82.5 84 82.5H12C10.8065 82.5 9.66193 82.0259 8.81802 81.182C7.97411 80.3381 7.5 79.1935 7.5 78C7.5 76.8065 7.97411 75.6619 8.81802 74.818C9.66193 73.9741 10.8065 73.5 12 73.5H84C85.1935 73.5 86.3381 73.9741 87.182 74.818C88.0259 75.6619 88.5 76.8065 88.5 78ZM39 48V33C38.9997 32.1966 39.2145 31.4078 39.6221 30.7155C40.0297 30.0231 40.6153 29.4525 41.3179 29.063C42.0205 28.6734 42.8146 28.479 43.6177 28.5C44.4209 28.521 45.2037 28.7567 45.885 29.1825L57.885 36.6825C58.5329 37.0869 59.0672 37.6494 59.4376 38.3173C59.8081 38.9851 60.0024 39.7363 60.0024 40.5C60.0024 41.2637 59.8081 42.0149 59.4376 42.6827C59.0672 43.3506 58.5329 43.9131 57.885 44.3175L45.885 51.8175C45.2037 52.2433 44.4209 52.479 43.6177 52.5C42.8146 52.521 42.0205 52.3266 41.3179 51.937C40.6153 51.5475 40.0297 50.9769 39.6221 50.2845C39.2145 49.5922 38.9997 48.8034 39 48Z"
                fill="#023E8A"
              />
            </svg>
            <span className="text-[18px] text-[#023E8A] mt-6">Videos</span>
          </div>
          <div className="h-[251px] w-[251px] border border-[#B0B0B0] rounded-lg flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="96"
              height="96"
              viewBox="0 0 96 96"
              fill="none"
            >
              <path
                d="M76 20V76H20V20H76ZM84 12H12V84H84V12ZM68 68H28V64H68V68ZM68 60H28V56H68V60ZM68 48H28V28H68V48Z"
                fill="#023E8A"
              />
            </svg>
            <span className="text-[18px] text-[#023E8A] mt-6">Blogs</span>
          </div>
        </div>
        <h1 className="text-[32px] font-semibold mt-32">
          Frequently Asked Questions
        </h1>
        <div className="flex lg:space-x-6 mt-8">
          <div className="hidden lg:block w-[250px] h-[300px] bg-white rounded-lg"></div>
          <div className="w-full h-[500px] bg-white rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
