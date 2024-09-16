// controllers/authController.js
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log("Login attempt for", email);

    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found:", email);
      return res
        .status(401)
        .send({
          message: "User not found or incorrect email or password",
        });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Wrong password for", email);
      return res
        .status(401)
        .send({
          message: "User not found or incorrect email or password",
        });
    }

    const token = jwt.sign(
      { _id: user._id.toString(), role: user.role },
      process.env.JWT_SECRET
    );
    console.log("Token genereted:", token);
    res
      .status(200)
      .send({
        token,
        role: user.role,
        message: "Login successful",
      });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send({ message: "Server error" });
  }
};

const changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const userId = req.userId;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(401).send({ message: "Old password incorrect" });
    }

    user.password = newPassword;
    await user.save();

    res.status(200).send({ message: "Change password successful" });
  } catch (error) {
    res.status(500).send({ message: "Server error" });
  }
};

module.exports = {
  login,
  changePassword,
};
