import connectDatabase from "@/db/dbConnect";
import orders from "@/db/models/orders";
import Link from "next/link";
import React from "react";

export async function getServerSideProps(context) {
  const sessionId = context.query.sid;
  const orderId = context.query.oid;
  await connectDatabase();

  let order_ = await orders.findOne({
    _id: orderId,
  });

  if (order_.paymentSuccessfull == true) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }

  order_ = await orders.findOneAndUpdate(
    {
      _id: orderId,
    },
    {
      checkoutSessionId: sessionId,
      paymentSuccessfull: sessionId ? true : false,
    }
  );

  await order_.save();
  let message = `New order placed by (${order_.placedBy_email})%0A%0AOrder Number: ${order_.orderNumber}%0AShipping Number: ${order_.shippingNumber}%0ATotal Amount: $${order_.totalAmount}%0APayment successfull: ${order_.paymentSuccessfull}%0A%0APayment session id:%0A-------------%0A${order_.checkoutSessionId}%0A%0A-------------
    %0A%0AShipping Details:%0A
    Email: ${order_.shippingDetails.email}%0A
    First name: ${order_.shippingDetails.firstName}%0A
    Last name: ${order_.shippingDetails.lastName}%0A
    Address: ${order_.shippingDetails.address}%0A
    Apartment: ${order_.shippingDetails.apartment}%0A
    City: ${order_.shippingDetails.city}%0A
    State: ${order_.shippingDetails.state}%0A
    Pincode: ${order_.shippingDetails.pincode}%0A
    Phone: ${order_.shippingDetails.phone}%0A
  `;
  let url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${process.env.TELEGRAM_CHAT_ID}&text=${message}`;

  await fetch(url, {
    method: "GET",
  });

  return {
    props: {
      order: JSON.parse(JSON.stringify(order_)),
    },
  };
}

function Success({ order }) {
  return (
    <div className="lg:px-[96px] py-[90px] px-6 font-general-sans bg-[#D7F3FF] min-h-screen flex justify-center">
      <div className="border w-[550px] h-fit p-7 border-[#B1C3DB] rounded-xl">
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M71.875 31.0554L87.105 24.9604C86.55 24.5302 85.9374 24.1751 85.285 23.9154L56.5 12.4004C52.3274 10.7311 47.6726 10.7311 43.5 12.4004L34.375 16.0554L71.875 31.0554ZM65.145 33.7454L50.005 39.8054H50L12.895 24.9604C13.45 24.5302 14.0626 24.1801 14.715 23.9204L27.645 18.7454L65.145 33.7454ZM10.175 29.2604C10.06 29.7854 10 30.3304 10 30.8804V69.1104C9.99975 70.6096 10.4488 72.0745 11.2893 73.316C12.1297 74.5575 13.323 75.5186 14.715 76.0754L43.5 87.5904C44.786 88.1049 46.1288 88.4641 47.5 88.6604V83.9704C45.9 80.4804 45 76.5954 45 72.4954C44.9949 68.5363 45.8478 64.6232 47.5 61.0254V44.1904L10.175 29.2604ZM90 51.2804V30.8804C90 30.3304 89.94 29.7854 89.825 29.2604L52.5 44.1904V53.6204C55.0683 50.8939 58.1679 48.7225 61.6077 47.24C65.0474 45.7575 68.7544 44.9952 72.5 45.0004C78.8872 44.9888 85.0775 47.2103 90 51.2804Z"
              fill="#023E8A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M72.5 95.0004C78.4674 95.0004 84.1903 92.6298 88.4099 88.4103C92.6295 84.1907 95 78.4677 95 72.5004C95 66.533 92.6295 60.81 88.4099 56.5905C84.1903 52.3709 78.4674 50.0004 72.5 50.0004C66.5326 50.0004 60.8097 52.3709 56.5901 56.5905C52.3705 60.81 50 66.533 50 72.5004C50 78.4677 52.3705 84.1907 56.5901 88.4103C60.8097 92.6298 66.5326 95.0004 72.5 95.0004ZM80.73 63.2354L67.5 76.4654L64.27 73.2354C63.8012 72.7659 63.1652 72.5019 62.5018 72.5015C61.8384 72.501 61.2019 72.7641 60.7325 73.2329C60.2631 73.7016 59.9991 74.3377 59.9986 75.0011C59.9981 75.6645 60.2612 76.3009 60.73 76.7704L65.73 81.7704C65.9622 82.0032 66.2381 82.1879 66.5418 82.3139C66.8456 82.44 67.1712 82.5048 67.5 82.5048C67.8288 82.5048 68.1544 82.44 68.4582 82.3139C68.7619 82.1879 69.0378 82.0032 69.27 81.7704L84.27 66.7704C84.5021 66.5379 84.6862 66.262 84.8117 65.9585C84.9372 65.6549 85.0016 65.3296 85.0014 65.0011C85.0012 64.6726 84.9362 64.3474 84.8103 64.044C84.6844 63.7406 84.4999 63.465 84.2675 63.2329C84.0351 63.0007 83.7592 62.8167 83.4556 62.6912C83.152 62.5657 82.8267 62.5012 82.4982 62.5015C81.8348 62.5019 81.1988 62.7659 80.73 63.2354Z"
              fill="#1C7926"
            />
          </svg>
        </div>
        <div className="text-center mt-5 font-semibold text-[24px]">
          <h1 className="text-[#011630]">Order Placed Successfully!</h1>
        </div>
        <div className="mt-8 px-24">
          <p className="text-sm text-[#444] font-medium tracking-wider uppercase">
            ORDER NO.
          </p>
          <p className="text-[#023E8A] mt-1 text-base font-medium">
            #{order.orderNumber}
          </p>
          <p className="text-sm text-[#444] font-medium tracking-wider uppercase mt-5">
            Shipping number
          </p>
          <p className="text-[#023E8A] mt-1 text-base font-medium">
            #{order.shippingNumber}
          </p>
        </div>
        <div className="grid grid-cols-2 space-x-3 mt-7 px-16">
          <Link
            className="block w-full"
            href={"/orderstatus?oid=" + order.orderNumber}
          >
            <button className="h-12 text-sm text-center text-white bg-[#023E8A] rounded w-full">
              Track order
            </button>
          </Link>
          <Link className="block w-full" href="/">
            <button className="h-12 text-center text-white bg-neutral-900 rounded text-sm w-full">
              Return to home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Success;
