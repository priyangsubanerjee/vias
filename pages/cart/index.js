import CartProduct from "@/components/Cards/CartProduct";
import { decrypt } from "@/helper/crypto";
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

function Cart() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);
  const [state, setState] = useState("cart"); // ["cart", "address"]
  const [address, setAddress] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);
  const [coupons, setCoupons] = useState([]); // [{id, name, discount}

  const handleCheckout = async () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.length == 0 ? [] : JSON.parse(decrypt(cart));

    try {
      const stripe = await stripePromise;
      const response = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart,
          address,
          cancelUrl: "/cart",
        }),
      });

      const { sessionId } = await response.json();
      const { error } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (error) {
        console.log(error);
        router.push("/error");
      }
    } catch (err) {
      console.error("Error in creating checkout session:", err);
      //router.push("/error");
    }
  };

  useEffect(() => {
    let total = 0;
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.length == 0 ? [] : JSON.parse(decrypt(cart));
    cart.forEach((item) => {
      total += item.discountedPrice * item.quantity;
    });
    setTotalAmount(total + 7.5);
    setCartItems(cart);
    loadCoupons();
  }, []);

  const loadCoupons = async () => {
    console.log("load coupons");
    const stripe = require("stripe")(
      "sk_test_51NMN0HCtWx3MLSIaRc3XH7FYHrc9FaX4mj0ehKmWS9cTCY5WTdQllkgFZVCXTpfwOB9FfbrbPdDNHWNwM9inf8LO007xTRcCTl"
    );

    const coupons = await stripe.coupons.list({
      limit: 3,
    });
    console.log(coupons);
  };

  const refreshCart = () => {
    let total = 0;
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.length == 0 ? [] : JSON.parse(decrypt(cart));
    cart.forEach((item) => {
      total += item.discountedPrice * item.quantity;
    });
    setTotalAmount(total + 7.5);
    setCartItems(cart);
  };

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.length == 0 ? [] : JSON.parse(decrypt(cart));
    let total = 0;
    cart.forEach((item) => {
      total += item.discountedPrice * item.quantity;
    });
    setTotalAmount(total + 7.5);
  }, [cartItems]);

  return (
    <div className="lg:px-[96px] py-[90px] px-6 font-general-sans bg-[#D7F3FF] min-h-screen">
      {cartItems.length !== 0 && (
        <div className="flex justify-center space-x-3">
          <div className="flex flex-col items-center justify-center space-y-2">
            <span
              className={`h-10 w-10 rounded-full border border-black ${
                state == "cart" && "bg-black text-white"
              } text-black flex items-center justify-center`}
            >
              1
            </span>
            <span className="font-medium">Cart</span>
          </div>
          <div className="mt-5 w-32 border-black border-t border-dashed h-[1px]"></div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <span
              className={`h-10 w-10 rounded-full border border-black ${
                state == "address" && "bg-black text-white"
              } text-black flex items-center justify-center`}
            >
              2
            </span>
            <span className="font-medium">Address</span>
          </div>
          <div className="mt-5 w-32 border-black border-t border-dashed h-[1px]"></div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <span
              className={`h-10 w-10 rounded-full border border-black bg-black/0 text-black flex items-center justify-center`}
            >
              3
            </span>
            <span className="font-medium">Payment</span>
          </div>
        </div>
      )}

      {state == "cart" && (
        <>
          {cartItems.length == 0 ? (
            <div className="flex flex-col items-center mt-32">
              <h1 className="text-[28px] font-semibold text-center">
                Your cart is empty
              </h1>
              <p className="text-center text-sm mt-3">
                Looks like you haven&apos;t added anything to your cart yet
              </p>
              <button
                onClick={() => (window.location.href = "/shop")}
                className="mx-auto mt-10 bg-black text-white px-7 py-3"
              >
                <span className="text-[#fff] font-medium">
                  Return to shopping
                </span>
              </button>
            </div>
          ) : (
            <div className="lg:flex lg:space-x-16 mt-16">
              <div className="lg:w-[720px] shrink-0">
                <h1 className="text-[18px] font-medium">Shopping Cart</h1>
                <div className="bg-[#F2F2F2] border border-[#777777] p-5 rounded-[16px] mt-4">
                  {cartItems.map((item, index) => {
                    if (index < cartItems.length - 1) {
                      return (
                        <>
                          <CartProduct
                            refreshCart={refreshCart}
                            product={item}
                          />
                          <div className="h-[1px] bg-[#ADADAD] w-full my-10"></div>
                        </>
                      );
                    } else {
                      return (
                        <CartProduct
                          refreshCart={refreshCart}
                          key={index}
                          product={item}
                        />
                      );
                    }
                  })}
                </div>
              </div>

              <div className="w-full mt-20 lg:mt-0">
                <h1 className="text-[18px] font-medium">Coupons</h1>
                <div className="h-[65px] border border-[#BEBEBE] bg-[#F0F0F0] mt-5 rounded-lg flex items-center px-5">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_465_2574)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.5371 2.16395C10.9409 2.12722 11.3479 2.1727 11.7336 2.29765C12.1192 2.4226 12.4756 2.62443 12.7811 2.89095L12.9311 3.03095L20.7531 10.854C21.2914 11.3924 21.6049 12.1153 21.63 12.8763C21.655 13.6372 21.3898 14.3793 20.8881 14.952L20.7531 15.096L15.0961 20.753C14.5577 21.2913 13.8347 21.6047 13.0738 21.6298C12.3128 21.6549 11.5708 21.3897 10.9981 20.888L10.8541 20.753L3.03011 12.93C2.74358 12.6434 2.51807 12.3019 2.36717 11.9258C2.21627 11.5498 2.14311 11.147 2.15211 10.742L2.16311 10.537L2.63511 5.35195C2.6957 4.68374 2.97856 4.05512 3.43846 3.56658C3.89836 3.07803 4.50876 2.75776 5.17211 2.65695L5.35111 2.63595L10.5371 2.16395ZM8.02411 8.02495C7.83835 8.21071 7.691 8.43123 7.59047 8.67393C7.48994 8.91663 7.4382 9.17676 7.4382 9.43945C7.4382 9.70215 7.48994 9.96228 7.59047 10.205C7.691 10.4477 7.83835 10.6682 8.02411 10.854C8.20986 11.0397 8.43039 11.1871 8.67309 11.2876C8.91579 11.3881 9.17591 11.4399 9.43861 11.4399C9.7013 11.4399 9.96143 11.3881 10.2041 11.2876C10.4468 11.1871 10.6674 11.0397 10.8531 10.854C11.2283 10.4788 11.439 9.96999 11.439 9.43945C11.439 8.90891 11.2283 8.4001 10.8531 8.02495C10.478 7.6498 9.96915 7.43905 9.43861 7.43905C8.90807 7.43905 8.39926 7.6498 8.02411 8.02495Z"
                          fill="#1B1B1B"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_465_2574">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <p className="font-semibold ml-3">Coupons</p>
                  <span className="bg-[#023E8A] text-white rounded-md px-2 py-1 text-[14px] ml-auto">
                    VIAS200
                  </span>
                  <button className="ml-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M15 15L3 3M15 3L3 15"
                        stroke="#777777"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </button>
                </div>
                <p className="text-[#023E8A] font-semibold mt-3 text-[13px]">
                  You applied a coupon and claimed 20% OFF.
                </p>
                <h1 className="text-[18px] font-medium mt-10">Price Details</h1>
                <div className="bg-[#F2F2F2] border border-[#777777] p-5 rounded-[16px] mt-4">
                  <ul className="space-y-3">
                    {cartItems.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center justify-between"
                        >
                          <span className="text-[#777777] font-medium text-[14px]">
                            {item.quantity} X {item.name}
                          </span>
                          <span className="text-[#1b1b1b] font-medium">
                            ${item.discountedPrice * item.quantity}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  <ul className="space-y-3 mt-3">
                    <li className="flex items-center justify-between">
                      <span className="text-[#023E8A] font-medium text-[14px]">
                        Coupon discount
                      </span>
                      <span className="text-[#023E8A] font-medium">-$5.80</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-[#777777] font-medium text-[14px]">
                        Delivery charges
                      </span>
                      <span className="text-[#1B1B1B] font-medium">$7.50</span>
                    </li>
                  </ul>
                  <div className="h-[1px] bg-[#777] w-full mt-10"></div>
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-[18px] text-black font-semibold">
                      Total Amount
                    </p>
                    <p className="text-[18px] text-black font-semibold">
                      ${totalAmount}
                    </p>
                  </div>
                  <div className="mt-4">
                    <button
                      onClick={() => {
                        setState("address");
                      }}
                      className="h-[50px] bg-black text-white rounded-md w-full flex items-center justify-center"
                    >
                      <span>Proceed to checkout</span>
                      <span className="ml-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="12"
                          viewBox="0 0 14 12"
                          fill="none"
                        >
                          <path
                            d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM13.5303 6.53033C13.8232 6.23744 13.8232 5.76256 13.5303 5.46967L8.75736 0.696699C8.46447 0.403806 7.98959 0.403806 7.6967 0.696699C7.40381 0.989593 7.40381 1.46447 7.6967 1.75736L11.9393 6L7.6967 10.2426C7.40381 10.5355 7.40381 11.0104 7.6967 11.3033C7.98959 11.5962 8.46447 11.5962 8.75736 11.3033L13.5303 6.53033ZM1 6.75H13V5.25H1V6.75Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {state == "address" && (
        <div className="flex space-x-10 mt-16">
          <div className="w-[720px] shrink-0">
            <h1 className="text-[18px] font-medium mt-10">Contact details</h1>
            <input
              type="text"
              value={address.email || ""}
              onChange={(e) => {
                setAddress({ ...address, email: e.target.value });
              }}
              className="px-5 w-[431px] mt-3 h-[55px] border border-[#BEBEBE] rounded-lg bg-[#F0F0F0]"
              placeholder="Email address"
              name=""
              id=""
            />
            <h1 className="text-[18px] font-medium mt-10">Shipping details</h1>
            <div className="grid grid-cols-2 gap-4 mt-5">
              <input
                type="text"
                value={address.firstName || ""}
                onChange={(e) => {
                  setAddress({ ...address, firstName: e.target.value });
                }}
                className="px-5 w-full h-[55px] border border-[#BEBEBE] rounded-lg bg-[#F0F0F0] placeholder:text-[#777]"
                placeholder="First name"
                name=""
                id=""
              />
              <input
                type="text"
                value={address.lastName || ""}
                onChange={(e) => {
                  setAddress({ ...address, lastName: e.target.value });
                }}
                className="px-5 w-full h-[55px] border border-[#BEBEBE] rounded-lg bg-[#F0F0F0] placeholder:text-[#777]"
                placeholder="Last name"
                name=""
                id=""
              />
              <input
                type="text"
                value={address.address || ""}
                onChange={(e) => {
                  setAddress({ ...address, address: e.target.value });
                }}
                className="px-5 col-span-2 w-full h-[55px] border border-[#BEBEBE] rounded-lg bg-[#F0F0F0] placeholder:text-[#777]"
                placeholder="Address"
                name=""
                id=""
              />
              <input
                type="text"
                value={address.apartment || ""}
                onChange={(e) => {
                  setAddress({ ...address, apartment: e.target.value });
                }}
                className="px-5 col-span-2 w-full h-[55px] border border-[#BEBEBE] rounded-lg bg-[#F0F0F0] placeholder:text-[#777]"
                placeholder="Apartment, suite, etc. (optional)"
                name=""
                id=""
              />
              <input
                type="text"
                value={address.city || ""}
                onChange={(e) => {
                  setAddress({ ...address, city: e.target.value });
                }}
                className="px-5 w-full h-[55px] border border-[#BEBEBE] rounded-lg bg-[#F0F0F0] placeholder:text-[#777]"
                placeholder="City"
                name=""
                id=""
              />
              <input
                type="text"
                value={address.state || ""}
                onChange={(e) => {
                  setAddress({ ...address, state: e.target.value });
                }}
                className="px-5 w-full h-[55px] border border-[#BEBEBE] rounded-lg bg-[#F0F0F0] placeholder:text-[#777]"
                placeholder="State"
                name=""
                id=""
              />
              <input
                type="text"
                value={address.pincode || ""}
                onChange={(e) => {
                  setAddress({ ...address, pincode: e.target.value });
                }}
                className="px-5 w-full h-[55px] border border-[#BEBEBE] rounded-lg bg-[#F0F0F0] placeholder:text-[#777]"
                placeholder="Pincode"
                name=""
                id=""
              />
              <input
                type="text"
                value={address.phone || ""}
                onChange={(e) => {
                  setAddress({ ...address, phone: e.target.value });
                }}
                className="px-5 w-full h-[55px] border border-[#BEBEBE] rounded-lg bg-[#F0F0F0] placeholder:text-[#777]"
                placeholder="Phone number"
                name=""
                id=""
              />
            </div>
            <div className="mt-5 flex items-center space-x-2">
              <input type="checkbox" name="" id="" />
              <span className="text-[13px] font-medium text-[#777]">
                Save this information for next time
              </span>
            </div>
            <button
              onClick={() => {
                setState("cart");
              }}
              className="mt-10 flex items-center space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14 7L9 12L14 17"
                  stroke="#1B1B1B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="text-[#1b1b1b] font-medium">Return to cart</span>
            </button>
          </div>
          <div className="w-full">
            <h1 className="text-[18px] font-medium mt-10">Price Details</h1>
            <div className="bg-[#F2F2F2] border border-[#777777] p-5 rounded-[16px] mt-4">
              <ul className="space-y-3">
                {cartItems.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <span className="text-[#777777] font-medium text-[14px]">
                        {item.quantity} X {item.name}
                      </span>
                      <span className="text-[#1b1b1b] font-medium">
                        ${item.discountedPrice * item.quantity}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <ul className="space-y-3 mt-3">
                <li className="flex items-center justify-between">
                  <span className="text-[#023E8A] font-medium text-[14px]">
                    Coupon discount
                  </span>
                  <span className="text-[#023E8A] font-medium">-$5.80</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-[#777777] font-medium text-[14px]">
                    Delivery charges
                  </span>
                  <span className="text-[#1B1B1B] font-medium">$7.50</span>
                </li>
              </ul>
              <div className="h-[1px] bg-[#777] w-full mt-10"></div>
              <div className="flex items-center justify-between mt-4">
                <p className="text-[18px] text-black font-semibold">
                  Total Amount
                </p>
                <p className="text-[18px] text-black font-semibold">
                  ${totalAmount}
                </p>
              </div>
              <div className="mt-4">
                <button
                  onClick={() => {
                    handleCheckout();
                  }}
                  className="h-[50px] bg-black text-white rounded-md w-full flex items-center justify-center"
                >
                  <span>Proceed to checkout</span>
                  <span className="ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="12"
                      viewBox="0 0 14 12"
                      fill="none"
                    >
                      <path
                        d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM13.5303 6.53033C13.8232 6.23744 13.8232 5.76256 13.5303 5.46967L8.75736 0.696699C8.46447 0.403806 7.98959 0.403806 7.6967 0.696699C7.40381 0.989593 7.40381 1.46447 7.6967 1.75736L11.9393 6L7.6967 10.2426C7.40381 10.5355 7.40381 11.0104 7.6967 11.3033C7.98959 11.5962 8.46447 11.5962 8.75736 11.3033L13.5303 6.53033ZM1 6.75H13V5.25H1V6.75Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
