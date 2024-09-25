const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/pally")
  .then(() => {
    console.log("mongoose is now connected");
  })
  .catch((err) => console.log("mongoose has an error", err));

const accountSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  businessID: {
    type: mongoose.Schema.Types.ObjectId,
  },
  accountRole: {
    type: String,
    enum: ["owner", "cashier", "fieldworker"],
    required: true,
  },
  hasSubscribed: {
    type: Boolean,
    required: true,
  },
  subsciptionDue: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Account = mongoose.model("Account", accountSchema);
module.exports = Account;

/* const newAcc = new Account({
  username: "admin",
  password: "admin123",
  name: "Daniel Canoy",
  address: "Puerto Princesa, Palawan",
  email: "canoydaniel06@gmail.com",
  accountRole: "owner",
  hasSubscribed: true,
});

newAcc.save();
 */
