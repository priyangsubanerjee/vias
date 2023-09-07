import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import orders from "@/db/models/orders";
import connectDatabase from "@/db/dbConnect";
import users from "@/db/models/users";

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  const email = session?.user?.email;
  await connectDatabase();
  let account_ = await users.findOne({ email });
  let orders_ = await orders.find({ placedBy_email: email });
  return {
    props: {
      account: JSON.parse(JSON.stringify(account_)) || {},
      orders: JSON.parse(JSON.stringify(orders_)) || [],
    },
  };
}

function MyOrders({ orders, account }) {
  const [state, setstate] = useState("address");

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
          onClick={() => setstate("address")}
          style={{
            background: state == "address" && "#023E8A",
            color: state == "address" && "#D7F3FF",
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
                <span>{account?.name}</span>
              </p>
              <p className="font-medium text-[#555555]">
                <span className="mr-3 font-semibold text-black">Email:</span>
                <span>{account?.email}</span>
              </p>
              <p className="font-medium text-[#555555]">
                <span className="mr-3 font-semibold text-black">Phone:</span>
                <span>{account?.phone}</span>
              </p>
            </div>
            {account?.password.length !== 0 && (
              <>
                <div className="mt-10">
                  <p className="font-medium text-[#555555]">
                    <span className="mr-3 font-semibold text-black">
                      Password:
                    </span>
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
              </>
            )}
          </div>
        )}
        {state == "orders" && (
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {orders.map((order, index) => {
                console.log(order);
                return (
                  <div
                    key={index}
                    className="p-7 border border-black rounded-md"
                  >
                    <Icon height={23} icon="fluent:box-20-filled" />
                    <h2 className="mt-4 font-semibold text-xl">
                      ${order.totalAmount}
                    </h2>
                    <p className="text-sm mt-3">
                      Shipping number: {order.shippingNumber}
                    </p>
                    <p className="text-sm mt-2">
                      Order number: {order.orderNumber}
                    </p>
                    <p className="text-sm mt-2">
                      Order placed on:{" "}
                      {new Date(order.orderPlaceOn).toLocaleString()}
                    </p>
                    <button className="bg-[#023E8A] h-10 w-full mt-5 rounded text-white">
                      Track Order
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {state == "address" && (
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <div className="border border-black rounded-md overflow-hidden">
                <div className="p-5">
                  <h2 className="font-semibold text-xl">Jane Doe</h2>
                  <p className="text-sm mt-3">Address</p>
                  <p className="text-sm mt-2">Apartment</p>
                  <div className="grid grid-cols-2">
                    <p className="text-sm mt-2">City</p>
                    <p className="text-sm mt-2">State</p>
                  </div>
                  <div className="grid grid-cols-2 mt-1">
                    <p className="text-sm mt-2">Pincode</p>
                    <p className="text-sm mt-2">Phone</p>
                  </div>
                </div>
                <div className="flex font-medium items-center text-sm justify-between bg-white px-5 py-3 border-t border-black">
                  <button className="text-[#023E8A]">Set as default</button>
                  <button className="text-[#DA3A3A]">Delete</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyOrders;
