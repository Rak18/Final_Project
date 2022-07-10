const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Order name required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    userid: {
      type: String,
    },
    orderItems: [],
    shippingAddress: {
      type: Object,
      // required: true,
    },
    orderAmount: {
      type: String,
        // required: true,
    },
    isDelivered: {
      type: Boolean,
      // required: true,
      default: false,
    },
    transactionId: {
      type: String,
        // required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);
