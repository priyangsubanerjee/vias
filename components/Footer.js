import React from "react";

function Footer() {
  return (
    <div className="bg-[#023E8A] px-[96px] py-[70px] font-general-sans">
      <h1 className="font-bold text-3xl text-[#D7F3FF]">VIAS.</h1>
      <div className="mt-12 grid grid-cols-5">
        <div>
          <span className="text-white font-medium">Customer Service</span>
          <ul className="text-[#CCCCCC] space-y-3 mt-4 text-sm">
            <li>Contact us</li>
            <li>Order status</li>
            <li>FAQ</li>
            <li>Submit a Claim</li>
          </ul>
        </div>
        <div>
          <span className="text-white font-medium">General Info</span>
          <ul className="text-[#CCCCCC] space-y-3 mt-4 text-sm">
            <li>Customer Reviews</li>
            <li>Shipping & Return Policy</li>
            <li>VIAS Cabinet Warranty</li>
            <li>Privacy Notice</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <span className="text-white font-medium">Inspiration</span>
          <ul className="text-[#CCCCCC] space-y-3 mt-4 text-sm">
            <li>Kitchen Design Tool </li>
            <li>Installation & Assembly</li>
            <li>Resources/inspiration</li>
            <li>VIAS in the Media</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <span className="text-white font-medium">Account</span>
          <ul className="text-[#CCCCCC] space-y-3 mt-4 text-sm">
            <li>Create an account</li>
            <li>Log out</li>
            <li>Shopping Cart</li>
          </ul>
        </div>
        <div>
          <span className="text-white font-medium">Subscribe to newletter</span>
          <form className="flex items-center bg-white w-[236px] h-[40px] mt-3">
            <input
              type="text"
              className="bg-transparent outline-none w-full text-sm px-3 font-medium font-general-sans"
              placeholder="Your email id"
              name=""
              id=""
            />
            <button className="flex items-center justify-center h-full bg-[#D7F3FF] shrink-0 px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
              >
                <path
                  d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM17.5303 6.53033C17.8232 6.23744 17.8232 5.76256 17.5303 5.46967L12.7574 0.696699C12.4645 0.403806 11.9896 0.403806 11.6967 0.696699C11.4038 0.989593 11.4038 1.46447 11.6967 1.75736L15.9393 6L11.6967 10.2426C11.4038 10.5355 11.4038 11.0104 11.6967 11.3033C11.9896 11.5962 12.4645 11.5962 12.7574 11.3033L17.5303 6.53033ZM1 6.75H17V5.25H1V6.75Z"
                  fill="#023E8A"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
