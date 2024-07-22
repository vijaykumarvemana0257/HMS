const express = require("express");
const {registerDoctor} = require("../controllers/registration.controller");
//const homeDoctor=require("../controllers/doctor.controller");
const doctorRouter = express.Router();

doctorRouter.post("/register/doctor", registerDoctor);
//doctorRouter.post('/doctor/home',homeDoctor)

module.exports = doctorRouter;
