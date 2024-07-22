const express =require('express')
const dotnev= require('dotenv')
dotnev.config()
const app =express()
const cors=require('cors')
const port =process.env.PORT || 3000
const connectDB =require('./utils/db');
const bodyParser = require("body-parser");
const patientRouter=require('./rotues/patient.route')
const doctorRouter = require('./rotues/doctor.route')
const cookieParser = require("cookie-parser");

app.use(cookieParser())
app.use(cors())
app.use(bodyParser.json())



app.use(async (req, res, next) => {
  try {
      await connectDB();
      next();
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

app.use("/api/v1",
patientRouter,
doctorRouter)


app.get("/test", (req,res,next) => {
    res.status(200).json({
      succcess: true,
      message: "API is working",
    });
  });
app.listen(port,()=>{
    console.log(`App is running on ${port}`)
})