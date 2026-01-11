import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    items: Array,
    totalAmount: Number,
    paymentStatus: { type: String, default: "Pending" },
    orderStatus: { type: String, default: "Preparing" }
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
