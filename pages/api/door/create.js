import connectDatabase from "@/db/dbConnect";
import door from "@/db/models/door";

export default async function handler(req, res) {
  await connectDatabase();
  const { color, image } = req.body;

  const door_ = await new door({
    color,
    image,
  });
  await door_.save();

  res.status(200).json({ success: true, door: door_ });
}
