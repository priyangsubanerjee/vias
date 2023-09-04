/* eslint-disable @next/next/no-img-element */
import React from "react";

function RealCard({ image, title }) {
  return (
    <div className="p-2">
      <div>
        <img src={image} alt="" className="rounded-lg" />

        <p className="text-sm font-general-sans font-medium text-center mt-5">
          {title}
        </p>
      </div>
    </div>
  );
}

export default RealCard;
