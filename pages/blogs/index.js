import React from "react";

function BlogsListing() {
  return (
    <div className="bg-[#D7F3FF]">
      <div className="hidden h-[420px] bg-[url('https://res.cloudinary.com/db9kd4qbi/image/upload/v1691514128/Dtory/vias/faq_tcgifd.png')] lg:flex flex-col items-center justify-center">
        <h1 className="text-[48px] font-semibold text-center text-white">
          VIAS Cabinet Blog
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
      <div className="lg:px-[96px] py-7 lg:py-[90px] px-6 font-general-sans">
        <div>
          <h1 className="text-5xl font-semibold">All Blogs</h1>
          <p className="text-[#555555] mt-2">
            Read the top blogs of this week at VIAS cabinet
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-16">
          <div className="h-fit bg-white rounded-lg overflow-hidden">
            <div className="h-[250px] relative bg-red-50"></div>
            <div className="p-5 border-b font-medium">
              <h1 className="font-semibold leading-[36px] text-[#1B1B1B] text-2xl">
                Creative solutions for ready to assemble
              </h1>
              <p className="text-[#555555] mt-2">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur ma
              </p>
            </div>
            <div className="p-5 flex items-center justify-between font-medium">
              <span className="text-[#1B1B1B]">4 mins read</span>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M0.292893 11.6064C-0.0976311 11.9969 -0.0976311 12.6301 0.292893 13.0206C0.683418 13.4111 1.31658 13.4111 1.70711 13.0206L0.292893 11.6064ZM13.3137 0.999768C13.3137 0.447483 12.866 -0.000232004 12.3137 -0.000232257L3.31371 -0.000231456C2.76142 -0.000231793 2.31371 0.447484 2.31371 0.999768C2.31371 1.55205 2.76142 1.99977 3.31371 1.99977L11.3137 1.99977L11.3137 9.99977C11.3137 10.5521 11.7614 10.9998 12.3137 10.9998C12.866 10.9998 13.3137 10.5521 13.3137 9.99977L13.3137 0.999768ZM1.70711 13.0206L13.0208 1.70688L11.6066 0.292661L0.292893 11.6064L1.70711 13.0206Z"
                    fill="#1B1B1B"
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

export default BlogsListing;
