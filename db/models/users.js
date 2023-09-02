const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  phone: {
    type: String,
    unique: true,
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
