import React from "react";
import CategoryCard from "./Card";

function ShopByCategory() {
  return (
    <div className="lg:px-[96px] lg:py-[100px] px-6 py-[50px] bg-[#023E8A]">
      <div className="flex items-baseline justify-between">
        <p className="lg:text-[40px] text-[24px] font-medium text-white w-full lg:w-fit text-center lg:text-left">
          Shop by Category
        </p>
        <button className="text-[13px] tracking-[1.3px] font-general-sans font-medium text-white hidden lg:block">
          SEE MORE
        </button>
      </div>

      <div className="mt-20 grid grid-cols-1 lg:grid-cols-4 gap-[40px]">
        <CategoryCard
          image={
            "https://res.cloudinary.com/dccmraknj/image/upload/v1693848152/Rectangle_32_mlfdvy.png"
          }
          title={"Want to Save Money ?"}
        />
        <CategoryCard
          image={
            "https://res.cloudinary.com/dccmraknj/image/upload/v1693848152/Rectangle_33_cbcsac.png"
          }
          title={"Want to Save Time ?"}
        />
        <CategoryCard
          image={
            "https://res.cloudinary.com/dccmraknj/image/upload/v1693848153/Rectangle_34_rwd2du.png"
          }
          title={"More than kitchens"}
        />
        <CategoryCard
          image={
            "https://res.cloudinary.com/dccmraknj/image/upload/v1693848152/Rectangle_35_njrquo.png"
          }
          title={"More than cabinets"}
        />
      </div>
    </div>
  );
}

export default ShopByCategory;
