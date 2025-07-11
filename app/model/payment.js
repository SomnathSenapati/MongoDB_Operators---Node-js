const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    gross_amount: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    net_amount: {
      type: Number,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const paymentModel = mongoose.model("payment", paymentSchema);
module.exports = paymentModel;
