import React, { useState } from "react";

function MyOrders() {
  const [state, setstate] = useState("account");

  return (
    <div className="lg:px-[96px] py-[90px] px-6 font-general-sans bg-[#D7F3FF] min-h-screen">
      <h1 className="text-4xl font-semibold">Your account</h1>
      <div className="mt-8 flex space-x-3 font-medium">
        <button
          onClick={() => setstate("account")}
          style={{
            background: state == "account" && "#023E8A",
            color: state == "account" && "#D7F3FF",
          }}
          className="h-[48px] px-10 rounded-full border border-black"
        >
          Account
        </button>
        <button
          onClick={() => setstate("orders")}
          style={{
            background: state == "orders" && "#023E8A",
            color: state == "orders" && "#D7F3FF",
          }}
          className="h-[48px] px-10 rounded-full border border-black"
        >
          Orders
        </button>
        <button
          onClick={() => setstate("addresses")}
          style={{
            background: state == "addresses" && "#023E8A",
            color: state == "addresses" && "#D7F3FF",
          }}
          className="h-[48px] px-10 rounded-full border border-black"
        >
          Saved addresses
        </button>
      </div>

      <div className="mt-20">
        {state == "account" && (
          <div>
            <div className="space-y-3">
              <p className="font-medium text-[#555555]">
                <span className="mr-3 font-semibold text-black">Name:</span>
                <span>John Doe</span>
              </p>
              <p className="font-medium text-[#555555]">
                <span className="mr-3 font-semibold text-black">Email:</span>
                <span>priyangsu26@gmail.com</span>
              </p>
              <p className="font-medium text-[#555555]">
                <span className="mr-3 font-semibold text-black">Phone:</span>
                <span>911</span>
              </p>
            </div>
            <div className="mt-10">
              <p className="font-medium text-[#555555]">
                <span className="mr-3 font-semibold text-black">Password:</span>
                <span className="inline-flex space-x-1">
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                </span>
              </p>
            </div>
            <button className="h-12 flex items-center px-10 border border-black rounded mt-7">
              Change password
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyOrders;
