const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
  orderPlaceOn: {
    type: Date,
    default: Date.now(),
  },
  orderNumber: {
    type: String,
    required: true,
  },
  orderedItems: {
    type: Array,
    default: [],
  },
  coupounsApplied: {
    type: Array,
  },
  totalAmount: {
    type: Number,
    default: 0,
  },
  currency: {
    type: String,
    default: "usd",
  },
  shippingNumber: {
    type: String,
  },
  shippingCharge: {
    type: Number,
    default: 7.5,
  },
  shippingDetails: {
    type: Object,
  },
  placedBy_email: {
    type: String,
  },
  placedBy_name: {
    type: String,
  },
  checkoutSessionId: {
    type: String,
  },
  paymentSuccessfull: {
    type: Boolean,
    default: false,
  },
});

mongoose.models = {};
module.exports =
  mongoose.models.orders || mongoose.model("orders", orderSchema);
