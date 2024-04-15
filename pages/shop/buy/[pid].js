/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import connectDatabase from "@/db/dbConnect";
import products from "@/db/models/products";
import CollectionListing from "@/components/Cards/CollectionListing";
import GlobalState from "@/context/GLobalStates";

export async function getServerSideProps(context) {
  const pid = context.params.pid;
  await connectDatabase();
  let product = await products.find({
    _id: pid,
  });
  product = JSON.parse(JSON.stringify(product));
  return {
    props: {
      product: product[0],
    },
  };
}

const SortBYInstock = (collection) => {
  let sortByPrice = collection.sort((a, b) => {
    return a.discountedPrice - b.discountedPrice;
  });
  let sortByStock = sortByPrice.sort((a, b) => {
    return a.inStock == b.inStock ? 0 : a.inStock ? -1 : 1;
  });
  return sortByStock;
};

function ProductBuy({ product }) {
  console.log(product);
  const { doorColors, refreshDoorColors } = useContext(GlobalState);
  const [filter, setFilter] = useState("");
  const [colorFilter, setColorFilter] = useState();
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    console.log("use effect");
    if (filter == "") {
      console.log("here");
      if (colorFilter == "") {
        setVisibleProducts(SortBYInstock(product.collections) | []);
        return;
      } else {
        console.log("here 1");
        let filtered = product.collections.filter((p) =>
          p.doorColor.split(",").includes(colorFilter)
        );
        setVisibleProducts(SortBYInstock(filtered));
      }
      return;
    } else {
      if (colorFilter == "") {
        setVisibleProducts(
          SortBYInstock(
            product.collections.filter(
              (product) =>
                product.tag.split("-")[1].toLowerCase() == filter.toLowerCase()
            )
          )
        );
      } else {
        setVisibleProducts(
          product.collections.filter(
            (product) =>
              product.tag.split("-")[1].toLowerCase() == filter.toLowerCase() &&
              product.doorColor.split(",").includes(colorFilter) == true
          )
        );
      }
    }
  }, [filter, product.collections, colorFilter]);

  useEffect(() => {
    setColorFilter(doorColors[0]?.color);
  }, [doorColors]);

  //   const [doorImages, setDoorImages] = useState([
  //     {
  //       url: "/door/door1.webp",
  //       selected: false,
  //       name: "Shaker Natural Wood",
  //     },
  //     {
  //       url: "/door/door2.webp",
  //       selected: false,
  //       name: "Navy Blue Shaker",
  //     },
  //     {
  //       url: "/door/door3.webp",
  //       selected: false,
  //       name: "Escada Midnight Blue",
  //     },
  //     {
  //       url: "/door/door4.webp",
  //       selected: false,
  //       name: "Charcoal Black Shaker",
  //     },
  //     {
  //       url: "/door/door5.webp",
  //       selected: false,
  //       name: "Shaker Gray",
  //     },
  //     {
  //       url: "/door/door6.webp",
  //       selected: false,
  //       name: "Escade Vintage Wood",
  //     },
  //     {
  //       url: "/door/door7.webp",
  //       selected: false,
  //       name: "Thielsen Espresso",
  //     },
  //     {
  //       url: "/door/door8.webp",
  //       selected: false,
  //       name: "Thielson Pigeon White",
  //     },
  //     {
  //       url: "/door/door9.webp",
  //       selected: false,
  //       name: "Shaker White",
  //     },
  //     {
  //       url: "/door/door10.webp",
  //       selected: false,
  //       name: "Pebble Gray",
  //     },
  //     {
  //       url: "/door/door11.webp",
  //       selected: false,
  //       name: "Thielsen Sapphire Blue",
  //     },
  //   ]);
  return (
    <div className="lg:px-[96px] lg:py-[90px] py-10 px-6 font-general-sans bg-[#D7F3FF]">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-16">
        <div className="">
          <img
            src={product.productImages[currentImageIndex].url}
            alt=""
            className="h-[250px] lg:h-[400px] w-full rounded-md object-cover"
          />
          <div className="flex items-center justify-center space-x-5 mt-5">
            <button
              onClick={() => {
                if (currentImageIndex == 0) {
                  setCurrentImageIndex(product.productImages.length - 1);
                  return;
                }
                setCurrentImageIndex(currentImageIndex - 1);
              }}
              className="rotate-180"
            >
              <Icon height={30} icon="ep:right" />
            </button>
            <div className="w-[80%] flex space-x-3 items-center overflow-auto whitespace-nowrap">
              {product.productImages.map((image, index) => {
                return (
                  <img
                    key={index}
                    src={image.url}
                    onClick={() => setCurrentImageIndex(index)}
                    alt=""
                    className="lg:h-[80px] h-[60px] w-[100px] lg:w-[120px] rounded-md shrink-0 pointer-events-auto cursor-pointer"
                  />
                );
              })}
            </div>
            <button
              onClick={() => {
                if (currentImageIndex == product.productImages.length - 1) {
                  setCurrentImageIndex(0);
                  return;
                }
                setCurrentImageIndex(currentImageIndex + 1);
              }}
            >
              <Icon height={30} icon="ep:right" />
            </button>
          </div>
        </div>
        <div className="mt-8 lg:mt-0">
          <h1 className="text-[24px] lg:text-[32px] font-medium">
            {product.name}
          </h1>
          <div className="bg-[#D7E8FF] p-6 rounded-md mt-6 max-h-[400px] lg:max-h-none overflow-y-auto">
            <h2 className="text-lg font-semibold text-[#383838]">
              Description
            </h2>
            <p className="text-sm leading-8 whitespace-pre-line mt-2">
              {product.description}
            </p>
          </div>
          <button
            onClick={() => {
              document
                .querySelector(".collectionGroup")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-7 h-12 bg-[#023E8A] w-full rounded-lg text-white"
          >
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
      <div className="mt-28 lg:mt-44">
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
        <div className="flex items-center w-full">
          <button
            onClick={() => {
              document.querySelector("#colorScroll").scrollBy(-200, 0);
            }}
            className="shrink-0 top-1/2 -translate-x-1/2 left-0 text-black rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="48"
              viewBox="0 0 7 16"
            >
              <path
                fill="currentColor"
                d="M5.5 13a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71l4.5-4.49c.2-.2.51-.2.71 0c.2.2.2.51 0 .71L1.71 8l4.15 4.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"
              />
            </svg>
          </button>
          <div
            id="colorScroll"
            className="mt-8 w-full flex items-center space-x-12 collectionGroup overflow-x-auto scroll-smooth"
          >
            {doorColors.map((door, index) => {
              return (
                <div
                  onClick={() => {
                    setColorFilter(door.color == colorFilter ? "" : door.color);
                  }}
                  key={index}
                  style={{
                    border:
                      colorFilter == door.color
                        ? "1.5px solid #023E8A"
                        : "1px solid #00000000",
                  }}
                  className="flex flex-col items-center py-2 px-4 rounded-lg cursor-pointer"
                >
                  <img
                    className="w-24 h-[160px] shrink-0 object-cover"
                    src={door.image}
                    alt=""
                  />
                  <span className="whitespace-nowrap mt-2">{door.color}</span>
                </div>
              );
            })}

            {/* <div className="ml-5">
            <p className="text-[#1B1B1B] font-medium text-[20px]">
              Weston White Shaker Kitchen Cabinets
            </p>
            <p className="mt-2 font-medium text-sm text-[#333]">
              {product.collections.length} Cabinet Results
            </p>
          </div> */}
          </div>
          <button
            onClick={() => {
              document.querySelector("#colorScroll").scrollBy(200, 0);
            }}
            className="shrink-0 translate-x-1/2 right-0 text-black rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="48"
              viewBox="0 0 7 16"
            >
              <path
                fill="currentColor"
                d="M1.5 13a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71L5.3 7.99L1.15 3.85c-.2-.2-.2-.51 0-.71c.2-.2.51-.2.71 0l4.49 4.51c.2.2.2.51 0 .71l-4.5 4.49c-.1.1-.23.15-.35.15"
              />
            </svg>
          </button>
        </div>
        <div className="mt-8 ">
          <h2 className="font-semibold text-[#1B1B1B]">Filter by Type</h2>
          <div className="mt-7 flex items-center lg:justify-between overflow-auto lg:overflow-hidden space-x-5">
            <div
              style={{
                border:
                  filter == "B" ? "1.5px solid #023E8A" : "1px solid #777",
              }}
              onClick={() => {
                setFilter("B");
              }}
              className="border shrink-0 w-fit border-[#777] py-[22px] px-[20px] flex items-center rounded-lg cursor-pointer"
            >
              <img
                src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1692941379/Dtory/vias/image_8_m13tg2.png"
                alt=""
              />
              <span className=" font-semibold ml-3">
                Base <br /> Cabinets
              </span>
            </div>
            <div
              style={{
                border:
                  filter == "W" ? "1.5px solid #023E8A" : "1px solid #777",
              }}
              onClick={() => {
                setFilter("W");
              }}
              className="border shrink-0 border-[#777] py-[22px] px-[20px] flex items-center rounded-lg cursor-pointer"
            >
              <img
                src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1692941379/Dtory/vias/image_9_qmkynw.png"
                alt=""
              />
              <span className=" font-semibold ml-3">
                Wall <br /> Cabinets
              </span>
            </div>
            <div
              style={{
                border:
                  filter == "T" ? "1.5px solid #023E8A" : "1px solid #777",
              }}
              onClick={() => {
                setFilter("T");
              }}
              className="border shrink-0 border-[#777] py-[22px] px-[20px] flex items-center rounded-lg cursor-pointer"
            >
              <img
                src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1692941379/Dtory/vias/image_10_yd3dlc.png"
                alt=""
              />
              <span className=" font-semibold ml-3">
                Tall <br /> Cabinets
              </span>
            </div>
            <div
              style={{
                border:
                  filter == "TD" ? "1.5px solid #023E8A" : "1px solid #777",
              }}
              onClick={() => {
                setFilter("TD");
              }}
              className="border shrink-0 border-[#777] py-[22px] px-[20px] flex items-center rounded-lg cursor-pointer"
            >
              <img
                src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1692941379/Dtory/vias/image_11_scf99u.png"
                alt=""
              />
              <span className=" font-semibold ml-3">
                Trim, Details <br /> & Others
              </span>
            </div>
            <div
              style={{
                border:
                  filter == "V" ? "1.5px solid #023E8A" : "1px solid #777",
              }}
              onClick={() => {
                setFilter("V");
              }}
              className="border shrink-0 border-[#777] py-[22px] px-[20px] flex items-center rounded-lg cursor-pointer"
            >
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

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {visibleProducts.map((product, index) => {
            return <CollectionListing product={product} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductBuy;
