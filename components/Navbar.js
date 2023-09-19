/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import navLinks from "@/static/navlinks";
import { Icon } from "@iconify/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Sidebar from "./Sidebar";
import Marquee from "react-fast-marquee";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const session = useSession();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-center bg-[#606060] h-[50px] font-general-sans font-medium">
        <ul className="flex justify-center items-center space-x-20 text-white text-sm">
          <li className="flex space-x-2 items-center">
            <Icon icon="material-symbols:call" />
            <span>+1 8005805355</span>
          </li>
          <Link className="block" href={"/login"}>
            <li className="flex space-x-2 items-center">
              <Icon height={20} icon="ph:sign-in-bold" />
              <span>Sign in</span>
            </li>
          </Link>
          <Link className="block" href={"/cart"}>
            <li className="flex space-x-2 items-center">
              <Icon icon="fa:shopping-cart" />
              <span>Cart</span>
            </li>
          </Link>
          <Link className="block" href={"/profile"}>
            <li className="flex space-x-2 items-center">
              <Icon icon="mdi:account" height={20} />
              <span>Account</span>
            </li>
          </Link>
        </ul>
      </div>
      <nav
        className={` ${
          true ? "h-[142px] lg:h-[100px]" : " h-[80px] lg:h-[100px]"
        } w-full bg-[#023E8A] lg:bg-[#060606] px-6 lg:px-[96px] flex flex-col justify-center lg:flex-row lg:items-center font-general-sans`}
      >
        <div className="flex items-center w-full lg:w-fit shrink-0">
          <div className="flex items-center space-x-5 lg:space-x-0">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-white lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M24.5 5.83341C24.5 5.18908 23.9777 4.66675 23.3333 4.66675H4.66667C4.02234 4.66675 3.5 5.18908 3.5 5.83341C3.5 6.47775 4.02234 7.00008 4.66667 7.00008H23.3333C23.9777 7.00008 24.5 6.47775 24.5 5.83341ZM17.5 14.0001C17.5 13.3558 16.9777 12.8334 16.3333 12.8334H4.66667C4.02234 12.8334 3.5 13.3558 3.5 14.0001C3.5 14.6444 4.02234 15.1667 4.66667 15.1667H16.3333C16.9777 15.1667 17.5 14.6444 17.5 14.0001ZM24.5 22.1667C24.5 21.5224 23.9777 21.0001 23.3333 21.0001H4.66667C4.02234 21.0001 3.5 21.5224 3.5 22.1667C3.5 22.8111 4.02234 23.3334 4.66667 23.3334H23.3333C23.9777 23.3334 24.5 22.8111 24.5 22.1667Z"
                  fill="white"
                />
              </svg>
            </button>
            <Link href="/">
              <img
                src="https://res.cloudinary.com/dccmraknj/image/upload/v1695127190/static/vias_cabinets_1_td1dsi.png"
                alt=""
                className="h-10 lg:h-12"
              />
            </Link>
          </div>

          <div className="lg:hidden flex items-center ml-auto lg:ml-0 space-x-6">
            <button className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.9731 19.6874C20.6878 17.4315 18.6807 15.6737 16.275 14.6971C17.4713 13.7998 18.355 12.5489 18.8009 11.1215C19.2468 9.69412 19.2322 8.16262 18.7593 6.74395C18.2865 5.32527 17.3792 4.09135 16.166 3.21697C14.9529 2.34259 13.4954 1.87207 12 1.87207C10.5046 1.87207 9.04706 2.34259 7.83392 3.21697C6.62078 4.09135 5.7135 5.32527 5.24061 6.74395C4.76772 8.16262 4.75319 9.69412 5.19907 11.1215C5.64496 12.5489 6.52865 13.7998 7.72498 14.6971C5.31928 15.6737 3.31221 17.4315 2.02686 19.6874C1.94721 19.8154 1.89413 19.9582 1.87076 20.1072C1.8474 20.2562 1.85423 20.4084 1.89084 20.5547C1.92746 20.701 1.99312 20.8384 2.08392 20.9588C2.17472 21.0792 2.2888 21.1802 2.41938 21.2556C2.54996 21.3311 2.69438 21.3795 2.84405 21.398C2.99373 21.4165 3.14559 21.4047 3.29062 21.3634C3.43566 21.322 3.57089 21.252 3.6883 21.1573C3.8057 21.0626 3.90288 20.9453 3.97404 20.8124C5.67279 17.8761 8.67279 16.1249 12 16.1249C15.3272 16.1249 18.3272 17.8771 20.0259 20.8124C20.1802 21.0604 20.4248 21.2387 20.7081 21.3096C20.9914 21.3805 21.2912 21.3385 21.544 21.1924C21.7969 21.0463 21.9831 20.8076 22.0631 20.5267C22.1432 20.2458 22.1109 19.9449 21.9731 19.6874ZM7.12498 8.99988C7.12498 8.0357 7.41089 7.09317 7.94657 6.29148C8.48224 5.48979 9.24361 4.86495 10.1344 4.49597C11.0252 4.12699 12.0054 4.03045 12.951 4.21855C13.8967 4.40666 14.7653 4.87096 15.4471 5.55274C16.1289 6.23452 16.5932 7.10316 16.7813 8.04882C16.9694 8.99447 16.8729 9.97467 16.5039 10.8655C16.1349 11.7563 15.5101 12.5176 14.7084 13.0533C13.9067 13.589 12.9642 13.8749 12 13.8749C10.7075 13.8734 9.4684 13.3593 8.55448 12.4454C7.64056 11.5315 7.12647 10.2924 7.12498 8.99988Z"
                  fill="white"
                />
              </svg>
            </button>
            <button className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_62_1124)">
                  <path
                    d="M7.69231 18.1818C7.69231 18.6742 7.54006 19.1004 7.23558 19.4602C6.93109 19.8201 6.57051 20 6.15385 20C5.73718 20 5.3766 19.8201 5.07212 19.4602C4.76763 19.1004 4.61538 18.6742 4.61538 18.1818C4.61538 17.6894 4.76763 17.2633 5.07212 16.9034C5.3766 16.5436 5.73718 16.3636 6.15385 16.3636C6.57051 16.3636 6.93109 16.5436 7.23558 16.9034C7.54006 17.2633 7.69231 17.6894 7.69231 18.1818ZM18.4615 18.1818C18.4615 18.6742 18.3093 19.1004 18.0048 19.4602C17.7003 19.8201 17.3397 20 16.9231 20C16.5064 20 16.1458 19.8201 15.8413 19.4602C15.5369 19.1004 15.3846 18.6742 15.3846 18.1818C15.3846 17.6894 15.5369 17.2633 15.8413 16.9034C16.1458 16.5436 16.5064 16.3636 16.9231 16.3636C17.3397 16.3636 17.7003 16.5436 18.0048 16.9034C18.3093 17.2633 18.4615 17.6894 18.4615 18.1818ZM20 2.72727V10C20 10.2273 19.9339 10.4285 19.8017 10.6037C19.6695 10.7789 19.5072 10.8807 19.3149 10.9091L6.76683 12.642C6.87099 13.2102 6.92308 13.5417 6.92308 13.6364C6.92308 13.7879 6.82692 14.0909 6.63462 14.5455H17.6923C17.9006 14.5455 18.0809 14.6354 18.2332 14.8153C18.3854 14.9953 18.4615 15.2083 18.4615 15.4545C18.4615 15.7008 18.3854 15.9138 18.2332 16.0938C18.0809 16.2737 17.9006 16.3636 17.6923 16.3636H5.38462C5.17628 16.3636 4.99599 16.2737 4.84375 16.0938C4.69151 15.9138 4.61538 15.7008 4.61538 15.4545C4.61538 15.3504 4.64744 15.2012 4.71154 15.0071C4.77564 14.813 4.83974 14.6425 4.90385 14.4957C4.96795 14.349 5.05409 14.1596 5.16226 13.9276C5.27043 13.6955 5.33253 13.5559 5.34856 13.5085L3.22115 1.81818H0.769231C0.560897 1.81818 0.380609 1.72822 0.228365 1.5483C0.0761218 1.36837 0 1.1553 0 0.909091C0 0.662879 0.0761218 0.449811 0.228365 0.269886C0.380609 0.0899621 0.560897 0 0.769231 0H3.84615C3.97436 0 4.08854 0.0307765 4.1887 0.0923295C4.28886 0.153883 4.36699 0.227273 4.42308 0.3125C4.47917 0.397727 4.53125 0.513731 4.57933 0.660511C4.6274 0.807292 4.65946 0.930398 4.67548 1.02983C4.69151 1.12926 4.71354 1.26894 4.74159 1.44886C4.76963 1.62879 4.78766 1.75189 4.79567 1.81818H19.2308C19.4391 1.81818 19.6194 1.90814 19.7716 2.08807C19.9239 2.26799 20 2.48106 20 2.72727Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_62_1124">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>

        {true && (
          <div className="lg:w-full mr-20 h-[40px] lg:h-[46px] bg-white rounded-sm lg:ml-16 flex items-center px-6 mt-5 lg:mt-0">
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
                d="M15.2659 12.0274C16.3051 10.6877 16.7948 9.00245 16.6355 7.31448C16.4762 5.6265 15.6798 4.06261 14.4084 2.94097C13.1369 1.81933 11.486 1.22419 9.79129 1.27663C8.09662 1.32907 6.48559 2.02515 5.28593 3.22326C4.08522 4.4222 3.38687 6.03386 3.33318 7.72981C3.27948 9.42577 3.87449 11.0784 4.99695 12.3509C6.11941 13.6234 7.68484 14.42 9.37424 14.5783C11.0636 14.7367 12.7498 14.2449 14.0893 13.2033L14.1251 13.2408L17.6601 16.7766C17.7375 16.854 17.8294 16.9154 17.9306 16.9573C18.0318 16.9992 18.1402 17.0208 18.2497 17.0208C18.3592 17.0208 18.4676 16.9992 18.5688 16.9573C18.6699 16.9154 18.7618 16.854 18.8393 16.7766C18.9167 16.6992 18.9781 16.6072 19.02 16.5061C19.0619 16.4049 19.0835 16.2965 19.0835 16.187C19.0835 16.0775 19.0619 15.9691 19.02 15.8679C18.9781 15.7668 18.9167 15.6748 18.8393 15.5974L15.3034 12.0624C15.2913 12.0504 15.2787 12.0387 15.2659 12.0274ZM13.5359 4.40242C14.0064 4.86532 14.3806 5.4168 14.6369 6.02504C14.8932 6.63328 15.0266 7.28624 15.0293 7.94627C15.0319 8.60631 14.9039 9.26034 14.6526 9.87064C14.4012 10.4809 14.0316 11.0355 13.5648 11.5022C13.0981 11.9689 12.5436 12.3386 11.9333 12.5899C11.323 12.8413 10.669 12.9693 10.0089 12.9666C9.34891 12.9639 8.69595 12.8306 8.08771 12.5743C7.47947 12.318 6.92799 11.9438 6.46509 11.4733C5.54003 10.533 5.02397 9.26529 5.02934 7.94627C5.03472 6.62726 5.56107 5.36379 6.49377 4.4311C7.42646 3.4984 8.68993 2.97205 10.0089 2.96667C11.328 2.9613 12.5957 3.47736 13.5359 4.40242Z"
                fill="#565656"
              />
            </svg>
            <input
              type="text"
              placeholder="Search VIAS Cabinet"
              className="w-full bg-transparent ml-3 text-sm outline-none"
            />
          </div>
        )}

        <ul className="ml-auto hidden lg:flex text-[20px] font-bold items-center space-x-10 shrink-0">
          {navLinks.slice(0, 3).map((link) => {
            return (
              <li key={link.title} className="flex items-center space-x-1">
                {link.icons}
                <a href={link.path} className="text-white">
                  {link.title}
                </a>
              </li>
            );
          })}
        </ul>

        {sidebarOpen && <Sidebar setOpen={setSidebarOpen} />}
      </nav>
      <div className="flex items-center justify-center bg-[#023E8A] h-[30px] font-general-sans text-sm font-medium">
        <Marquee>
          <span className="text-white/90 mr-44">Welcome to VIAS Cabinet</span>
          <span className="text-white/90 mr-44">Welcome to VIAS Cabinet</span>
          <span className="text-white/90 mr-44">Welcome to VIAS Cabinet</span>
          <span className="text-white/90 mr-44">Welcome to VIAS Cabinet</span>
        </Marquee>
      </div>
    </>
  );
}

export default Navbar;
