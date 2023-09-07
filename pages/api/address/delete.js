import connectDatabase from "@/db/dbConnect";
import users from "@/db/models/users";

export default async function handler(req, res) {
  const { email, id } = JSON.parse(req.body);
  await connectDatabase();

  let account = await users.findOne({ email });
  if (account) {
    let address = account.address;
    let newAddress = address.filter((item) => item.id != id);
    account.address = newAddress;
    await account.save();
    res.status(200).json({
      success: true,
      message: "Address deleted successfully",
    });
  } else {
    res.status(400).json({
      success: false,
      message: "User not found",
    });
  }
}
