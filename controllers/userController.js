const mongoose = require("mongoose");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createJWT = (_id) => {
  return jwt.sign({ _id });
};
