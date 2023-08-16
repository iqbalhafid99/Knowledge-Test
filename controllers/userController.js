const response = require("../helper/response");
const bcrypt = require("bcrypt");
const User = require("../models/userModels");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const tokenData = process.env.JWT_SECRET;

// register user
const registerUser = async (req, res) => {
  try {
    const { name, email, gender, password } = req.body;

    // Validation name and gender
    if (!name || !gender) {
      return response(400, null, "Name and gender are required", res);
    }

    //  Validation password
    if (password.length < 6) {
      return response(400, null, "Password must be at least 6 characters", res);
    }

    // Validation email if already existing
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return response(400, null, "Email already exists", res);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, gender, password: hashedPassword });
    await user.save();
    response(201, user, "User created successfully", res);
  } catch (error) {
    console.error(error);
    response(500, null, "An error occurred", res);
  }
};

// login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const passwordMatch = await bcrypt.compare(password, user.password);

    // Validate password and email match
    if (!user || !passwordMatch) {
      return response(400, null, "Incorrect email or password", res);
    }

    // create profile credentials
    const token = jwt.sign(
      {
        userId: user._id,
        name: user.name,
        email: user.email,
        gender: user.gender,
      },
      tokenData
    );
    res
      .status(200)
      .set("Authorization", `Bearer ${token}`) // save token in header
      .json({
        success: true,
        message: "Login successful",
        token,
      });
  } catch (error) {
    response(400, null, "An error occurred", res);
  }
};

// profile user with jwt token
const profileUser = async (req, res) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return response(401, 0, "Token not found", res);
    }

    const decoded = jwt.verify(token, tokenData, {}, (err, data) => {
      if (err) throw err;
      response(200, data, "Successfully retrieved user profile", res);
    });

    return decoded;
  } catch (err) {
    console.log(err);
    response(500, 0, err, res);
  }
};

// select user by id
const selectUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return response(404, null, "User not found", res);
    }

    const userData = {
      userId: user._id,
      name: user.name,
      email: user.email,
      gender: user.gender,
    };

    response(200, userData, "User retrieved successfully", res);
  } catch (error) {
    console.error(error);
    response(500, null, "An error occurred", res);
  }
};

module.exports = { registerUser, loginUser, profileUser, selectUserById };
