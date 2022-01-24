const mongoose = require("mongoose");
console.log("i am here also")
const OrderSchema = mongoose.Schema(
  {
    order_id: { type: String, required: true },
    user_id: {type: mongoose.Schema.Types.ObjectId,ref: "Userins"},
    details: {type:String},
    total_quantity: { type: Number },
    total_price: { type: Number },
    status: {
      type: String,
      
      default: "Ready to Pick Up",
      required: true,
    },
    address: { type: String },
  },
  { timestamps: true }
);

const order = mongoose.model("order", OrderSchema);
module.exports = order;
