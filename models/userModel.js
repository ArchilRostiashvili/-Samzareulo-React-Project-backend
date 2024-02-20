const mongoose = require("mongoose");
const { signupUser, loginUser } = require("./modelMethods/useModelMethods");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    blocked: {
      type: Boolean,
      default: false,
    },
    userType: {
      type: String,
      enum: ["customer", "employee", "admin"],
      required: true,
      default: "customer",
    },
  },
  { timestamps: true }
);

userSchema.static.signup = signupUser;
userSchema.static.loginUser = loginUser;

module.exports = mongoose.model("User", userSchema);
