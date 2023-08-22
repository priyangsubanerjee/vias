import React, { useEffect, useState } from "react";

function ProductBuy() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    // add scroll event listener

    // remove scroll event listener

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <div className="lg:px-[96px] py-[90px] px-6 font-general-sans bg-[#D7F3FF]">
      <div className="bottom-0 right-0 bg-white fixed">{scrollY}</div>
      <div className="grid grid-cols-2"></div>
    </div>
  );
}

export default ProductBuy;
