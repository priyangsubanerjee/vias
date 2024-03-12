const mongoose = require("mongoose");
const { Schema } = mongoose;

const doorSchema = new Schema({
  color: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

mongoose.models = {};
module.exports = mongoose.models.door || mongoose.model("door", doorSchema);
