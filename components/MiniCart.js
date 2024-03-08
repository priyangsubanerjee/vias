import { decrypt } from "@/helper/crypto";
import React, { useEffect, useState } from "react";
import CartProduct from "./Cards/CartProduct";
import { useRouter } from "next/router";

function MiniCart() {
  const router = useRouter();
  const [totalAmount, setTotalAmount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [numItems, setNumItems] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    let total = 0;
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.length == 0 ? [] : JSON.parse(decrypt(cart));
    cart.forEach((item) => {
      total += item.discountedPrice * item.quantity;
      setNumItems(numItems + item.quantity);
    });

    setTotalAmount(total);
    setCartItems(cart);
  }, []);

  const refreshCart = () => {
    let total = 0;
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.length == 0 ? [] : JSON.parse(decrypt(cart));
    cart.forEach((item) => {
      total += item.discountedPrice * item.quantity;
    });

    setTotalAmount(total);
    setCartItems(cart);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 py-6 px-14">
      {router.pathname !== "/cart" && (
        <div className="bg-[#fff] rounded-md shadow-xl shadow-black/10 overflow-hidden">
          <div className="h-14 md:flex justify-between items-center px-10">
            <div></div>
            <div
              className="flex items-center w-fit md:translate-x-14"
              onClick={() => setExpanded(!expanded)}
            >
              <span>Shopping cart</span>
              <button className="h-7 w-7 bg-neutral-100 hover:bg-neutral-200 rounded-full flex items-center justify-center ml-2">
                <iconify-icon
                  height="18"
                  icon="icon-park-outline:up"
                ></iconify-icon>
              </button>
            </div>
            <div className="flex items-center">
              <span className="font-semibold">{numItems}</span>
              <span className="ml-2">Items&apos;s &nbsp; →</span>
              <span className="ml-5 font-semibold">${totalAmount}</span>
            </div>
          </div>
          {expanded && (
            <div className="h-[500px] bg-neutral-50 px-5 overflow-auto relative pb-16">
              <div className="flex items-center justify-end py-5 text-sm bg-neutral-50 sticky top-0 inset-x-0">
                <button
                  onClick={() => {
                    localStorage.removeItem("cart");
                    refreshCart();
                    router.reload();
                  }}
                  className="px-4 h-10 bg-neutral-200"
                >
                  Clear all
                </button>
                <button
                  onClick={() => {
                    router.push("/cart");
                  }}
                  className="bg-[#023E8A] text-white px-4 h-10 ml-3"
                >
                  Visit cart
                </button>
              </div>
              <div>
                {cartItems.length == 0 && (
                  <div className="flex items-center justify-center">
                    <span className="text-[#555]">No items in cart</span>
                  </div>
                )}
              </div>
              <div className="">
                {cartItems.map((item, index) => {
                  if (index < cartItems.length - 1) {
                    return (
                      <>
                        <CartProduct
                          refreshCart={() => refreshCart()}
                          product={item}
                        />
                        <div className="h-[1px] bg-[#ADADAD] w-full my-10"></div>
                      </>
                    );
                  } else {
                    return (
                      <CartProduct
                        refreshCart={() => refreshCart()}
                        key={index}
                        product={item}
                      />
                    );
                  }
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MiniCart;
