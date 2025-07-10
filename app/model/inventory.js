const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    caregory: {
      type: Array,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const inventoryModel = mongoose.model("user", inventorySchema);
module.exports = inventoryModel;
