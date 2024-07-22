const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");

const Login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username }).populate('refId');
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      const payload = { id: user.id, role: user.role };
      const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: "1h",
      });
      res.cookie('authToken', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
      res.status(200).json({ message: "Login successful", token: token });
    } else {
      res.status(400).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = Login;
