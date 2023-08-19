import React, { useState } from "react";

function Cart() {
  const [state, setState] = useState("address");
  return (
    <div className="lg:px-[96px] py-[90px] px-6 font-general-sans bg-[#D7F3FF] min-h-screen">
      <div className="flex justify-center">
        <div className="flex flex-col items-center justify-center space-y-2">
          <span
            className={`h-9 w-9 flex items-center border border-[#000] justify-center font-semibold bg-black text-[#fff] rounded-full`}
          >
            1
          </span>
          <span className="text-[14px] font-medium">Cart</span>
        </div>

        <div className="w-[195px] bg-transparent border-t border-[#ADADAD] border-dashed mt-5"></div>

        <div className="flex flex-col items-center justify-center space-y-2">
          <span
            className={`h-9 w-9 flex items-center border border-[#777777] justify-center font-semibold bg-black/0 text-[#777777] rounded-full`}
          >
            2
          </span>
          <span className="text-[14px] text-[#777777] font-medium">
            Address
          </span>
        </div>

        <div className="w-[195px] bg-transparent border-t border-[#ADADAD] border-dashed mt-5"></div>

        <div className="flex flex-col items-center justify-center space-y-2">
          <span
            className={`h-9 w-9 flex items-center border border-[#777777] justify-center font-semibold bg-black/0 text-[#777777] rounded-full`}
          >
            3
          </span>
          <span className="text-[14px] text-[#777777] font-medium">
            Payment
          </span>
        </div>
      </div>
      {state == "cart" && (
        <div className="flex space-x-10 mt-16">
          <div className="w-[720px] shrink-0">
            <h1 className="text-[18px] font-medium">Shopping Cart</h1>
            <div className="bg-[#F2F2F2] border border-[#777777] p-5 space-y-10 rounded-[16px] mt-4">
              <div className="product">
                <div className="flex space-x-4">
                  <div className="h-[135px] w-[135px] border border-[#777] bg-neutral-50 rounded-md shrink-0"></div>
                  <div className="w-full">
                    <div className="flex h-fit w-full items-center justify-between">
                      <h2 className="font-medium text-[18px]">
                        Weston White Shaker
                      </h2>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                        >
                          <path
                            d="M14.1064 25.8917L25.8931 14.1084M14.1064 14.1084L25.8931 25.8917"
                            stroke="#1B1B1B"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center text-[14px]">
                      <p className="text-[#666666]">Model #WESTONWHITESHAKER</p>
                      <div className="mx-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="none"
                        >
                          <circle cx="2" cy="2" r="2" fill="#666666" />
                        </svg>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M2.49967 11.2499L1.87467 9.99992H6.24967L5.74967 8.74992H1.66634L1.04134 7.49992H7.54134L7.04134 6.24992H0.924674L0.208008 4.99992H3.33301C3.33301 4.55789 3.5086 4.13397 3.82116 3.82141C4.13372 3.50885 4.55765 3.33325 4.99967 3.33325H14.9997V6.66659H17.4997L19.9997 9.99992V14.1666H18.333C18.333 14.8296 18.0696 15.4655 17.6008 15.9344C17.1319 16.4032 16.496 16.6666 15.833 16.6666C15.17 16.6666 14.5341 16.4032 14.0652 15.9344C13.5964 15.4655 13.333 14.8296 13.333 14.1666H9.99967C9.99967 14.8296 9.73628 15.4655 9.26744 15.9344C8.7986 16.4032 8.16272 16.6666 7.49967 16.6666C6.83663 16.6666 6.20075 16.4032 5.73191 15.9344C5.26307 15.4655 4.99967 14.8296 4.99967 14.1666H3.33301V11.2499H2.49967ZM15.833 15.4166C16.1645 15.4166 16.4825 15.2849 16.7169 15.0505C16.9513 14.816 17.083 14.4981 17.083 14.1666C17.083 13.8351 16.9513 13.5171 16.7169 13.2827C16.4825 13.0483 16.1645 12.9166 15.833 12.9166C15.5015 12.9166 15.1835 13.0483 14.9491 13.2827C14.7147 13.5171 14.583 13.8351 14.583 14.1666C14.583 14.4981 14.7147 14.816 14.9491 15.0505C15.1835 15.2849 15.5015 15.4166 15.833 15.4166ZM17.083 7.91658H14.9997V9.99992H18.7163L17.083 7.91658ZM7.49967 15.4166C7.83119 15.4166 8.14914 15.2849 8.38356 15.0505C8.61798 14.816 8.74967 14.4981 8.74967 14.1666C8.74967 13.8351 8.61798 13.5171 8.38356 13.2827C8.14914 13.0483 7.83119 12.9166 7.49967 12.9166C7.16815 12.9166 6.85021 13.0483 6.61579 13.2827C6.38137 13.5171 6.24967 13.8351 6.24967 14.1666C6.24967 14.4981 6.38137 14.816 6.61579 15.0505C6.85021 15.2849 7.16815 15.4166 7.49967 15.4166Z"
                              fill="#023E8A"
                            />
                          </svg>
                        </div>
                        <p className="text-[#666]">
                          <span className="text-[#023E8A] font-medium">
                            Express
                          </span>{" "}
                          delivery in{" "}
                          <span className="font-semibold text-[#111]">
                            3 days
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center mt-5">
                      <div>
                        <p className="text-[#023E8A] font-medium text-[14px]">
                          Unit Price
                        </p>
                        <p className="text-[20px] font-semibold text-[#1b1b1b]">
                          $9.80
                        </p>
                      </div>
                      <div className="ml-10">
                        <p className="text-[#023E8A] font-medium text-[14px]">
                          Subtotal
                        </p>
                        <p className="text-[20px] font-semibold text-[#1b1b1b]">
                          $19.80
                        </p>
                      </div>
                      <div className="flex items-center space-x-2 ml-auto">
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 3.89 3.89 3 5 3ZM17 11H7V13H17V11Z"
                              fill="#343434"
                            />
                          </svg>
                        </button>
                        <span className="text-[#1b1b1b]">1</span>
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M17 13H13V17H11V13H7V11H11V7H13V11H17M19 3H5C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3Z"
                              fill="#343434"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[1px] bg-[#ADADAD] w-full mt-10"></div>
              </div>
              <div className="product">
                <div className="flex space-x-4">
                  <div className="h-[135px] w-[135px] border border-[#777] bg-neutral-50 rounded-md shrink-0"></div>
                  <div className="w-full">
                    <div className="flex h-fit w-full items-center justify-between">
                      <h2 className="font-medium text-[18px]">
                        Weston White Shaker
                      </h2>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                        >
                          <path
                            d="M14.1064 25.8917L25.8931 14.1084M14.1064 14.1084L25.8931 25.8917"
                            stroke="#1B1B1B"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center text-[14px]">
                      <p className="text-[#666666]">Model #WESTONWHITESHAKER</p>
                      <div className="mx-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="none"
                        >
                          <circle cx="2" cy="2" r="2" fill="#666666" />
                        </svg>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M2.49967 11.2499L1.87467 9.99992H6.24967L5.74967 8.74992H1.66634L1.04134 7.49992H7.54134L7.04134 6.24992H0.924674L0.208008 4.99992H3.33301C3.33301 4.55789 3.5086 4.13397 3.82116 3.82141C4.13372 3.50885 4.55765 3.33325 4.99967 3.33325H14.9997V6.66659H17.4997L19.9997 9.99992V14.1666H18.333C18.333 14.8296 18.0696 15.4655 17.6008 15.9344C17.1319 16.4032 16.496 16.6666 15.833 16.6666C15.17 16.6666 14.5341 16.4032 14.0652 15.9344C13.5964 15.4655 13.333 14.8296 13.333 14.1666H9.99967C9.99967 14.8296 9.73628 15.4655 9.26744 15.9344C8.7986 16.4032 8.16272 16.6666 7.49967 16.6666C6.83663 16.6666 6.20075 16.4032 5.73191 15.9344C5.26307 15.4655 4.99967 14.8296 4.99967 14.1666H3.33301V11.2499H2.49967ZM15.833 15.4166C16.1645 15.4166 16.4825 15.2849 16.7169 15.0505C16.9513 14.816 17.083 14.4981 17.083 14.1666C17.083 13.8351 16.9513 13.5171 16.7169 13.2827C16.4825 13.0483 16.1645 12.9166 15.833 12.9166C15.5015 12.9166 15.1835 13.0483 14.9491 13.2827C14.7147 13.5171 14.583 13.8351 14.583 14.1666C14.583 14.4981 14.7147 14.816 14.9491 15.0505C15.1835 15.2849 15.5015 15.4166 15.833 15.4166ZM17.083 7.91658H14.9997V9.99992H18.7163L17.083 7.91658ZM7.49967 15.4166C7.83119 15.4166 8.14914 15.2849 8.38356 15.0505C8.61798 14.816 8.74967 14.4981 8.74967 14.1666C8.74967 13.8351 8.61798 13.5171 8.38356 13.2827C8.14914 13.0483 7.83119 12.9166 7.49967 12.9166C7.16815 12.9166 6.85021 13.0483 6.61579 13.2827C6.38137 13.5171 6.24967 13.8351 6.24967 14.1666C6.24967 14.4981 6.38137 14.816 6.61579 15.0505C6.85021 15.2849 7.16815 15.4166 7.49967 15.4166Z"
                              fill="#023E8A"
                            />
                          </svg>
                        </div>
                        <p className="text-[#666]">
                          <span className="text-[#023E8A] font-medium">
                            Express
                          </span>{" "}
                          delivery in{" "}
                          <span className="font-semibold text-[#111]">
                            3 days
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center mt-5">
                      <div>
                        <p className="text-[#023E8A] font-medium text-[14px]">
                          Unit Price
                        </p>
                        <p className="text-[20px] font-semibold text-[#1b1b1b]">
                          $9.80
                        </p>
                      </div>
                      <div className="ml-10">
                        <p className="text-[#023E8A] font-medium text-[14px]">
                          Subtotal
                        </p>
                        <p className="text-[20px] font-semibold text-[#1b1b1b]">
                          $19.80
                        </p>
                      </div>
                      <div className="flex items-center space-x-2 ml-auto">
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 3.89 3.89 3 5 3ZM17 11H7V13H17V11Z"
                              fill="#343434"
                            />
                          </svg>
                        </button>
                        <span className="text-[#1b1b1b]">1</span>
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M17 13H13V17H11V13H7V11H11V7H13V11H17M19 3H5C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3Z"
                              fill="#343434"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-[18px] font-medium">Coupons</h1>
            <div className="h-[65px] border border-[#BEBEBE] bg-[#F0F0F0] mt-5 rounded-lg flex items-center px-5">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_465_2574)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.5371 2.16395C10.9409 2.12722 11.3479 2.1727 11.7336 2.29765C12.1192 2.4226 12.4756 2.62443 12.7811 2.89095L12.9311 3.03095L20.7531 10.854C21.2914 11.3924 21.6049 12.1153 21.63 12.8763C21.655 13.6372 21.3898 14.3793 20.8881 14.952L20.7531 15.096L15.0961 20.753C14.5577 21.2913 13.8347 21.6047 13.0738 21.6298C12.3128 21.6549 11.5708 21.3897 10.9981 20.888L10.8541 20.753L3.03011 12.93C2.74358 12.6434 2.51807 12.3019 2.36717 11.9258C2.21627 11.5498 2.14311 11.147 2.15211 10.742L2.16311 10.537L2.63511 5.35195C2.6957 4.68374 2.97856 4.05512 3.43846 3.56658C3.89836 3.07803 4.50876 2.75776 5.17211 2.65695L5.35111 2.63595L10.5371 2.16395ZM8.02411 8.02495C7.83835 8.21071 7.691 8.43123 7.59047 8.67393C7.48994 8.91663 7.4382 9.17676 7.4382 9.43945C7.4382 9.70215 7.48994 9.96228 7.59047 10.205C7.691 10.4477 7.83835 10.6682 8.02411 10.854C8.20986 11.0397 8.43039 11.1871 8.67309 11.2876C8.91579 11.3881 9.17591 11.4399 9.43861 11.4399C9.7013 11.4399 9.96143 11.3881 10.2041 11.2876C10.4468 11.1871 10.6674 11.0397 10.8531 10.854C11.2283 10.4788 11.439 9.96999 11.439 9.43945C11.439 8.90891 11.2283 8.4001 10.8531 8.02495C10.478 7.6498 9.96915 7.43905 9.43861 7.43905C8.90807 7.43905 8.39926 7.6498 8.02411 8.02495Z"
                      fill="#1B1B1B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_465_2574">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <p className="font-semibold ml-3">Coupons</p>
              <span className="bg-[#023E8A] text-white rounded-md px-2 py-1 text-[14px] ml-auto">
                VIAS200
              </span>
              <button className="ml-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M15 15L3 3M15 3L3 15"
                    stroke="#777777"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
            </div>
            <p className="text-[#023E8A] font-semibold mt-3 text-[13px]">
              You applied a coupon and claimed 20% OFF.
            </p>
            <h1 className="text-[18px] font-medium mt-10">Price Details</h1>
            <div className="bg-[#F2F2F2] border border-[#777777] p-5 rounded-[16px] mt-4">
              <ul className="space-y-3">
                <li className="flex items-center justify-between">
                  <span className="text-[#777777] font-medium text-[14px]">
                    1x Weston White Shaker
                  </span>
                  <span className="text-[#1b1b1b] font-medium">$90.80</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-[#777777] font-medium text-[14px]">
                    1x Weston White Shaker
                  </span>
                  <span className="text-[#1b1b1b] font-medium">$90.80</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-[#777777] font-medium text-[14px]">
                    1x Weston White Shaker
                  </span>
                  <span className="text-[#1b1b1b] font-medium">$90.80</span>
                </li>
              </ul>
              <ul className="space-y-3 mt-3">
                <li className="flex items-center justify-between">
                  <span className="text-[#023E8A] font-medium text-[14px]">
                    Coupon discount
                  </span>
                  <span className="text-[#023E8A] font-medium">-$5.80</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-[#777777] font-medium text-[14px]">
                    Delivery charges
                  </span>
                  <span className="text-[#1B1B1B] font-medium">$7.50</span>
                </li>
              </ul>
              <div className="h-[1px] bg-[#777] w-full mt-10"></div>
              <div className="flex items-center justify-between mt-4">
                <p className="text-[18px] text-black font-semibold">
                  Total Amount
                </p>
                <p className="text-[18px] text-black font-semibold">$269.7</p>
              </div>
              <div className="mt-4">
                <button className="h-[50px] bg-black text-white rounded-md w-full flex items-center justify-center">
                  <span>Proceed to checkout</span>
                  <span className="ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="12"
                      viewBox="0 0 14 12"
                      fill="none"
                    >
                      <path
                        d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM13.5303 6.53033C13.8232 6.23744 13.8232 5.76256 13.5303 5.46967L8.75736 0.696699C8.46447 0.403806 7.98959 0.403806 7.6967 0.696699C7.40381 0.989593 7.40381 1.46447 7.6967 1.75736L11.9393 6L7.6967 10.2426C7.40381 10.5355 7.40381 11.0104 7.6967 11.3033C7.98959 11.5962 8.46447 11.5962 8.75736 11.3033L13.5303 6.53033ZM1 6.75H13V5.25H1V6.75Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {state == "address" && (
        <div className="flex space-x-10 mt-16">
          <div className="w-[720px] shrink-0">
            <h1 className="text-[18px] font-medium mt-10">Contact details</h1>
            <input
              type="text"
              className="px-5 w-[431px] mt-3 h-[55px] border border-[#BEBEBE] rounded-lg bg-[#F0F0F0]"
              placeholder="Email address"
              name=""
              id=""
            />
            <h1 className="text-[18px] font-medium mt-10">Shipping details</h1>
            <div className="grid grid-cols-2 gap-4 mt-5">
              <input
                type="text"
                className="px-5 w-full h-[55px] border border-[#BEBEBE] rounded-lg bg-[#F0F0F0] placeholder:text-[#777]"
                placeholder="First name"
                name=""
                id=""
              />
              <input
                type="text"
                className="px-5 w-full h-[55px] border border-[#BEBEBE] rounded-lg bg-[#F0F0F0] placeholder:text-[#777]"
                placeholder="Last name"
                name=""
                id=""
              />
              <input
                type="text"
                className="px-5 col-span-2 w-full h-[55px] border border-[#BEBEBE] rounded-lg bg-[#F0F0F0] placeholder:text-[#777]"
                placeholder="Address"
                name=""
                id=""
              />
              <input
                type="text"
                className="px-5 col-span-2 w-full h-[55px] border border-[#BEBEBE] rounded-lg bg-[#F0F0F0] placeholder:text-[#777]"
                placeholder="Apartment, suite, etc. (optional)"
                name=""
                id=""
              />
              <input
                type="text"
                className="px-5 w-full h-[55px] border border-[#BEBEBE] rounded-lg bg-[#F0F0F0] placeholder:text-[#777]"
                placeholder="City"
                name=""
                id=""
              />
              <input
                type="text"
                className="px-5 w-full h-[55px] border border-[#BEBEBE] rounded-lg bg-[#F0F0F0] placeholder:text-[#777]"
                placeholder="State"
                name=""
                id=""
              />
              <input
                type="text"
                className="px-5 w-full h-[55px] border border-[#BEBEBE] rounded-lg bg-[#F0F0F0] placeholder:text-[#777]"
                placeholder="Pincode"
                name=""
                id=""
              />
              <input
                type="text"
                className="px-5 w-full h-[55px] border border-[#BEBEBE] rounded-lg bg-[#F0F0F0] placeholder:text-[#777]"
                placeholder="Phone number"
                name=""
                id=""
              />
            </div>
            <div className="mt-5 flex items-center space-x-2">
              <input type="checkbox" name="" id="" />
              <span className="text-[13px] font-medium text-[#777]">
                Save this information for next time
              </span>
            </div>
            <button className="mt-10 flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14 7L9 12L14 17"
                  stroke="#1B1B1B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="text-[#1b1b1b] font-medium">Return to cart</span>
            </button>
          </div>
          <div className="w-full">
            <h1 className="text-[18px] font-medium mt-10">Price Details</h1>
            <div className="bg-[#F2F2F2] border border-[#777777] p-5 rounded-[16px] mt-4">
              <ul className="space-y-3">
                <li className="flex items-center justify-between">
                  <span className="text-[#777777] font-medium text-[14px]">
                    1x Weston White Shaker
                  </span>
                  <span className="text-[#1b1b1b] font-medium">$90.80</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-[#777777] font-medium text-[14px]">
                    1x Weston White Shaker
                  </span>
                  <span className="text-[#1b1b1b] font-medium">$90.80</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-[#777777] font-medium text-[14px]">
                    1x Weston White Shaker
                  </span>
                  <span className="text-[#1b1b1b] font-medium">$90.80</span>
                </li>
              </ul>
              <ul className="space-y-3 mt-3">
                <li className="flex items-center justify-between">
                  <span className="text-[#023E8A] font-medium text-[14px]">
                    Coupon discount
                  </span>
                  <span className="text-[#023E8A] font-medium">-$5.80</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-[#777777] font-medium text-[14px]">
                    Delivery charges
                  </span>
                  <span className="text-[#1B1B1B] font-medium">$7.50</span>
                </li>
              </ul>
              <div className="h-[1px] bg-[#777] w-full mt-10"></div>
              <div className="flex items-center justify-between mt-4">
                <p className="text-[18px] text-black font-semibold">
                  Total Amount
                </p>
                <p className="text-[18px] text-black font-semibold">$269.7</p>
              </div>
              <div className="mt-4">
                <button className="h-[50px] bg-black text-white rounded-md w-full flex items-center justify-center">
                  <span>Proceed to payment</span>
                  <span className="ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="12"
                      viewBox="0 0 14 12"
                      fill="none"
                    >
                      <path
                        d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM13.5303 6.53033C13.8232 6.23744 13.8232 5.76256 13.5303 5.46967L8.75736 0.696699C8.46447 0.403806 7.98959 0.403806 7.6967 0.696699C7.40381 0.989593 7.40381 1.46447 7.6967 1.75736L11.9393 6L7.6967 10.2426C7.40381 10.5355 7.40381 11.0104 7.6967 11.3033C7.98959 11.5962 8.46447 11.5962 8.75736 11.3033L13.5303 6.53033ZM1 6.75H13V5.25H1V6.75Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
