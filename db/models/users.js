const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  credential: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  cart: {
    type: Array,
    default: [],
  },
  orders: {
    type: Array,
    default: [],
  },
  address: {
    type: Array,
    default: [],
  },
  terminated: {
    type: Boolean,
    default: false,
  },
});

mongoose.models = {};
module.exports = mongoose.models.admins || mongoose.model("users", userSchema);
