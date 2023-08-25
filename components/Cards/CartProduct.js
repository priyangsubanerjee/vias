import React from "react";

function CartProduct() {
  return (
    <div className="product">
      <div className="lg:flex lg:space-x-4">
        <div className="h-[135px] w-[135px] border border-[#777] bg-neutral-50 rounded-md shrink-0"></div>
        <div className="w-full">
          <div className="flex h-fit w-full items-center justify-between">
            <h2 className="font-medium text-[18px]">Weston White Shaker</h2>
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
            <div className="hidden lg:flex items-center space-x-2">
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
                <span className="text-[#023E8A] font-medium">Express</span>{" "}
                delivery in{" "}
                <span className="font-semibold text-[#111]">3 days</span>
              </p>
            </div>
          </div>
          <div className="flex items-center mt-5">
            <div>
              <p className="text-[#023E8A] font-medium text-[14px]">
                Unit Price
              </p>
              <p className="text-[20px] font-semibold text-[#1b1b1b]">$9.80</p>
            </div>
            <div className="ml-10">
              <p className="text-[#023E8A] font-medium text-[14px]">Subtotal</p>
              <p className="text-[20px] font-semibold text-[#1b1b1b]">$19.80</p>
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
  );
}

export default CartProduct;
