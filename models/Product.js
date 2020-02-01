const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: [true, "Product name is required"]
  },
  category_id: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: [true, "category is required"]
  },
  is_active: {
    type: Boolean,
    default: 1
  }
});

module.exports = mongoose.model("Products", ProductSchema);
