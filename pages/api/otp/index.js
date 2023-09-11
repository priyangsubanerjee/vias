const accountSid = "ACd6f9809db42bed867cd8a487a9eae641";
const authToken = "d928552e3891939e111b837da89851a4";
const client = require("twilio")(accountSid, authToken);
const bcrypt = require("bcrypt");

export default async function handler(req, res) {
  const { phone } = JSON.parse(req.body);
  const otp = Math.floor(100000 + Math.random() * 900000);

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(otp.toString(), salt);

  client.messages
    .create({
      body: `Your OTP is for logging into viascabinet.com is ${otp}`,
      from: "+18777936123",
      to: phone,
    })
    .then((message) => console.log(message.sid));
  res
    .status(200)
    .json({ success: true, message: "OTP sent successfully", hash: hash });
}
