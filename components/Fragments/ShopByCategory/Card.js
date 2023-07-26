/* eslint-disable @next/next/no-img-element */
import React from "react";

function CategoryCard() {
  return (
    <div className="w-auto h-[250px] rounded-lg relative overflow-hidden">
      <img
        src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1690352476/Dtory/vias/want-to-save-money_wmy9uu.png"
        alt=""
        className="w-full h-full object-cover"
      />

      <div className="h-full w-full absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
      <div className="h-full w-full absolute inset-0 flex flex-col justify-end p-6">
        <p className="text-[20px] font-medium text-white font-general-sans">
          Want to save money?
        </p>
      </div>
    </div>
  );
}

export default CategoryCard;
