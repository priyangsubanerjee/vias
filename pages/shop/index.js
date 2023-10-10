/* eslint-disable react-hooks/exhaustive-deps */
import ProductListing from "@/components/Cards/ProductListing";
import connectDatabase from "@/db/dbConnect";
import products from "@/db/models/products";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Switch from "react-switch";

export async function getServerSideProps() {
  await connectDatabase();
  let products_ = await products.find({});
  products_ = JSON.parse(JSON.stringify(products_));

  let colorsAvailable = [];
  let cabinetStyleAvailable = [];
  let doorStyleAvailable = [];
  let constructionTypeAvailable = [];
  let featuresAvailable = [];
  let kitchenCabinets = [];
  let bathroomVanities = [];

  products_.forEach((product) => {
    colorsAvailable.includes(product.color) ||
      colorsAvailable.push(product.color);
    doorStyleAvailable.includes(product.doorStyle) ||
      doorStyleAvailable.push(product.doorStyle);
    constructionTypeAvailable.includes(product.constructionType) ||
      constructionTypeAvailable.push(product.constructionType);
    if (product.category == "kitchen-cabinets") {
      kitchenCabinets.push(product);
    }
    if (product.category == "bathroom-vanities") {
      bathroomVanities.push(product);
    }
    // featuresAvailable.push(product.features);  removed on request of client on 10/10/2023
    // cabinetStyleAvailable.includes(product.cabinetStyle) || cabinetStyleAvailable.push(product.cabinetStyle); removed on request of client on 10/10/2023
  });

  return {
    props: {
      products: products_,
      kitchenCabinets,
      bathroomVanities,
      filterOptionsProp: {
        color: colorsAvailable,
        cabinetStyle: cabinetStyleAvailable,
        doorStyle: doorStyleAvailable,
        constructionType: constructionTypeAvailable,
        features: featuresAvailable,
      },
    },
  };
}

function Shop({
  products,
  filterOptionsProp,
  kitchenCabinets,
  bathroomVanities,
}) {
  const [visibleProducts, setVisibleProducts] = React.useState(kitchenCabinets); // ["kitchen-cabinets", "bathroom-vanities"
  const router = useRouter();
  const [state, setState] = React.useState("kitchen-cabinets"); // ["kitchen-cabinets", "bathroom-vanities"]
  const [filterOptions, setFilterOptions] = React.useState({
    color: filterOptionsProp.color,
    cabinetStyle: filterOptionsProp.cabinetStyle,
    doorStyle: filterOptionsProp.doorStyle,
    constructionType: filterOptionsProp.constructionType,
    features: filterOptionsProp.features,
  });
  const [sortingTabOpen, setSortingTabOpen] = React.useState(false);
  const [sorting, setSorting] = React.useState({
    price: "",
  });
  const [filters, setFilters] = React.useState({
    color: [],
    cabinetStyle: [],
    doorStyle: [],
    constructionType: [],
    features: [],
  });

  const filterByColor = (products) => {
    if (filters.color.length == 0) {
      return products;
    }
    return products.filter((product) => filters.color.includes(product.color));
  };

  const filterByCabinetStyle = (products) => {
    if (filters.cabinetStyle.length == 0) {
      return products;
    }
    return products.filter((product) =>
      filters.cabinetStyle.includes(product.cabinetStyle)
    );
  };

  const filterByDoorStyle = (products) => {
    if (filters.doorStyle.length == 0) {
      return products;
    }
    return products.filter((product) =>
      filters.doorStyle.includes(product.doorStyle)
    );
  };

  useEffect(() => {
    const sortedColor = filterByColor(products);
    const sortedDoorStyle = filterByDoorStyle(sortedColor);
    setVisibleProducts(sortedDoorStyle);
  }, [filterByColor, filterByDoorStyle, filters, products]);

  useEffect(() => {
    if (router.query.tab === "bathroom") {
      setState("bathroom-vanities");
    } else {
      setState("kitchen-cabinets");
    }
  }, [router.query.tab]);

  useEffect(() => {
    if (state == "kitchen-cabinets") {
      setVisibleProducts(kitchenCabinets);
    } else {
      setVisibleProducts(bathroomVanities);
    }
  }, [state]);

  return (
    <div>
      <div className='h-[240px] lg:h-[340px] font-general-sans flex flex-col items-center justify-center bg-[url("https://res.cloudinary.com/db9kd4qbi/image/upload/v1692430582/Dtory/vias/cabinets_bg_vvhjj2.png")]'>
        <h1 className="text-3xl lg:text-5xl text-white font-semibold text-center leading-[1.3]">
          {state == "kitchen-cabinets"
            ? "VIAS Kitchen Cabinets"
            : "VIAS Bathroom Vanities"}
        </h1>
      </div>
      <div className="lg:px-[96px] py-[90px] px-6 font-general-sans bg-[#D7F3FF] min-h-screen">
        <div className="lg:flex lg:space-x-16">
          <div className="hidden lg:block w-[245px] shrink-0">
            <div className="mt-16 flex items-center space-x-3 text-[13px] font-medium text-[#777]">
              <span
                className={`${state == "kitchen-cabinets" && "text-[#023E8A]"}`}
              >
                Kitchen
              </span>
              <Switch
                checkedIcon={null}
                uncheckedIcon={null}
                onColor="#CCCCCC"
                offColor="#CCCCCC"
                onHandleColor="#023E8A"
                offHandleColor="#023E8A"
                checked={state == "bathroom-vanities"}
                onChange={() =>
                  setState(
                    state == "kitchen-cabinets"
                      ? "bathroom-vanities"
                      : "kitchen-cabinets"
                  )
                }
              />
              <span
                className={`${
                  state == "bathroom-vanities" && "text-[#023E8A]"
                }`}
              >
                Bathroom
              </span>
            </div>
            <div className="flex items-center mt-6">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 5.00001C8.73478 5.00001 8.48043 5.10537 8.29289 5.2929C8.10536 5.48044 8 5.73479 8 6.00001C8 6.26523 8.10536 6.51958 8.29289 6.70712C8.48043 6.89465 8.73478 7.00001 9 7.00001C9.26522 7.00001 9.51957 6.89465 9.70711 6.70712C9.89464 6.51958 10 6.26523 10 6.00001C10 5.73479 9.89464 5.48044 9.70711 5.2929C9.51957 5.10537 9.26522 5.00001 9 5.00001ZM6.17 5.00001C6.3766 4.41448 6.75974 3.90744 7.2666 3.5488C7.77346 3.19015 8.37909 2.99756 9 2.99756C9.62091 2.99756 10.2265 3.19015 10.7334 3.5488C11.2403 3.90744 11.6234 4.41448 11.83 5.00001H19C19.2652 5.00001 19.5196 5.10537 19.7071 5.2929C19.8946 5.48044 20 5.73479 20 6.00001C20 6.26523 19.8946 6.51958 19.7071 6.70712C19.5196 6.89465 19.2652 7.00001 19 7.00001H11.83C11.6234 7.58554 11.2403 8.09258 10.7334 8.45122C10.2265 8.80986 9.62091 9.00246 9 9.00246C8.37909 9.00246 7.77346 8.80986 7.2666 8.45122C6.75974 8.09258 6.3766 7.58554 6.17 7.00001H5C4.73478 7.00001 4.48043 6.89465 4.29289 6.70712C4.10536 6.51958 4 6.26523 4 6.00001C4 5.73479 4.10536 5.48044 4.29289 5.2929C4.48043 5.10537 4.73478 5.00001 5 5.00001H6.17ZM15 11C14.7348 11 14.4804 11.1054 14.2929 11.2929C14.1054 11.4804 14 11.7348 14 12C14 12.2652 14.1054 12.5196 14.2929 12.7071C14.4804 12.8947 14.7348 13 15 13C15.2652 13 15.5196 12.8947 15.7071 12.7071C15.8946 12.5196 16 12.2652 16 12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1054 15.2652 11 15 11ZM12.17 11C12.3766 10.4145 12.7597 9.90744 13.2666 9.5488C13.7735 9.19015 14.3791 8.99756 15 8.99756C15.6209 8.99756 16.2265 9.19015 16.7334 9.5488C17.2403 9.90744 17.6234 10.4145 17.83 11H19C19.2652 11 19.5196 11.1054 19.7071 11.2929C19.8946 11.4804 20 11.7348 20 12C20 12.2652 19.8946 12.5196 19.7071 12.7071C19.5196 12.8947 19.2652 13 19 13H17.83C17.6234 13.5855 17.2403 14.0926 16.7334 14.4512C16.2265 14.8099 15.6209 15.0025 15 15.0025C14.3791 15.0025 13.7735 14.8099 13.2666 14.4512C12.7597 14.0926 12.3766 13.5855 12.17 13H5C4.73478 13 4.48043 12.8947 4.29289 12.7071C4.10536 12.5196 4 12.2652 4 12C4 11.7348 4.10536 11.4804 4.29289 11.2929C4.48043 11.1054 4.73478 11 5 11H12.17ZM9 17C8.73478 17 8.48043 17.1054 8.29289 17.2929C8.10536 17.4804 8 17.7348 8 18C8 18.2652 8.10536 18.5196 8.29289 18.7071C8.48043 18.8947 8.73478 19 9 19C9.26522 19 9.51957 18.8947 9.70711 18.7071C9.89464 18.5196 10 18.2652 10 18C10 17.7348 9.89464 17.4804 9.70711 17.2929C9.51957 17.1054 9.26522 17 9 17ZM6.17 17C6.3766 16.4145 6.75974 15.9074 7.2666 15.5488C7.77346 15.1902 8.37909 14.9976 9 14.9976C9.62091 14.9976 10.2265 15.1902 10.7334 15.5488C11.2403 15.9074 11.6234 16.4145 11.83 17H19C19.2652 17 19.5196 17.1054 19.7071 17.2929C19.8946 17.4804 20 17.7348 20 18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8947 19.2652 19 19 19H11.83C11.6234 19.5855 11.2403 20.0926 10.7334 20.4512C10.2265 20.8099 9.62091 21.0025 9 21.0025C8.37909 21.0025 7.77346 20.8099 7.2666 20.4512C6.75974 20.0926 6.3766 19.5855 6.17 19H5C4.73478 19 4.48043 18.8947 4.29289 18.7071C4.10536 18.5196 4 18.2652 4 18C4 17.7348 4.10536 17.4804 4.29289 17.2929C4.48043 17.1054 4.73478 17 5 17H6.17Z"
                    fill="#1B1B1B"
                  />
                </svg>
              </span>
              <span className="text-[#1b1b1b] font-semibold m-2 text-[18px]">
                Filter & Sort
              </span>
            </div>
            <div className="mt-7 py-6 px-5 bg-white rounded-lg">
              <div className="flex items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      opacity="0.3"
                      d="M10.0007 3.83325C6.32565 3.83325 3.33398 6.82492 3.33398 10.4999C3.33398 14.1749 6.32565 17.1666 10.0007 17.1666C10.234 17.1666 10.4173 16.9833 10.4173 16.7499C10.4147 16.6418 10.3733 16.5383 10.3007 16.4583C9.95898 16.0749 9.77565 15.5833 9.77565 15.0833C9.77565 14.5307 9.99514 14.0008 10.3858 13.6101C10.7765 13.2194 11.3064 12.9999 11.859 12.9999H13.334C15.1757 12.9999 16.6673 11.5083 16.6673 9.66658C16.6673 6.44992 13.6757 3.83325 10.0007 3.83325ZM5.41732 11.3333C4.72565 11.3333 4.16732 10.7749 4.16732 10.0833C4.16732 9.39159 4.72565 8.83325 5.41732 8.83325C6.10898 8.83325 6.66732 9.39159 6.66732 10.0833C6.66732 10.7749 6.10898 11.3333 5.41732 11.3333ZM7.91732 7.99992C7.22565 7.99992 6.66732 7.44159 6.66732 6.74992C6.66732 6.05825 7.22565 5.49992 7.91732 5.49992C8.60898 5.49992 9.16732 6.05825 9.16732 6.74992C9.16732 7.44159 8.60898 7.99992 7.91732 7.99992ZM12.084 7.99992C11.3923 7.99992 10.834 7.44159 10.834 6.74992C10.834 6.05825 11.3923 5.49992 12.084 5.49992C12.7757 5.49992 13.334 6.05825 13.334 6.74992C13.334 7.44159 12.7757 7.99992 12.084 7.99992ZM15.834 10.0833C15.834 10.7749 15.2757 11.3333 14.584 11.3333C13.8923 11.3333 13.334 10.7749 13.334 10.0833C13.334 9.39159 13.8923 8.83325 14.584 8.83325C15.2757 8.83325 15.834 9.39159 15.834 10.0833Z"
                      fill="#555555"
                    />
                    <path
                      d="M9.99935 2.16675C5.40768 2.16675 1.66602 5.90841 1.66602 10.5001C1.66602 15.0917 5.40768 18.8334 9.99935 18.8334C10.4018 18.8333 10.7956 18.7167 11.1332 18.4976C11.4708 18.2785 11.7377 17.9663 11.9017 17.5987C12.0656 17.2312 12.1196 16.824 12.0571 16.4264C11.9945 16.0289 11.8182 15.6579 11.5493 15.3584C11.4949 15.2991 11.4589 15.2252 11.4459 15.1458C11.4329 15.0663 11.4435 14.9848 11.4762 14.9113C11.509 14.8377 11.5626 14.7754 11.6304 14.732C11.6982 14.6885 11.7772 14.6658 11.8577 14.6667H13.3327C16.091 14.6667 18.3327 12.4251 18.3327 9.66675C18.3327 5.53341 14.591 2.16675 9.99935 2.16675ZM13.3327 13.0001H11.8577C11.3051 13.0001 10.7752 13.2196 10.3845 13.6103C9.99384 14.001 9.77435 14.5309 9.77435 15.0834C9.77435 15.5917 9.95768 16.0751 10.2993 16.4584C10.3493 16.5167 10.416 16.6167 10.416 16.7501C10.416 16.9834 10.2327 17.1667 9.99935 17.1667C6.32435 17.1667 3.33268 14.1751 3.33268 10.5001C3.33268 6.82508 6.32435 3.83341 9.99935 3.83341C13.6743 3.83341 16.666 6.45008 16.666 9.66675C16.666 11.5084 15.1743 13.0001 13.3327 13.0001Z"
                      fill="#555555"
                    />
                    <path
                      d="M5.41602 11.3333C6.10637 11.3333 6.66602 10.7736 6.66602 10.0833C6.66602 9.3929 6.10637 8.83325 5.41602 8.83325C4.72566 8.83325 4.16602 9.3929 4.16602 10.0833C4.16602 10.7736 4.72566 11.3333 5.41602 11.3333Z"
                      fill="#555555"
                    />
                    <path
                      d="M7.91602 8C8.60637 8 9.16602 7.44036 9.16602 6.75C9.16602 6.05964 8.60637 5.5 7.91602 5.5C7.22566 5.5 6.66602 6.05964 6.66602 6.75C6.66602 7.44036 7.22566 8 7.91602 8Z"
                      fill="#555555"
                    />
                    <path
                      d="M12.084 8C12.7743 8 13.334 7.44036 13.334 6.75C13.334 6.05964 12.7743 5.5 12.084 5.5C11.3936 5.5 10.834 6.05964 10.834 6.75C10.834 7.44036 11.3936 8 12.084 8Z"
                      fill="#555555"
                    />
                    <path
                      d="M14.584 11.3333C15.2743 11.3333 15.834 10.7736 15.834 10.0833C15.834 9.3929 15.2743 8.83325 14.584 8.83325C13.8936 8.83325 13.334 9.3929 13.334 10.0833C13.334 10.7736 13.8936 11.3333 14.584 11.3333Z"
                      fill="#555555"
                    />
                  </svg>
                </span>
                <span className="ml-2 text-sm font-medium text-[#555555]">
                  Color
                </span>
                {filters.color.length > 0 && (
                  <button
                    onClick={() =>
                      setFilters({
                        ...filters,
                        color: [],
                      })
                    }
                    className="text-[#1877F2] text-sm ml-auto font-medium font-general-sans"
                  >
                    Clear
                  </button>
                )}
              </div>
              <ul className="mt-4 text-sm space-y-2">
                {filterOptions.color.map((color, index) => {
                  return (
                    <li key={index} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={filters.color.includes(color)}
                        name=""
                        id={`filter-color-${color}`}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFilters({
                              ...filters,
                              color: [...filters.color, color],
                            });
                          } else {
                            setFilters({
                              ...filters,
                              color: filters.color.filter((c) => c !== color),
                            });
                          }
                        }}
                      />
                      <label htmlFor={`filter-color-${color}`}>{color}</label>
                    </li>
                  );
                })}
              </ul>
              <div className="h-[1px] w-full bg-[#A3A3A3] my-6"></div>
              <div className="flex items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.4467 4.44004L14.9717 5.96504C17.2117 8.20671 18.3326 9.32671 18.3326 10.7184C18.3326 12.1109 17.2117 13.2309 14.9709 15.4717C12.7301 17.7142 11.6101 18.8334 10.2176 18.8334C8.8259 18.8334 7.70507 17.7125 5.46424 15.4717L3.93924 13.9467C2.65174 12.6592 2.00757 12.0159 1.7684 11.18C1.5284 10.3442 1.7334 9.45671 2.1434 7.68254L2.37924 6.65921C2.7234 5.16588 2.8959 4.41921 3.40674 3.90754C3.9184 3.39671 4.66507 3.22421 6.1584 2.88004L7.18174 2.64338C8.95674 2.23421 9.8434 2.02921 10.6792 2.26838C11.5151 2.50838 12.1592 3.15254 13.4467 4.44004ZM9.2884 12.44C8.72757 11.88 8.73174 11.075 9.06757 10.4375C8.98443 10.3175 8.94597 10.172 8.95888 10.0265C8.97179 9.88106 9.03524 9.74469 9.13822 9.64111C9.24121 9.53753 9.37721 9.47329 9.52263 9.45955C9.66804 9.44581 9.81367 9.48343 9.93424 9.56588C10.2176 9.41587 10.5284 9.33588 10.8384 9.33921C11.0042 9.34076 11.1625 9.40809 11.2786 9.52639C11.3948 9.6447 11.4591 9.80428 11.4576 9.97004C11.456 10.1358 11.3887 10.2942 11.2704 10.4103C11.1521 10.5264 10.9925 10.5908 10.8267 10.5892C10.6338 10.5963 10.4514 10.6793 10.3192 10.82C9.99674 11.1425 10.0809 11.4659 10.1717 11.5567C10.2634 11.6475 10.5859 11.7317 10.9084 11.4092C11.5617 10.7559 12.6901 10.5392 13.4126 11.2617C13.9734 11.8225 13.9692 12.6275 13.6334 13.265C13.716 13.3852 13.754 13.5304 13.7409 13.6756C13.7278 13.8208 13.6643 13.9568 13.5615 14.0601C13.4586 14.1634 13.3229 14.2276 13.1778 14.2414C13.0326 14.2552 12.8872 14.2179 12.7667 14.1359C12.3928 14.341 11.959 14.4094 11.5401 14.3292C11.3776 14.2958 11.2351 14.1993 11.1438 14.0608C11.0526 13.9224 11.02 13.7533 11.0534 13.5909C11.0868 13.4284 11.1833 13.2859 11.3218 13.1946C11.4602 13.1034 11.6293 13.0708 11.7917 13.1042C11.9392 13.135 12.1776 13.0867 12.3817 12.8825C12.7042 12.5592 12.6201 12.2367 12.5292 12.1459C12.4376 12.055 12.1151 11.9709 11.7926 12.2934C11.1392 12.9467 10.0109 13.1634 9.2884 12.44ZM8.35007 9.07754C8.50481 8.92275 8.62755 8.73899 8.71127 8.53676C8.795 8.33453 8.83807 8.11779 8.83803 7.89891C8.83799 7.68004 8.79484 7.46331 8.71105 7.26111C8.62725 7.05891 8.50445 6.8752 8.34965 6.72046C8.19486 6.56572 8.0111 6.44298 7.80887 6.35926C7.60664 6.27553 7.3899 6.23246 7.17103 6.2325C6.95215 6.23254 6.73543 6.27569 6.53323 6.35948C6.33103 6.44328 6.14731 6.56608 5.99257 6.72088C5.68006 7.0335 5.50453 7.45746 5.50461 7.8995C5.50469 8.34154 5.68036 8.76544 5.99299 9.07796C6.30561 9.39047 6.72958 9.566 7.17162 9.56592C7.61365 9.56584 8.03756 9.39017 8.35007 9.07754Z"
                      fill="#555555"
                    />
                  </svg>
                </span>
                <span className="ml-2 text-sm font-medium text-[#555555]">
                  Price
                </span>
                {sorting.length > 0 && (
                  <button
                    onClick={() => setSorting("")}
                    className="text-[#1877F2] text-sm ml-auto font-medium font-general-sans"
                  >
                    Clear
                  </button>
                )}
              </div>
              <ul className="mt-4 text-sm space-y-2">
                <li className="flex items-center space-x-3">
                  <input
                    checked={sorting == "h-t-l"}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSorting("h-t-l");
                      }
                    }}
                    type="radio"
                    name="price-sort"
                    id="htl-sort"
                  />
                  <label htmlFor="htl-sort">High to Low</label>
                </li>
                <li className="flex items-center space-x-3">
                  <input
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSorting("l-t-h");
                      }
                    }}
                    type="radio"
                    checked={sorting == "l-t-h"}
                    name="price-sort"
                    id="lth-sort"
                  />
                  <label htmlFor="lth-sort">Low to High</label>
                </li>
              </ul>
              <div className="h-[1px] w-full bg-[#A3A3A3] my-6"></div>

              <div className="flex items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      opacity="0.3"
                      d="M5.83398 16.3334H14.1673V4.66675H5.83398V16.3334ZM10.834 9.66675H12.5007V11.3334H10.834V9.66675Z"
                      fill="#555555"
                    />
                    <path
                      d="M10.834 9.66675H12.5007V11.3334H10.834V9.66675Z"
                      fill="#555555"
                    />
                    <path
                      d="M15.8333 16.3333V4.66667C15.8333 3.75 15.0833 3 14.1667 3H5.83333C4.91667 3 4.16667 3.75 4.16667 4.66667V16.3333H2.5V18H17.5V16.3333H15.8333ZM14.1667 16.3333H5.83333V4.66667H14.1667V16.3333Z"
                      fill="#555555"
                    />
                  </svg>
                </span>
                <span className="ml-2 text-sm font-medium text-[#555555]">
                  Door Style
                </span>
                {filters.doorStyle.length > 0 && (
                  <button
                    onClick={() =>
                      setFilters({
                        ...filters,
                        doorStyle: [],
                      })
                    }
                    className="text-[#1877F2] text-sm ml-auto font-medium font-general-sans"
                  >
                    Clear
                  </button>
                )}
              </div>
              <ul className="mt-4 text-sm space-y-2">
                {filterOptions.doorStyle.map((style, index) => {
                  return (
                    <li key={index} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={filters.doorStyle.includes(style)}
                        name=""
                        id={`door-style-${style}`}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFilters({
                              ...filters,
                              doorStyle: [...filters.doorStyle, style],
                            });
                          } else {
                            setFilters({
                              ...filters,
                              doorStyle: filters.doorStyle.filter(
                                (c) => c !== style
                              ),
                            });
                          }
                        }}
                      />
                      <label htmlFor={`door-style-${style}`}>{style}</label>
                    </li>
                  );
                })}
              </ul>
              <div className="h-[1px] w-full bg-[#A3A3A3] my-6"></div>
              <div className="flex items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M10.9438 9.98398L9.92385 8.96367C9.69023 8.73 9.3736 8.59833 9.04318 8.59745C8.71275 8.59657 8.39542 8.72656 8.16057 8.95899L1.06955 15.5031C0.811349 15.7465 0.641818 16.0566 0.626193 16.4039C0.618675 16.5761 0.646743 16.7481 0.708642 16.909C0.770542 17.0699 0.864945 17.2163 0.985959 17.3391L2.5094 18.8793C2.51021 18.8803 2.51112 18.8812 2.51213 18.882C2.74755 19.1167 3.06607 19.2489 3.39846 19.25H3.44455C3.79182 19.2371 4.10276 19.0742 4.34963 18.8137L10.9395 11.7551C11.0563 11.6392 11.1492 11.5014 11.2126 11.3496C11.2761 11.1978 11.309 11.035 11.3094 10.8704C11.3098 10.7059 11.2777 10.5429 11.215 10.3908C11.1522 10.2386 11.0601 10.1004 10.9438 9.98398ZM19.1406 7.92188L19.1285 7.90977L17.7899 6.58477C17.7115 6.50661 17.6183 6.44477 17.5159 6.40279C17.4134 6.36082 17.3037 6.33956 17.193 6.34024C17.0136 6.3404 16.8388 6.39698 16.6934 6.50195C16.6934 6.48516 16.6957 6.46875 16.6969 6.4543C16.7145 6.20039 16.7418 5.8168 16.4938 5.46914C16.1989 5.07164 15.8751 4.69641 15.525 4.34649C15.5241 4.34535 15.523 4.3443 15.5219 4.34336C15.0016 3.83086 13.8692 2.86563 12.1344 2.1582C11.4765 1.88819 10.7721 1.74952 10.061 1.75C8.82815 1.75 7.89065 2.30625 7.53166 2.63594C7.32839 2.83009 7.14301 3.04214 6.97776 3.26953C6.89881 3.37851 6.85714 3.51005 6.85894 3.6446C6.86075 3.77916 6.90593 3.90953 6.98778 4.01635C7.06962 4.12316 7.18376 4.20071 7.31321 4.23746C7.44266 4.27421 7.58051 4.26819 7.70627 4.22031C7.81582 4.17936 7.92774 4.14505 8.04143 4.11758C8.27818 4.06751 8.52099 4.05237 8.76213 4.07266C9.27736 4.11524 9.88674 4.3711 10.1563 4.58399C10.6133 4.95156 10.8332 5.44688 10.8696 6.18906C10.8766 6.33828 10.568 6.89766 10.0883 7.53594C9.99693 7.65639 9.95231 7.80589 9.96273 7.95672C9.97314 8.10755 10.0379 8.2495 10.1449 8.35625L11.4891 9.70039C11.602 9.81361 11.7541 9.87922 11.9139 9.88373C12.0738 9.88824 12.2293 9.83129 12.3485 9.72461C12.7285 9.38516 13.3074 8.87344 13.5098 8.74805C13.8102 8.56328 14.025 8.52774 14.084 8.52149C14.2371 8.50648 14.391 8.53893 14.525 8.61445C14.5257 8.62114 14.525 8.62789 14.5229 8.63428C14.5208 8.64067 14.5174 8.64656 14.5129 8.65156L14.4418 8.71914L14.4301 8.73008C14.3515 8.80834 14.2893 8.90137 14.2468 9.00381C14.2044 9.10626 14.1826 9.21608 14.1828 9.32697C14.183 9.43786 14.2051 9.54761 14.2479 9.64991C14.2906 9.75222 14.3532 9.84504 14.4321 9.92305L15.7703 11.2477C15.8488 11.3258 15.9419 11.3875 16.0443 11.4295C16.1468 11.4714 16.2565 11.4925 16.3672 11.4918C16.5895 11.4921 16.803 11.4052 16.9617 11.2496L19.1297 9.1082C19.1371 9.10078 19.1446 9.09297 19.1516 9.08516C19.297 8.92573 19.3767 8.71716 19.3747 8.50137C19.3727 8.28557 19.2891 8.07854 19.1406 7.92188Z"
                      fill="#555555"
                    />
                  </svg>
                </span>
                <span className="ml-2 text-sm font-medium text-[#555555]">
                  Construction Type
                </span>
                {filters.constructionType.length > 0 && (
                  <button
                    onClick={() =>
                      setFilters({
                        ...filters,
                        constructionType: [],
                      })
                    }
                    className="text-[#1877F2] text-sm ml-auto font-medium font-general-sans"
                  >
                    Clear
                  </button>
                )}
              </div>
              <ul className="mt-4 text-sm space-y-2">
                {filterOptions.constructionType.map((style, index) => {
                  return (
                    <li key={index} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={filters.constructionType.includes(style)}
                        name=""
                        id={`construction-type-${style}`}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFilters({
                              ...filters,
                              constructionType: [
                                ...filters.constructionType,
                                style,
                              ],
                            });
                          } else {
                            setFilters({
                              ...filters,
                              constructionType: filters.constructionType.filter(
                                (c) => c !== style
                              ),
                            });
                          }
                        }}
                      />
                      <label htmlFor={`construction-type-${style}`}>
                        {style}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="w-full">
            <div className="-mt-6 lg:hidden flex items-center justify-center space-x-3 text-[13px] font-medium text-[#777]">
              <span
                className={`${state == "kitchen-cabinets" && "text-[#023E8A]"}`}
              >
                Kitchen
              </span>
              <Switch
                checkedIcon={null}
                uncheckedIcon={null}
                onColor="#CCCCCC"
                offColor="#CCCCCC"
                onHandleColor="#023E8A"
                offHandleColor="#023E8A"
                checked={state == "bathroom-vanities"}
                onChange={() =>
                  setState(
                    state == "kitchen-cabinets"
                      ? "bathroom-vanities"
                      : "kitchen-cabinets"
                  )
                }
              />
              <span
                className={`${
                  state == "bathroom-vanities" && "text-[#023E8A]"
                }`}
              >
                Bathroom
              </span>
            </div>
            <h1 className="hidden lg:block text-[24px] font-semibold mt-10">
              Popular Categories
            </h1>
            <div className="mt-10 hidden lg:grid grid-cols-3 gap-5">
              <div
                onClick={() => {
                  setFilters({
                    ...filters,
                    doorStyle: [...filters.doorStyle, "Shaker"],
                  });
                }}
                className="h-[80px] flex items-center px-6 bg-gradient-to-r cursor-pointer from-[#3875C2] to-[#023E8A] rounded-lg"
              >
                <p className="text-white">Shaker Cabinets</p>
              </div>
              <div className="h-[80px] flex items-center px-6 bg-gradient-to-r from-[#3875C2] to-[#023E8A] rounded-lg">
                <p className="text-white">Traditional Cabinets</p>
              </div>
              <div className="h-[80px] flex items-center px-6 bg-gradient-to-r from-[#3875C2] to-[#023E8A] rounded-lg">
                <p className="text-white">European Cabinets</p>
              </div>
            </div>
            <div className="grid grid-cols-1 place-content-center lg:grid-cols-3 gap-4 mt-8">
              {visibleProducts.map((product, index) => {
                return <ProductListing key={index} product={product} />;
              })}
            </div>
          </div>
        </div>
      </div>

      {sortingTabOpen && (
        <div className="block fixed inset-0 h-full w-full z-20 lg:hidden shrink-0 bg-white overflow-auto px-6">
          <div className="flex items-center mt-6">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 5.00001C8.73478 5.00001 8.48043 5.10537 8.29289 5.2929C8.10536 5.48044 8 5.73479 8 6.00001C8 6.26523 8.10536 6.51958 8.29289 6.70712C8.48043 6.89465 8.73478 7.00001 9 7.00001C9.26522 7.00001 9.51957 6.89465 9.70711 6.70712C9.89464 6.51958 10 6.26523 10 6.00001C10 5.73479 9.89464 5.48044 9.70711 5.2929C9.51957 5.10537 9.26522 5.00001 9 5.00001ZM6.17 5.00001C6.3766 4.41448 6.75974 3.90744 7.2666 3.5488C7.77346 3.19015 8.37909 2.99756 9 2.99756C9.62091 2.99756 10.2265 3.19015 10.7334 3.5488C11.2403 3.90744 11.6234 4.41448 11.83 5.00001H19C19.2652 5.00001 19.5196 5.10537 19.7071 5.2929C19.8946 5.48044 20 5.73479 20 6.00001C20 6.26523 19.8946 6.51958 19.7071 6.70712C19.5196 6.89465 19.2652 7.00001 19 7.00001H11.83C11.6234 7.58554 11.2403 8.09258 10.7334 8.45122C10.2265 8.80986 9.62091 9.00246 9 9.00246C8.37909 9.00246 7.77346 8.80986 7.2666 8.45122C6.75974 8.09258 6.3766 7.58554 6.17 7.00001H5C4.73478 7.00001 4.48043 6.89465 4.29289 6.70712C4.10536 6.51958 4 6.26523 4 6.00001C4 5.73479 4.10536 5.48044 4.29289 5.2929C4.48043 5.10537 4.73478 5.00001 5 5.00001H6.17ZM15 11C14.7348 11 14.4804 11.1054 14.2929 11.2929C14.1054 11.4804 14 11.7348 14 12C14 12.2652 14.1054 12.5196 14.2929 12.7071C14.4804 12.8947 14.7348 13 15 13C15.2652 13 15.5196 12.8947 15.7071 12.7071C15.8946 12.5196 16 12.2652 16 12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1054 15.2652 11 15 11ZM12.17 11C12.3766 10.4145 12.7597 9.90744 13.2666 9.5488C13.7735 9.19015 14.3791 8.99756 15 8.99756C15.6209 8.99756 16.2265 9.19015 16.7334 9.5488C17.2403 9.90744 17.6234 10.4145 17.83 11H19C19.2652 11 19.5196 11.1054 19.7071 11.2929C19.8946 11.4804 20 11.7348 20 12C20 12.2652 19.8946 12.5196 19.7071 12.7071C19.5196 12.8947 19.2652 13 19 13H17.83C17.6234 13.5855 17.2403 14.0926 16.7334 14.4512C16.2265 14.8099 15.6209 15.0025 15 15.0025C14.3791 15.0025 13.7735 14.8099 13.2666 14.4512C12.7597 14.0926 12.3766 13.5855 12.17 13H5C4.73478 13 4.48043 12.8947 4.29289 12.7071C4.10536 12.5196 4 12.2652 4 12C4 11.7348 4.10536 11.4804 4.29289 11.2929C4.48043 11.1054 4.73478 11 5 11H12.17ZM9 17C8.73478 17 8.48043 17.1054 8.29289 17.2929C8.10536 17.4804 8 17.7348 8 18C8 18.2652 8.10536 18.5196 8.29289 18.7071C8.48043 18.8947 8.73478 19 9 19C9.26522 19 9.51957 18.8947 9.70711 18.7071C9.89464 18.5196 10 18.2652 10 18C10 17.7348 9.89464 17.4804 9.70711 17.2929C9.51957 17.1054 9.26522 17 9 17ZM6.17 17C6.3766 16.4145 6.75974 15.9074 7.2666 15.5488C7.77346 15.1902 8.37909 14.9976 9 14.9976C9.62091 14.9976 10.2265 15.1902 10.7334 15.5488C11.2403 15.9074 11.6234 16.4145 11.83 17H19C19.2652 17 19.5196 17.1054 19.7071 17.2929C19.8946 17.4804 20 17.7348 20 18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8947 19.2652 19 19 19H11.83C11.6234 19.5855 11.2403 20.0926 10.7334 20.4512C10.2265 20.8099 9.62091 21.0025 9 21.0025C8.37909 21.0025 7.77346 20.8099 7.2666 20.4512C6.75974 20.0926 6.3766 19.5855 6.17 19H5C4.73478 19 4.48043 18.8947 4.29289 18.7071C4.10536 18.5196 4 18.2652 4 18C4 17.7348 4.10536 17.4804 4.29289 17.2929C4.48043 17.1054 4.73478 17 5 17H6.17Z"
                  fill="#1B1B1B"
                />
              </svg>
            </span>
            <span className="text-[#1b1b1b] font-semibold m-2 text-[18px]">
              Filter & Sort
            </span>
          </div>
          <div className="mt-2 py-6 px-5 bg-white rounded-lg">
            <div className="flex items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    opacity="0.3"
                    d="M10.0007 3.83325C6.32565 3.83325 3.33398 6.82492 3.33398 10.4999C3.33398 14.1749 6.32565 17.1666 10.0007 17.1666C10.234 17.1666 10.4173 16.9833 10.4173 16.7499C10.4147 16.6418 10.3733 16.5383 10.3007 16.4583C9.95898 16.0749 9.77565 15.5833 9.77565 15.0833C9.77565 14.5307 9.99514 14.0008 10.3858 13.6101C10.7765 13.2194 11.3064 12.9999 11.859 12.9999H13.334C15.1757 12.9999 16.6673 11.5083 16.6673 9.66658C16.6673 6.44992 13.6757 3.83325 10.0007 3.83325ZM5.41732 11.3333C4.72565 11.3333 4.16732 10.7749 4.16732 10.0833C4.16732 9.39159 4.72565 8.83325 5.41732 8.83325C6.10898 8.83325 6.66732 9.39159 6.66732 10.0833C6.66732 10.7749 6.10898 11.3333 5.41732 11.3333ZM7.91732 7.99992C7.22565 7.99992 6.66732 7.44159 6.66732 6.74992C6.66732 6.05825 7.22565 5.49992 7.91732 5.49992C8.60898 5.49992 9.16732 6.05825 9.16732 6.74992C9.16732 7.44159 8.60898 7.99992 7.91732 7.99992ZM12.084 7.99992C11.3923 7.99992 10.834 7.44159 10.834 6.74992C10.834 6.05825 11.3923 5.49992 12.084 5.49992C12.7757 5.49992 13.334 6.05825 13.334 6.74992C13.334 7.44159 12.7757 7.99992 12.084 7.99992ZM15.834 10.0833C15.834 10.7749 15.2757 11.3333 14.584 11.3333C13.8923 11.3333 13.334 10.7749 13.334 10.0833C13.334 9.39159 13.8923 8.83325 14.584 8.83325C15.2757 8.83325 15.834 9.39159 15.834 10.0833Z"
                    fill="#555555"
                  />
                  <path
                    d="M9.99935 2.16675C5.40768 2.16675 1.66602 5.90841 1.66602 10.5001C1.66602 15.0917 5.40768 18.8334 9.99935 18.8334C10.4018 18.8333 10.7956 18.7167 11.1332 18.4976C11.4708 18.2785 11.7377 17.9663 11.9017 17.5987C12.0656 17.2312 12.1196 16.824 12.0571 16.4264C11.9945 16.0289 11.8182 15.6579 11.5493 15.3584C11.4949 15.2991 11.4589 15.2252 11.4459 15.1458C11.4329 15.0663 11.4435 14.9848 11.4762 14.9113C11.509 14.8377 11.5626 14.7754 11.6304 14.732C11.6982 14.6885 11.7772 14.6658 11.8577 14.6667H13.3327C16.091 14.6667 18.3327 12.4251 18.3327 9.66675C18.3327 5.53341 14.591 2.16675 9.99935 2.16675ZM13.3327 13.0001H11.8577C11.3051 13.0001 10.7752 13.2196 10.3845 13.6103C9.99384 14.001 9.77435 14.5309 9.77435 15.0834C9.77435 15.5917 9.95768 16.0751 10.2993 16.4584C10.3493 16.5167 10.416 16.6167 10.416 16.7501C10.416 16.9834 10.2327 17.1667 9.99935 17.1667C6.32435 17.1667 3.33268 14.1751 3.33268 10.5001C3.33268 6.82508 6.32435 3.83341 9.99935 3.83341C13.6743 3.83341 16.666 6.45008 16.666 9.66675C16.666 11.5084 15.1743 13.0001 13.3327 13.0001Z"
                    fill="#555555"
                  />
                  <path
                    d="M5.41602 11.3333C6.10637 11.3333 6.66602 10.7736 6.66602 10.0833C6.66602 9.3929 6.10637 8.83325 5.41602 8.83325C4.72566 8.83325 4.16602 9.3929 4.16602 10.0833C4.16602 10.7736 4.72566 11.3333 5.41602 11.3333Z"
                    fill="#555555"
                  />
                  <path
                    d="M7.91602 8C8.60637 8 9.16602 7.44036 9.16602 6.75C9.16602 6.05964 8.60637 5.5 7.91602 5.5C7.22566 5.5 6.66602 6.05964 6.66602 6.75C6.66602 7.44036 7.22566 8 7.91602 8Z"
                    fill="#555555"
                  />
                  <path
                    d="M12.084 8C12.7743 8 13.334 7.44036 13.334 6.75C13.334 6.05964 12.7743 5.5 12.084 5.5C11.3936 5.5 10.834 6.05964 10.834 6.75C10.834 7.44036 11.3936 8 12.084 8Z"
                    fill="#555555"
                  />
                  <path
                    d="M14.584 11.3333C15.2743 11.3333 15.834 10.7736 15.834 10.0833C15.834 9.3929 15.2743 8.83325 14.584 8.83325C13.8936 8.83325 13.334 9.3929 13.334 10.0833C13.334 10.7736 13.8936 11.3333 14.584 11.3333Z"
                    fill="#555555"
                  />
                </svg>
              </span>
              <span className="ml-2 text-sm font-medium text-[#555555]">
                Color
              </span>
              {filters.color.length > 0 && (
                <button
                  onClick={() =>
                    setFilters({
                      ...filters,
                      color: [],
                    })
                  }
                  className="text-[#1877F2] text-sm ml-auto font-medium font-general-sans"
                >
                  Clear
                </button>
              )}
            </div>
            <ul className="mt-4 text-sm space-y-2">
              {filterOptions.color.map((color, index) => {
                return (
                  <li key={index} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={filters.color.includes(color)}
                      name=""
                      id={`filter-color-${color}`}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFilters({
                            ...filters,
                            color: [...filters.color, color],
                          });
                        } else {
                          setFilters({
                            ...filters,
                            color: filters.color.filter((c) => c !== color),
                          });
                        }
                      }}
                    />
                    <label htmlFor={`filter-color-${color}`}>{color}</label>
                  </li>
                );
              })}
            </ul>
            <div className="h-[1px] w-full bg-[#A3A3A3] my-6"></div>
            <div className="flex items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.4467 4.44004L14.9717 5.96504C17.2117 8.20671 18.3326 9.32671 18.3326 10.7184C18.3326 12.1109 17.2117 13.2309 14.9709 15.4717C12.7301 17.7142 11.6101 18.8334 10.2176 18.8334C8.8259 18.8334 7.70507 17.7125 5.46424 15.4717L3.93924 13.9467C2.65174 12.6592 2.00757 12.0159 1.7684 11.18C1.5284 10.3442 1.7334 9.45671 2.1434 7.68254L2.37924 6.65921C2.7234 5.16588 2.8959 4.41921 3.40674 3.90754C3.9184 3.39671 4.66507 3.22421 6.1584 2.88004L7.18174 2.64338C8.95674 2.23421 9.8434 2.02921 10.6792 2.26838C11.5151 2.50838 12.1592 3.15254 13.4467 4.44004ZM9.2884 12.44C8.72757 11.88 8.73174 11.075 9.06757 10.4375C8.98443 10.3175 8.94597 10.172 8.95888 10.0265C8.97179 9.88106 9.03524 9.74469 9.13822 9.64111C9.24121 9.53753 9.37721 9.47329 9.52263 9.45955C9.66804 9.44581 9.81367 9.48343 9.93424 9.56588C10.2176 9.41587 10.5284 9.33588 10.8384 9.33921C11.0042 9.34076 11.1625 9.40809 11.2786 9.52639C11.3948 9.6447 11.4591 9.80428 11.4576 9.97004C11.456 10.1358 11.3887 10.2942 11.2704 10.4103C11.1521 10.5264 10.9925 10.5908 10.8267 10.5892C10.6338 10.5963 10.4514 10.6793 10.3192 10.82C9.99674 11.1425 10.0809 11.4659 10.1717 11.5567C10.2634 11.6475 10.5859 11.7317 10.9084 11.4092C11.5617 10.7559 12.6901 10.5392 13.4126 11.2617C13.9734 11.8225 13.9692 12.6275 13.6334 13.265C13.716 13.3852 13.754 13.5304 13.7409 13.6756C13.7278 13.8208 13.6643 13.9568 13.5615 14.0601C13.4586 14.1634 13.3229 14.2276 13.1778 14.2414C13.0326 14.2552 12.8872 14.2179 12.7667 14.1359C12.3928 14.341 11.959 14.4094 11.5401 14.3292C11.3776 14.2958 11.2351 14.1993 11.1438 14.0608C11.0526 13.9224 11.02 13.7533 11.0534 13.5909C11.0868 13.4284 11.1833 13.2859 11.3218 13.1946C11.4602 13.1034 11.6293 13.0708 11.7917 13.1042C11.9392 13.135 12.1776 13.0867 12.3817 12.8825C12.7042 12.5592 12.6201 12.2367 12.5292 12.1459C12.4376 12.055 12.1151 11.9709 11.7926 12.2934C11.1392 12.9467 10.0109 13.1634 9.2884 12.44ZM8.35007 9.07754C8.50481 8.92275 8.62755 8.73899 8.71127 8.53676C8.795 8.33453 8.83807 8.11779 8.83803 7.89891C8.83799 7.68004 8.79484 7.46331 8.71105 7.26111C8.62725 7.05891 8.50445 6.8752 8.34965 6.72046C8.19486 6.56572 8.0111 6.44298 7.80887 6.35926C7.60664 6.27553 7.3899 6.23246 7.17103 6.2325C6.95215 6.23254 6.73543 6.27569 6.53323 6.35948C6.33103 6.44328 6.14731 6.56608 5.99257 6.72088C5.68006 7.0335 5.50453 7.45746 5.50461 7.8995C5.50469 8.34154 5.68036 8.76544 5.99299 9.07796C6.30561 9.39047 6.72958 9.566 7.17162 9.56592C7.61365 9.56584 8.03756 9.39017 8.35007 9.07754Z"
                    fill="#555555"
                  />
                </svg>
              </span>
              <span className="ml-2 text-sm font-medium text-[#555555]">
                Price
              </span>
              {sorting.length > 0 && (
                <button
                  onClick={() => setSorting("")}
                  className="text-[#1877F2] text-sm ml-auto font-medium font-general-sans"
                >
                  Clear
                </button>
              )}
            </div>
            <ul className="mt-4 text-sm space-y-2">
              <li className="flex items-center space-x-3">
                <input
                  checked={sorting == "h-t-l"}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSorting("h-t-l");
                    }
                  }}
                  type="radio"
                  name="price-sort"
                  id="htl-sort"
                />
                <label htmlFor="htl-sort">High to Low</label>
              </li>
              <li className="flex items-center space-x-3">
                <input
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSorting("l-t-h");
                    }
                  }}
                  type="radio"
                  checked={sorting == "l-t-h"}
                  name="price-sort"
                  id="lth-sort"
                />
                <label htmlFor="lth-sort">Low to High</label>
              </li>
            </ul>
            <div className="h-[1px] w-full bg-[#A3A3A3] my-6"></div>
            <div className="flex items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    opacity="0.3"
                    d="M5.83398 16.3334H14.1673V4.66675H5.83398V16.3334ZM10.834 9.66675H12.5007V11.3334H10.834V9.66675Z"
                    fill="#555555"
                  />
                  <path
                    d="M10.834 9.66675H12.5007V11.3334H10.834V9.66675Z"
                    fill="#555555"
                  />
                  <path
                    d="M15.8333 16.3333V4.66667C15.8333 3.75 15.0833 3 14.1667 3H5.83333C4.91667 3 4.16667 3.75 4.16667 4.66667V16.3333H2.5V18H17.5V16.3333H15.8333ZM14.1667 16.3333H5.83333V4.66667H14.1667V16.3333Z"
                    fill="#555555"
                  />
                </svg>
              </span>
              <span className="ml-2 text-sm font-medium text-[#555555]">
                Door Style
              </span>
              {filters.doorStyle.length > 0 && (
                <button
                  onClick={() =>
                    setFilters({
                      ...filters,
                      doorStyle: [],
                    })
                  }
                  className="text-[#1877F2] text-sm ml-auto font-medium font-general-sans"
                >
                  Clear
                </button>
              )}
            </div>
            <ul className="mt-4 text-sm space-y-2">
              {filterOptions.doorStyle.map((style, index) => {
                return (
                  <li key={index} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={filters.doorStyle.includes(style)}
                      name=""
                      id={`door-style-${style}`}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFilters({
                            ...filters,
                            doorStyle: [...filters.doorStyle, style],
                          });
                        } else {
                          setFilters({
                            ...filters,
                            doorStyle: filters.doorStyle.filter(
                              (c) => c !== style
                            ),
                          });
                        }
                      }}
                    />
                    <label htmlFor={`door-style-${style}`}>{style}</label>
                  </li>
                );
              })}
            </ul>
            <div className="h-[1px] w-full bg-[#A3A3A3] my-6"></div>
            <div className="flex items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M10.9438 9.98398L9.92385 8.96367C9.69023 8.73 9.3736 8.59833 9.04318 8.59745C8.71275 8.59657 8.39542 8.72656 8.16057 8.95899L1.06955 15.5031C0.811349 15.7465 0.641818 16.0566 0.626193 16.4039C0.618675 16.5761 0.646743 16.7481 0.708642 16.909C0.770542 17.0699 0.864945 17.2163 0.985959 17.3391L2.5094 18.8793C2.51021 18.8803 2.51112 18.8812 2.51213 18.882C2.74755 19.1167 3.06607 19.2489 3.39846 19.25H3.44455C3.79182 19.2371 4.10276 19.0742 4.34963 18.8137L10.9395 11.7551C11.0563 11.6392 11.1492 11.5014 11.2126 11.3496C11.2761 11.1978 11.309 11.035 11.3094 10.8704C11.3098 10.7059 11.2777 10.5429 11.215 10.3908C11.1522 10.2386 11.0601 10.1004 10.9438 9.98398ZM19.1406 7.92188L19.1285 7.90977L17.7899 6.58477C17.7115 6.50661 17.6183 6.44477 17.5159 6.40279C17.4134 6.36082 17.3037 6.33956 17.193 6.34024C17.0136 6.3404 16.8388 6.39698 16.6934 6.50195C16.6934 6.48516 16.6957 6.46875 16.6969 6.4543C16.7145 6.20039 16.7418 5.8168 16.4938 5.46914C16.1989 5.07164 15.8751 4.69641 15.525 4.34649C15.5241 4.34535 15.523 4.3443 15.5219 4.34336C15.0016 3.83086 13.8692 2.86563 12.1344 2.1582C11.4765 1.88819 10.7721 1.74952 10.061 1.75C8.82815 1.75 7.89065 2.30625 7.53166 2.63594C7.32839 2.83009 7.14301 3.04214 6.97776 3.26953C6.89881 3.37851 6.85714 3.51005 6.85894 3.6446C6.86075 3.77916 6.90593 3.90953 6.98778 4.01635C7.06962 4.12316 7.18376 4.20071 7.31321 4.23746C7.44266 4.27421 7.58051 4.26819 7.70627 4.22031C7.81582 4.17936 7.92774 4.14505 8.04143 4.11758C8.27818 4.06751 8.52099 4.05237 8.76213 4.07266C9.27736 4.11524 9.88674 4.3711 10.1563 4.58399C10.6133 4.95156 10.8332 5.44688 10.8696 6.18906C10.8766 6.33828 10.568 6.89766 10.0883 7.53594C9.99693 7.65639 9.95231 7.80589 9.96273 7.95672C9.97314 8.10755 10.0379 8.2495 10.1449 8.35625L11.4891 9.70039C11.602 9.81361 11.7541 9.87922 11.9139 9.88373C12.0738 9.88824 12.2293 9.83129 12.3485 9.72461C12.7285 9.38516 13.3074 8.87344 13.5098 8.74805C13.8102 8.56328 14.025 8.52774 14.084 8.52149C14.2371 8.50648 14.391 8.53893 14.525 8.61445C14.5257 8.62114 14.525 8.62789 14.5229 8.63428C14.5208 8.64067 14.5174 8.64656 14.5129 8.65156L14.4418 8.71914L14.4301 8.73008C14.3515 8.80834 14.2893 8.90137 14.2468 9.00381C14.2044 9.10626 14.1826 9.21608 14.1828 9.32697C14.183 9.43786 14.2051 9.54761 14.2479 9.64991C14.2906 9.75222 14.3532 9.84504 14.4321 9.92305L15.7703 11.2477C15.8488 11.3258 15.9419 11.3875 16.0443 11.4295C16.1468 11.4714 16.2565 11.4925 16.3672 11.4918C16.5895 11.4921 16.803 11.4052 16.9617 11.2496L19.1297 9.1082C19.1371 9.10078 19.1446 9.09297 19.1516 9.08516C19.297 8.92573 19.3767 8.71716 19.3747 8.50137C19.3727 8.28557 19.2891 8.07854 19.1406 7.92188Z"
                    fill="#555555"
                  />
                </svg>
              </span>
              <span className="ml-2 text-sm font-medium text-[#555555]">
                Construction Type
              </span>
              {filters.constructionType.length > 0 && (
                <button
                  onClick={() =>
                    setFilters({
                      ...filters,
                      constructionType: [],
                    })
                  }
                  className="text-[#1877F2] text-sm ml-auto font-medium font-general-sans"
                >
                  Clear
                </button>
              )}
            </div>
            <ul className="mt-4 text-sm space-y-2">
              {filterOptions.constructionType.map((style, index) => {
                return (
                  <li key={index} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={filters.constructionType.includes(style)}
                      name=""
                      id={`construction-type-${style}`}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFilters({
                            ...filters,
                            constructionType: [
                              ...filters.constructionType,
                              style,
                            ],
                          });
                        } else {
                          setFilters({
                            ...filters,
                            constructionType: filters.constructionType.filter(
                              (c) => c !== style
                            ),
                          });
                        }
                      }}
                    />
                    <label htmlFor={`construction-type-${style}`}>
                      {style}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Shop;
