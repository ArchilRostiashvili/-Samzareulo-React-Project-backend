const bcrypt = require("bcrypt");
const validator = require("validator");
const uuid = require("uuid");

const signupUser = async (name, email, password, blocked, userType) => {
  if (!password || !email || !name) {
    throw Error("All fields are required");
  } else if (!validator.isEmail(email)) {
    throw Error("Invalid email address");
  }

  const accountAreadyExists = await this.findOne({ email });

  if (
    accountAreadyExists !== null &&
    accountAreadyExists.blocked.blocked === true
  ) {
    throw Error("This user was block by administrator");
  }

  const salt = await bcrypt.genSalt(7);
  const hash = await bcrypt.hash(password, salt);

  const id = uuid();
  const user = await this.create({
    id,
    name,
    email,
    password,
    blocked,
    userType,
  });
};

const loginUser = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email or password");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect email or password");
  }

  if (user.blocked === true) {
    throw Error("This user was blocked by administrator");
  }
  return user;
};

module.exports = { signupUser, loginUser };
