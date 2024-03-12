import connectDatabase from "@/db/dbConnect";
import door from "@/db/models/door";

export default async function handler(req, res) {
  await connectDatabase();

  const door_ = await door.find({});
  res.status(200).json({ success: true, doors: door_ });
}
