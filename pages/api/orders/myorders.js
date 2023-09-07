import connectDatabase from "@/db/dbConnect";
import orders from "@/db/models/orders";
export default async function handler(req, res) {
  const { email } = JSON.parse(req.body);
  await connectDatabase();
  let orders_ = await orders.find({ placedBy_email: email });

  return res.json({
    success: true,
    orders: orders_,
  });
}
