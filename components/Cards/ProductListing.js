/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function ProductListing({ product }) {
  const SortBYInstock = (collection) => {
    let sortByPrice = collection.sort((a, b) => {
      return a.discountedPrice - b.discountedPrice;
    });
    let sortByStock = sortByPrice.sort((a, b) => {
      return a.inStock == b.inStock ? 0 : a.inStock ? -1 : 1;
    });
    return sortByStock;
  };
  return (
    <div className="border-[3px] border-[#C3C3C3] rounded-2xl overflow-hidden">
      <div className="h-44 w-full border-b-[3px] border-[#C3C3C3]">
        <img
          src={product?.productImages[0]?.url}
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
      <div className="p-5 bg-white">
        <h2 className="font-medium text-[#222]">{product.name}</h2>
        <div className="flex items-center space-x-5">
          <h3 className="mt-2 text-[18px] font-semibold">
            ${SortBYInstock(product.collections)[0]?.discountedPrice}
          </h3>
          <h3 className="mt-2 text-sm text-[#A3A3A3] line-through font-normal">
            ${product.collections[0]?.price}
          </h3>
        </div>
        <Link className="block mt-5" href={`/shop/buy/${product._id}`}>
          <button className="bg-[#023E8A] font-medium w-full rounded-lg text-white text-sm py-3 text-center flex items-center justify-center space-x-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M14.9974 2.5C15.2184 2.5 15.4304 2.5878 15.5867 2.74408C15.7429 2.90036 15.8307 3.11232 15.8307 3.33333V16.6667C15.8307 16.8877 15.7429 17.0996 15.5867 17.2559C15.4304 17.4122 15.2184 17.5 14.9974 17.5H4.9974C4.77638 17.5 4.56442 17.4122 4.40814 17.2559C4.25186 17.0996 4.16406 16.8877 4.16406 16.6667V3.33333C4.16406 3.11232 4.25186 2.90036 4.40814 2.74408C4.56442 2.5878 4.77638 2.5 4.9974 2.5H14.9974ZM11.6641 9.16667C11.443 9.16667 11.2311 9.25446 11.0748 9.41074C10.9185 9.56702 10.8307 9.77899 10.8307 10C10.8307 10.221 10.9185 10.433 11.0748 10.5893C11.2311 10.7455 11.443 10.8333 11.6641 10.8333C11.8851 10.8333 12.097 10.7455 12.2533 10.5893C12.4096 10.433 12.4974 10.221 12.4974 10C12.4974 9.77899 12.4096 9.56702 12.2533 9.41074C12.097 9.25446 11.8851 9.16667 11.6641 9.16667Z"
                  fill="white"
                />
              </svg>
            </span>
            <span>Order now</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductListing;
