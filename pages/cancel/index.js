import connectDatabase from "@/db/dbConnect";
import orders from "@/db/models/orders";
import Link from "next/link";
import React from "react";

export async function getServerSideProps(context) {
  const orderId = context.query.oid;
  await connectDatabase();

  await orders.findOneAndDelete({
    _id: orderId,
  });

  return {
    props: {
      deleted: true,
    },
  };
}

function CancelTransaction() {
  return (
    <div className="lg:px-[96px] py-[90px] px-6 font-general-sans bg-[#D7F3FF] min-h-screen">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold">Transaction aborted</h2>
        <p className="text-center mt-3">
          We could&apos;nt confirm your order since you canceled the
          transaction.
        </p>
        <Link href={"/cart"}>
          <button className="mt-16 bg-neutral-950 px-9 py-4 rounded text-white">
            Return to cart
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CancelTransaction;
