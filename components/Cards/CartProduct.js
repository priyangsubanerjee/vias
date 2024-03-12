/* eslint-disable @next/next/no-img-element */
import { decrypt, encrypt } from "@/helper/crypto";
import { useRouter } from "next/router";
import React, { useState } from "react";

function CartProduct({ product, refreshCart }) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(product.quantity);

  const handleIncrement = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.length == 0 ? [] : JSON.parse(decrypt(cart));
    cart = cart.map((item) => {
      if (item._id === product._id) {
        setQuantity(item.quantity + 1);
        item.quantity++;
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(encrypt(JSON.stringify(cart))));
    refreshCart();
    router.reload();
  };

  const handleDecrement = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.length == 0 ? [] : JSON.parse(decrypt(cart));
    let item = cart.find((item) => item._id === product._id);
    if (item.quantity === 1) {
      cart = cart.filter((item) => item._id !== product._id);
      localStorage.setItem(
        "cart",
        JSON.stringify(encrypt(JSON.stringify(cart)))
      );
      setQuantity(0);
      refreshCart();
    } else {
      cart = cart.map((item) => {
        if (item._id === product._id) {
          setQuantity(item.quantity - 1);
          item.quantity--;
        }
        return item;
      });
      localStorage.setItem(
        "cart",
        JSON.stringify(encrypt(JSON.stringify(cart)))
      );
      refreshCart();
    }
    router.reload();
  };

  const handleRemove = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.length == 0 ? [] : JSON.parse(decrypt(cart));
    cart = cart.filter((item) => item._id !== product._id);
    localStorage.setItem("cart", JSON.stringify(encrypt(JSON.stringify(cart))));
    refreshCart();
    router.reload();
  };

  return (
    <div className="product">
      <div className="lg:flex lg:space-x-7">
        <div className="h-[135px] w-[135px] bg-white rounded-md shrink-0 flex items-center justify-center overflow-hidden">
          <img
            src={product.image.url}
            className="h-[90%] w-[90%] object-cover"
            alt=""
          />
        </div>
        <div className="w-full">
          <div className="flex h-fit w-full items-center">
            <div>
              <h2 className="font-medium text-[18px]">{product?.name}</h2>
              <p className="text-[#666666] mt-2">TAG {product?.tag}</p>
              <p className="text-[#666666] mt-2">{product?.doorColor}</p>
            </div>
            <div className="ml-auto">
              <p className="text-[#023E8A] font-medium text-[14px]">
                Unit Price
              </p>
              <p className="text-[20px] font-semibold text-[#1b1b1b]">
                ${product.discountedPrice}
              </p>
            </div>
            <div className="ml-16">
              <p className="text-[#023E8A] font-medium text-[14px]">Subtotal</p>
              <p className="text-[20px] font-semibold text-[#1b1b1b]">
                ${product.discountedPrice * product.quantity}
              </p>
            </div>
            <button className="ml-16" onClick={() => handleRemove()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M14.1064 25.8917L25.8931 14.1084M14.1064 14.1084L25.8931 25.8917"
                  stroke="#1B1B1B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>

          <div className="mt-10">
            <div className="flex items-center space-x-2">
              <button onClick={() => handleDecrement()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 3.89 3.89 3 5 3ZM17 11H7V13H17V11Z"
                    fill="#343434"
                  />
                </svg>
              </button>
              <span className="text-[#1b1b1b]">{quantity}</span>
              <button onClick={() => handleIncrement()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17 13H13V17H11V13H7V11H11V7H13V11H17M19 3H5C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3Z"
                    fill="#343434"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
