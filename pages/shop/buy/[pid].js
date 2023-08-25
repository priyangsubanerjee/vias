/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

function ProductBuy() {
  return (
    <div className="lg:px-[96px] py-[90px] px-6 font-general-sans bg-[#D7F3FF]">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-16">
        <div className="">
          <img
            src="https://imgs.search.brave.com/XM_pOUXZKgpniindOLVoKOTwl1tyV3MjeHLlMkFBKAM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTIw/Njk1OTg4L3Bob3Rv/L21hbi1vcGVucy10/aGUtY2FiaW5ldC1k/b29yLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1ySzY2SXU4/Rk1GRE9RMlR0MUdQ/d3JXT2JPOGJJRUFa/ZzktaWlueUZwYkVV/PQ"
            alt=""
            className="h-[400px] w-full rounded-md"
          />
          <div className="flex items-center justify-center space-x-5 mt-5">
            <button className="rotate-180">
              <Icon height={30} icon="ep:right" />
            </button>
            <div className="w-[80%] flex space-x-3 items-center overflow-hidden">
              <img
                src="https://imgs.search.brave.com/XM_pOUXZKgpniindOLVoKOTwl1tyV3MjeHLlMkFBKAM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTIw/Njk1OTg4L3Bob3Rv/L21hbi1vcGVucy10/aGUtY2FiaW5ldC1k/b29yLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1ySzY2SXU4/Rk1GRE9RMlR0MUdQ/d3JXT2JPOGJJRUFa/ZzktaWlueUZwYkVV/PQ"
                alt=""
                className="h-[80px] w-[120px] rounded-md"
              />
              <img
                src="https://imgs.search.brave.com/XM_pOUXZKgpniindOLVoKOTwl1tyV3MjeHLlMkFBKAM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTIw/Njk1OTg4L3Bob3Rv/L21hbi1vcGVucy10/aGUtY2FiaW5ldC1k/b29yLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1ySzY2SXU4/Rk1GRE9RMlR0MUdQ/d3JXT2JPOGJJRUFa/ZzktaWlueUZwYkVV/PQ"
                alt=""
                className="h-[80px] w-[120px] rounded-md"
              />
              <img
                src="https://imgs.search.brave.com/XM_pOUXZKgpniindOLVoKOTwl1tyV3MjeHLlMkFBKAM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTIw/Njk1OTg4L3Bob3Rv/L21hbi1vcGVucy10/aGUtY2FiaW5ldC1k/b29yLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1ySzY2SXU4/Rk1GRE9RMlR0MUdQ/d3JXT2JPOGJJRUFa/ZzktaWlueUZwYkVV/PQ"
                alt=""
                className="h-[80px] w-[120px] rounded-md"
              />
            </div>
            <button>
              <Icon height={30} icon="ep:right" />
            </button>
          </div>
        </div>
        <div className="">
          <h1 className="text-[32px] font-medium">
            Weston White Shaker Kitchen Cabinets
          </h1>
          <div className="bg-[#D7E8FF] p-6 rounded-md mt-6">
            <h2 className="text-lg font-semibold text-[#383838]">
              Description
            </h2>
            <p className="text-sm leading-7">
              Cross-cut paper shredder with 6-sheet capacity; shreds credit
              cards (one at a time) Staple gun (18 or 20 gauge 1/2″ staples) and
              wood glue required for assembly. Cabinets into sets measuring 0.48
              cm x 4.68 cm 3 minute continuous run time with 30 minute cool down
              cycle with overheat LED indicator Angled feed entry for safety
              with auto start mode and manual reverse to clear paper jams 5 year
              warranty
            </p>
          </div>
          <button className="mt-7 h-12 bg-[#023E8A] w-full rounded-lg text-white">
            Start Shopping Now
          </button>
          <div className="bg-[#D7E8FF] p-6 rounded-md mt-6">
            <h2 className="text-lg font-semibold text-[#383838]">Materials</h2>
            <div className="mt-5 space-y-4 text-sm">
              <div className="flex items-center space-x-4">
                <Icon height={40} icon="bi:door-open-fill" color="#333333" />
                <span className="font-medium text-[#555555]">
                  Solid Wood Face Frame
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Icon
                  height={40}
                  icon="icon-park-solid:electronic-door-lock"
                  color="#333333"
                />
                <span className="font-medium text-[#555555]">
                  3/4{`"`} Plywood Shelves
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Icon
                  height={40}
                  icon="game-icons:entry-door"
                  color="#333333"
                />
                <span className="font-medium text-[#555555]">
                  Concealed with Soft Close Hinges
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Icon
                  height={40}
                  icon="game-icons:entry-door"
                  color="#333333"
                />
                <span className="font-medium text-[#555555]">
                  Concealed with Soft Close Hinges
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-6">
            <span className="text-[#1B1B1B] font-semibold">
              Have a question?
            </span>
            <button className="flex h-[42px] items-center space-x-2 px-5 border-[1.5px] rounded-lg border-black">
              <Icon icon="material-symbols:call" />
              <span className="font-medium">+1 8005805355</span>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-44">
        <div className="bg-white h-[46px] px-4 flex items-center">
          <Icon className="shrink-0" icon="carbon:search" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent w-full"
            name=""
            id=""
          />
        </div>
        <div className="mt-8">
          <h2 className="font-semibold text-[#1B1B1B]">Filter by Type</h2>
          <div className="mt-7 flex items-center lg:justify-between overflow-auto lg:overflow-hidden space-x-5">
            <div className="border shrink-0 w-fit border-[#777] py-[22px] px-[20px] flex items-center rounded-lg">
              <img
                src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1692941379/Dtory/vias/image_8_m13tg2.png"
                alt=""
              />
              <span className=" font-semibold ml-3">
                Base <br /> Cabinets
              </span>
            </div>
            <div className="border shrink-0 border-[#777] py-[22px] px-[20px] flex items-center rounded-lg">
              <img
                src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1692941379/Dtory/vias/image_9_qmkynw.png"
                alt=""
              />
              <span className=" font-semibold ml-3">
                Wall <br /> Cabinets
              </span>
            </div>
            <div className="border shrink-0 border-[#777] py-[22px] px-[20px] flex items-center rounded-lg">
              <img
                src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1692941379/Dtory/vias/image_10_yd3dlc.png"
                alt=""
              />
              <span className=" font-semibold ml-3">
                Tall <br /> Cabinets
              </span>
            </div>
            <div className="border shrink-0 border-[#777] py-[22px] px-[20px] flex items-center rounded-lg">
              <img
                src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1692941379/Dtory/vias/image_11_scf99u.png"
                alt=""
              />
              <span className=" font-semibold ml-3">
                Trim, Details <br /> & Others
              </span>
            </div>
            <div className="border shrink-0 border-[#777] py-[22px] px-[20px] flex items-center rounded-lg">
              <img
                src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1692941379/Dtory/vias/image_12_z2cjqz.png"
                alt=""
              />
              <span className=" font-semibold ml-3">
                Vanity <br /> Cabinets
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center space-x-2">
          <img
            src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1692941953/Dtory/vias/SHAKER_WHITE_4_oidssv.png"
            alt=""
          />
          <div className="ml-5">
            <p className="text-[#1B1B1B] font-medium text-[20px]">
              Weston White Shaker Kitchen Cabinets
            </p>
            <p className="mt-2 font-medium text-sm text-[#333]">
              197 Cabinet Results
            </p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          <div className="border border-[#C3C3C3] bg-white rounded-md">
            <div className="flex items-center justify-center py-3 border-b border-[#C3C3C3]">
              <img
                src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1692942228/Dtory/vias/image_13_mszddl.png"
                className="h-[125px] object-contain"
                alt=""
              />
            </div>
            <div className="px-5 py-4">
              <h2 className="text-[#1B1B1B] font-semibold">Base Cabinet</h2>
              <p className="text-[#555] text-sm mt-2">15” W</p>
              <p className="bg-[#B1C3DB] mt-1 px-2 py-1 rounded-md w-fit text-sm">
                #HS-B15
              </p>
              <div className="flex items-center mt-8 text-[#1C7926] font-medium space-x-2">
                <Icon icon="zondicons:checkmark-outline" />
                <span>In Stock</span>
              </div>
              <h2 className="text-[18px] text-[#1B1B1B] font-semibold mt-2">
                $397.99
              </h2>
              <h2 className="text-[14px] text-[#A3A3A3] font-normal mt-1 line-through">
                $397.99
              </h2>
              <div className="mt-5 flex justify-between">
                <div className="flex items-center bg-[#D9D9D9] border border-black rounded-md">
                  <button className="h-[36px] px-3">-</button>
                  <span className="px-3 h-[36px] text-sm flex items-center font-medium border-x border-black">
                    1
                  </span>
                  <button className="h-[36px] px-3">+</button>
                </div>
                <button className="bg-[#023E8A] px-5 h-[36px] text-white rounded text-sm">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductBuy;
