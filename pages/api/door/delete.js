import connectDatabase from "@/db/connect";
import door from "@/db/models/door";

export default async function handler(req, res) {
  await connectDatabase();
  const { id } = req.body;

  const door_ = await door.findByIdAndDelete(id);

  res.status(200).json({ success: true });
}
