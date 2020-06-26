const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = require("mongodb").ObjectID;

const userSchema = new Schema({

  fullname:String,
  email: String,
  password: String,
  role: { type: String, default: "admin" },
  active: {type: Boolean, default: "true"}
});

module.exports = mongoose.model("User", userSchema); 
