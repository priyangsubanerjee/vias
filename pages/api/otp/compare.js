const bcrypt = require("bcrypt");

export default async function handler(req, res) {
  const { typed, hash } = JSON.parse(req.body);
  if (bcrypt.compare(typed, hash)) {
    res
      .status(200)
      .json({ success: true, message: "OTP verified successfully" });
  } else {
    res.status(200).json({ success: false, message: "Wrong OTP" });
  }
}
