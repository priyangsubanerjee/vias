import connectDatabase from "@/db/dbConnect";
import orders from "@/db/models/orders";
import { getServerSession } from "next-auth";
import { authOptions } from "pages/api/auth/[...nextauth]";
import React from "react";

export async function getServerSideProps(context) {
  await connectDatabase();

  let session = await getServerSession(context.req, context.res, authOptions);
  let email = session.user.email;

  let orders_ = await orders.find({ placedBy_email: email });

  return {
    props: {
      orders: JSON.parse(JSON.stringify(orders_)),
    },
  };
}

function MyOrders({ orders }) {
  console.log(orders);
  return (
    <div className="lg:px-[96px] py-[90px] px-6 font-general-sans bg-[#D7F3FF] min-h-screen">
      <h1 className="text-2xl font-semibold"> Recent orders</h1>
      <div className="grid grid-cols-4 gap-4 mt-6">
        {orders.map((order, index) => {
          return (
            <div
              key={index}
              className="border p-6 rounded-lg border-black space-y-2"
            >
              <p className="text-sm">Order number: {order.orderNumber}</p>
              <p className="text-sm">Shipping number: {order.shippingNumber}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyOrders;
