// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDatabase from "@/db/dbConnect";
import users from "@/db/models/users";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  await connectDatabase();
  const { name, credential, password } = JSON.parse(req.body);

  const determineType = (credential) => {
    if (credential.includes("@")) {
      return "email";
    } else {
      return "phone";
    }
  };

  const type = determineType(credential);

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const user_ = new users({
    name,
    credential,
    password: hash,
    phone: type === "phone" ? credential : null,
    email: type === "email" ? credential : null,
  });

  try {
    const user = await user_.save();
    res.status(200).json({ success: true, message: "User created" });
  } catch (error) {
    let decipheredText = error.message.includes("duplicate key")
      ? "Credential already preent, Please Sign In"
      : error.message;
    res.status(500).json({ success: false, message: decipheredText });
  }
}
