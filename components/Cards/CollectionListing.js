/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import React from "react";

function CollectionListing({ product }) {
  return (
    <div className="border border-[#C3C3C3] bg-white rounded-md">
      <div className="flex items-center justify-center py-3 border-b border-[#C3C3C3]">
        <img
          src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1692942228/Dtory/vias/image_13_mszddl.png"
          className="h-[125px] object-contain"
          alt=""
        />
      </div>
      <div className="px-5 py-4">
        <h2 className="text-[#1B1B1B] font-semibold">{product.name}</h2>
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
  );
}

export default CollectionListing;
