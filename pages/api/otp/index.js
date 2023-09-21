const bcrypt = require("bcrypt");
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

export default async function handler(req, res) {
  const { phone } = JSON.parse(req.body);
  const otp = Math.floor(100000 + Math.random() * 900000);

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(otp.toString(), salt);

  const message = await client.messages.create({
    body: `Your OTP is ${otp}`,
    from: process.env.OTP_FROM,
    to: phone,
  });

  console.log(message.sid);

  res
    .status(200)
    .json({ success: true, message: "OTP sent successfully", hash });
}
