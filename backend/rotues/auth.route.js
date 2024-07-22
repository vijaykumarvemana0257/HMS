const express = require("express");
const Login = require("../controllers/auth.controller");
const authRouter = express.Router();

authRouter.post("/login", Login);

module.exports = authRouter;
