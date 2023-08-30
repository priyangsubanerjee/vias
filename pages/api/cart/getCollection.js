import connectDatabase from "@/db/dbConnect";
import products from "@/db/models/products";

export default async function handler(req, res) {
  const { pid, cid } = JSON.parse(req.body);
  await connectDatabase();

  let product_ = await products.findOne({
    _id: pid,
  });
  product_ = JSON.parse(JSON.stringify(product_));
  let collection = product_.collections.find((item) => item._id === cid);
  collection = JSON.parse(JSON.stringify(collection));
  res.status(200).json(collection);
}
