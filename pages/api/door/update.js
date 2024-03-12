import connectDatabase from "@/db/dbConnect";
import door from "@/db/models/door";

export default async function handler(req, res) {
  await connectDatabase();
  const { color, image, id } = req.body;

  const door_ = await door.findById(id);
  door_.color = color;
  door_.image = image;
  await door_.save();

  res.status(200).json({ success: true });
}
