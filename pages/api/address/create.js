import connectDatabase from "@/db/dbConnect";
import users from "@/db/models/users";

export default async function handler(req, res) {
  await connectDatabase();

  const {
    id,
    userEmail,
    email,
    firstName,
    lastName,
    address,
    apartment,
    city,
    state,
    pincode,
    phone,
  } = JSON.parse(req.body);

  const account = await users.findOne({ email: userEmail });
  if (account) {
    account.address.push({
      id,
      email,
      firstName,
      lastName,
      address,
      apartment,
      city,
      state,
      pincode,
      phone,
    });

    await account.save();
    res.status(200).json({
      success: true,
      message: "Address saved successfully",
    });
  } else {
    res.status(400).json({
      success: false,
      message: "User not found",
    });
  }
}
