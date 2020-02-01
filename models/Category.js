const mongoose = require("mongoose");

var CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Catgory name is required"]
  },
  is_active: {
    type: Boolean,
    default: 1
  }
});

module.exports = mongoose.model("category", CategorySchema);
