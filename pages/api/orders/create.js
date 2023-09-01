import connectDatabase from "@/db/dbConnect";
import orders from "@/db/models/orders";
import { v4 as uuidv4 } from "uuid";

export default async function handler(req, res) {
  await connectDatabase();
  const {
    orderedItems,
    coupounsApplied,
    totalAmount,
    shippingDetails,
    placedBy_email,
    placedBy_name,
  } = JSON.parse(req.body);

  const orderObj = new orders({
    orderNumber: uuidv4().substring(0, 8),
    orderedItems,
    coupounsApplied,
    totalAmount: totalAmount,
    shippingNumber: uuidv4().substring(0, 8),
    shippingDetails,
    placedBy_email,
    placedBy_name,
  });

  const order = await orderObj.save();

  return res.json({
    success: true,
    order,
  });
}
