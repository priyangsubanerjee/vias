import React from "react";

function Login() {
  return (
    <div className="lg:px-[96px] py-[90px] px-6 font-general-sans bg-[#D7F3FF] min-h-screen">
      <div className="w-[500px] p-7 rounded-[16px] border border-[#B0B0B0] mx-auto">
        <h1 className="text-[32px] font-semibold text-black">Sign In</h1>
        <form action="" className="mt-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email / Phone number
            </label>
            <input
              type="text"
              className="px-5 w-full mt-3 h-[60px] border border-[#BEBEBE] rounded-lg bg-[#F0F0F0]"
              name=""
              id=""
            />
          </div>
          <div className="mt-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="text"
              className="px-5 w-full mt-3 h-[60px] border border-[#BEBEBE] rounded-lg bg-[#F0F0F0]"
              name=""
              id=""
            />
          </div>
          <div className="mt-6">
            <button className="h-[50px] bg-[#023E8A] w-full rounded-lg text-[#D7F3FF]">
              Sign In
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center whitespace-nowrap mt-10">
          <div className="h-[1px] bg-[#A0A0A0] w-full"></div>
          <span className="px-4 text-[#A0A0A0]">OR</span>
          <div className="h-[1px] bg-[#A0A0A0] w-full"></div>
        </div>
        <div className="mt-10 space-y-4">
          <button className="w-full border border-black h-12 rounded-lg space-x-3 text-[#1B1B1B] font-medium flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M22.3055 10.0415H21.5V10H12.5V14H18.1515C17.327 16.3285 15.1115 18 12.5 18C9.1865 18 6.5 15.3135 6.5 12C6.5 8.6865 9.1865 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C6.9775 2 2.5 6.4775 2.5 12C2.5 17.5225 6.9775 22 12.5 22C18.0225 22 22.5 17.5225 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
                fill="#FFC107"
              />
              <path
                d="M3.65283 7.3455L6.93833 9.755C7.82733 7.554 9.98033 6 12.4998 6C14.0293 6 15.4208 6.577 16.4803 7.5195L19.3088 4.691C17.5228 3.0265 15.1338 2 12.4998 2C8.65883 2 5.32783 4.1685 3.65283 7.3455Z"
                fill="#FF3D00"
              />
              <path
                d="M12.5002 22.0003C15.0832 22.0003 17.4302 21.0118 19.2047 19.4043L16.1097 16.7853C15.0719 17.5745 13.8039 18.0014 12.5002 18.0003C9.89916 18.0003 7.69066 16.3418 6.85866 14.0273L3.59766 16.5398C5.25266 19.7783 8.61366 22.0003 12.5002 22.0003Z"
                fill="#4CAF50"
              />
              <path
                d="M22.3055 10.0415H21.5V10H12.5V14H18.1515C17.7571 15.1082 17.0467 16.0766 16.108 16.7855L16.1095 16.7845L19.2045 19.4035C18.9855 19.6025 22.5 17 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
                fill="#1976D2"
              />
            </svg>
            <span>Continue with Google</span>
          </button>
          <button className="w-full border border-black h-12 rounded-lg space-x-3 text-[#1B1B1B] font-medium flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <g clip-path="url(#clip0_194_2969)">
                <path
                  d="M24.5 12C24.5 5.37262 19.1274 0 12.5 0C5.87262 0 0.5 5.37253 0.5 12C0.5 17.9895 4.88825 22.954 10.625 23.8542V15.4688H7.57812V12H10.625V9.35625C10.625 6.34875 12.4166 4.6875 15.1575 4.6875C16.4705 4.6875 17.8438 4.92188 17.8438 4.92188V7.875H16.3306C14.8398 7.875 14.375 8.80003 14.375 9.74906V12H17.7031L17.1711 15.4688H14.375V23.8542C20.1117 22.954 24.5 17.9896 24.5 12Z"
                  fill="#1877F2"
                />
                <path
                  d="M17.1711 15.4688L17.7031 12H14.375V9.74906C14.375 8.79994 14.8399 7.875 16.3306 7.875H17.8438V4.92188C17.8438 4.92188 16.4705 4.6875 15.1575 4.6875C12.4166 4.6875 10.625 6.34875 10.625 9.35625V12H7.57812V15.4688H10.625V23.8542C11.2453 23.9514 11.8722 24.0002 12.5 24C13.1278 24.0002 13.7547 23.9514 14.375 23.8542V15.4688H17.1711Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_194_2969">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span>Continue with Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
