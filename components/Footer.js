/* eslint-disable @next/next/no-img-element */
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="footer bg-[#023E8A] lg:px-[96px] lg:py-[70px] font-general-sans px-6 py-[50px]">
      <Link href="/">
        <img
          src="https://res.cloudinary.com/dccmraknj/image/upload/v1695040305/static/vias_cabinets_pomoq9.png"
          alt=""
          className="h-10 lg:h-12"
        />
      </Link>
      <div className="mt-12 grid gap-16 grid-cols-1 lg:grid-cols-5">
        <div>
          <span className="text-white font-medium">Customer Service</span>
          <ul className="text-[#CCCCCC] space-y-3 mt-4 text-sm">
            <Link href="/contact" className="block">
              <li>Contact us</li>
            </Link>
            <Link href="/orderstatus" className="block">
              <li>Order status</li>
            </Link>
            <Link href="/faq" className="block">
              <li>FAQ</li>
            </Link>
            <Link href="/submitclaim" className="block">
              <li>Submit a Claim</li>
            </Link>
          </ul>
        </div>
        <div>
          <span className="text-white font-medium">General Info</span>
          <ul className="text-[#CCCCCC] space-y-3 mt-4 text-sm">
            <Link href="/reviews" className="block">
              <li>Customer Reviews</li>
            </Link>
            <Link href="/shippingPolicy" className="block">
              <li>Shipping & Return Policy</li>
            </Link>
            <Link href="/warranty" className="block">
              <li>VIAS Cabinet Warranty</li>
            </Link>
            <Link href="/privacy" className="block">
              <li>Privacy Notice</li>
            </Link>
            <Link href="/faq" className="block">
              <li>Help Center</li>
            </Link>
          </ul>
        </div>
        <div>
          <span className="text-white font-medium">Inspiration</span>
          <ul className="text-[#CCCCCC] space-y-3 mt-4 text-sm">
            <Link href="/media" className="block">
              <li>VIAS in the Media</li>
            </Link>
            <Link href="/blogs" className="block">
              <li>Blog</li>
            </Link>
          </ul>
        </div>
        <div>
          <span className="text-white font-medium">Account</span>
          <ul className="text-[#CCCCCC] space-y-3 mt-4 text-sm">
            <Link href="/register" className="block">
              <li>Create an account</li>
            </Link>
            <li onClick={() => signOut()}>Log out</li>
            <Link href="/cart" className="block">
              <li>Shopping Cart</li>
            </Link>
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
      <div className="mt-20 space-y-16 lg:space-y-0 lg:flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-3">
            <div className="bg-white px-4 h-[40px] flex items-center justify-center rounded">
              <img
                src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1690370342/Dtory/vias/Visa_Inc._svg_xh3fdd.svg"
                alt=""
              />
            </div>
            <div className="bg-white px-4 h-[40px] flex items-center justify-center rounded">
              <img
                src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1690370342/Dtory/vias/PayPal_svg_taaqxt.svg"
                alt=""
              />
            </div>
            <div className="bg-white px-4 h-[40px] flex items-center justify-center rounded">
              <img
                src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1690370342/Dtory/vias/Mastercard_svg_nxjevw.svg"
                alt=""
              />
            </div>
            <div className="bg-white px-4 h-[40px] flex items-center justify-center rounded">
              <img
                src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1690370343/Dtory/vias/discover_cwtk1j.png"
                alt=""
              />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-[13px] font-semibold text-[#90E0EF] font-general-sans">
              100% Secure Payment
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-[24px]">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.19776 21.5H13.1978V13.49H16.8018L17.1978 9.51H13.1978V7.5C13.1978 7.23478 13.3031 6.98043 13.4907 6.79289C13.6782 6.60536 13.9325 6.5 14.1978 6.5H17.1978V2.5H14.1978C12.8717 2.5 11.5999 3.02678 10.6622 3.96447C9.72454 4.90215 9.19776 6.17392 9.19776 7.5V9.51H7.19776L6.80176 13.49H9.19776V21.5Z"
                fill="white"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                fill="white"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.244 4C12.778 4.003 14.114 4.016 15.534 4.073L16.038 4.095C17.467 4.162 18.895 4.278 19.604 4.475C20.549 4.741 21.291 5.515 21.542 6.497C21.942 8.057 21.992 11.099 21.998 11.836L21.999 11.988V12.162C21.992 12.899 21.942 15.942 21.542 17.501C21.288 18.486 20.545 19.261 19.604 19.523C18.895 19.72 17.467 19.836 16.038 19.903L15.534 19.926C14.114 19.982 12.778 19.996 12.244 19.998L12.009 19.999H11.754C10.624 19.992 5.898 19.941 4.394 19.523C3.45 19.257 2.707 18.483 2.456 17.501C2.056 15.941 2.006 12.899 2 12.162V11.836C2.006 11.099 2.056 8.056 2.456 6.497C2.71 5.512 3.453 4.737 4.395 4.476C5.898 4.057 10.625 4.006 11.755 4H12.244ZM9.999 8.5V15.5L15.999 12L9.999 8.5Z"
                fill="white"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M22.2121 5.65593C21.449 5.99352 20.6397 6.2153 19.8111 6.31393C20.6842 5.79106 21.3374 4.96866 21.6491 3.99993C20.8291 4.48793 19.9301 4.82993 18.9941 5.01493C18.3647 4.34151 17.5305 3.89489 16.6211 3.74451C15.7117 3.59413 14.7781 3.74842 13.9654 4.18338C13.1527 4.61834 12.5065 5.30961 12.1272 6.14972C11.748 6.98983 11.6569 7.93171 11.8681 8.82893C10.2051 8.74572 8.57809 8.31365 7.09287 7.56079C5.60764 6.80793 4.29736 5.7511 3.24713 4.45893C2.87542 5.09738 2.68008 5.82315 2.68113 6.56193C2.68113 8.01193 3.42012 9.29293 4.54112 10.0429C3.87714 10.022 3.22777 9.84267 2.64713 9.51993V9.57093C2.64709 10.5368 2.98116 11.4729 3.59266 12.2206C4.20415 12.9682 5.05544 13.4814 6.00212 13.6729C5.38577 13.8401 4.73942 13.8648 4.11212 13.7449C4.37905 14.5763 4.89934 15.3034 5.60012 15.8243C6.30091 16.3453 7.14708 16.6339 8.02013 16.6499C7.15248 17.3314 6.15901 17.8351 5.09653 18.1323C4.03406 18.4295 2.92341 18.5143 1.82812 18.3819C3.73985 19.6113 5.96523 20.264 8.23812 20.2619C15.9321 20.2619 20.1381 13.8889 20.1381 8.36193C20.1381 8.18193 20.1341 7.99993 20.1261 7.82093C20.9445 7.22928 21.6509 6.49549 22.2121 5.65593Z"
                fill="white"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16.6002 5.82C15.9166 5.03962 15.5399 4.03743 15.5402 3H12.4502V15.4C12.4263 16.071 12.143 16.7066 11.6599 17.1729C11.1768 17.6393 10.5316 17.8999 9.86016 17.9C8.44016 17.9 7.26016 16.74 7.26016 15.3C7.26016 13.58 8.92016 12.29 10.6302 12.82V9.66C7.18016 9.2 4.16016 11.88 4.16016 15.3C4.16016 18.63 6.92016 21 9.85016 21C12.9902 21 15.5402 18.45 15.5402 15.3V9.01C16.7932 9.90985 18.2975 10.3926 19.8402 10.39V7.3C19.8402 7.3 17.9602 7.39 16.6002 5.82Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="border-t-[1px] border-[#ccc] mt-16 pt-6">
        <p className="text-[#ccc] text-sm">
          Copyright ©2023 VIAS CABINET LLC wholesale ready-to-assemble RTA
          kitchen cabinets and bathroom vanities.
        </p>
      </div>
    </div>
  );
}

export default Footer;
