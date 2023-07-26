import React from "react";
import CategoryCard from "./Card";

function ShopByCategory() {
  return (
    <div className="px-[96px] py-[100px] bg-[#023E8A]">
      <div className="flex items-baseline justify-between">
        <p className="text-[40px] font-medium text-white w-full lg:w-fit text-center lg:text-left">
          Shop by Category
        </p>
        <button className="text-[13px] tracking-[1.3px] font-general-sans font-medium text-white">
          SEE MORE
        </button>
      </div>

      <div className="mt-20 grid grid-cols-4 gap-[40px]">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
}

export default ShopByCategory;
