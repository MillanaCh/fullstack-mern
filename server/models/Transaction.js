//in transactions we will not send all data at once to frontend we will send 20 and when click next send another 20 transactions
//server-side pagination
//when we sort while we dont have all 500 data, we will send sorting information to backend
import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
  {
    userId: String,
    cost: String,
    products: {
      type: [mongoose.Types.ObjectId],
      of: Number,
    },
  },
  { timestamps: true }
);
const Transaction = mongoose.model("Transaction", TransactionSchema);
export default Transaction;
