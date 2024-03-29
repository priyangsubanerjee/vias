/* eslint-disable @next/next/no-img-element */
import { decrypt, encrypt } from "@/helper/crypto";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function CollectionListing({ product }) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const router = useRouter();

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.length == 0 ? [] : JSON.parse(decrypt(cart));
    let isAdded = cart.find((item) => item._id === product._id);
    if (isAdded) {
      setQuantity(isAdded.quantity);
      setIsAddedToCart(true);
    } else {
      setQuantity(0);
      setIsAddedToCart(false);
    }
  }, []);

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.length == 0 ? [] : JSON.parse(decrypt(cart));
    let isAdded = cart.find((item) => item._id === product._id);
    if (isAdded) {
      cart = cart.map((item) => {
        if (item._id === product._id) {
          setQuantity(item.quantity + 1);
          item.quantity++;
        }
        return item;
      });
    } else {
      setQuantity(1);
      cart.push({ ...product, quantity: 1, pid: router.query.pid });
    }
    localStorage.setItem("cart", JSON.stringify(encrypt(JSON.stringify(cart))));
    setIsAddedToCart(true);
    location.reload();
  };

  const handleIncrement = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.length == 0 ? [] : JSON.parse(decrypt(cart));
    console.log("cart", cart);
    cart = cart.map((item) => {
      if (item._id === product._id) {
        setQuantity(item.quantity + 1);
        item.quantity++;
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(encrypt(JSON.stringify(cart))));
    setIsAddedToCart(true);
    location.reload();
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
      setIsAddedToCart(false);
      setQuantity(0);
      location.reload();
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
      setIsAddedToCart(true);
      location.reload();
    }
  };

  return (
    <div className="border border-[#C3C3C3] bg-white rounded-md">
      <div className="flex items-center justify-center py-3 border-b border-[#C3C3C3]">
        <img
          src={product.image.url}
          className="h-[125px] object-contain"
          alt=""
        />
      </div>
      <div className="px-5 py-4">
        <h2 className="text-[#1B1B1B] font-semibold">{product.name}</h2>
        <p className="text-[#555] text-sm mt-2">{product.width}W</p>
        {/* <p className="bg-[#B1C3DB] mt-1 px-2 py-1 rounded-md w-fit text-sm">
          #{product.tag}
        </p> */}
        <div
          style={{
            color: product.inStock ? "#1C7926" : "#FF0000",
          }}
          className="flex items-center mt-3 font-medium space-x-2"
        >
          <Icon
            icon={
              product.inStock
                ? "zondicons:checkmark-outline"
                : "carbon:close-outline"
            }
          />
          <span>{product.inStock ? "In Stock" : "Out of Stock"}</span>
        </div>
        <div className="flex items-center space-x-4 mt-2">
          <h2 className="text-[18px] text-[#1B1B1B] font-semibold">
            ${product.discountedPrice}
          </h2>
          <h2 className="text-[14px] text-[#A3A3A3] font-normal line-through">
            ${product.price}
          </h2>
        </div>
        <div className="mt-5 flex justify-between">
          {isAddedToCart ? (
            <div
              style={{
                opacity: product.inStock ? 1 : 0.5,
                pointerEvents: product.inStock ? "all" : "none",
              }}
              className="flex items-center bg-[#D9D9D9] border border-black rounded-md"
            >
              <button
                onClick={() => {
                  product.inStock && handleDecrement();
                }}
                className="h-[36px] px-3"
              >
                -
              </button>
              <span className="px-3 h-[36px] text-sm flex items-center font-medium border-x border-black">
                {quantity}
              </span>
              <button
                onClick={() => {
                  product.inStock && handleIncrement();
                }}
                className="h-[36px] px-3"
              >
                +
              </button>
            </div>
          ) : (
            <button
              style={{
                opacity: product.inStock ? 1 : 0.5,
                pointerEvents: product.inStock ? "all" : "none",
              }}
              onClick={() => {
                product.inStock && handleAddToCart();
              }}
              className="bg-[#023E8A] px-5 h-[36px] text-white rounded text-sm"
            >
              Add to Cart
            </button>
          )}

          {isAddedToCart && (
            <Link href={"/cart"}>
              <button className="bg-[#023E8A] px-6 py-2 text-sm rounded text-white">
                Go to cart
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default CollectionListing;
