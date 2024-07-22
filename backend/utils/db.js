const mongoose = require('mongoose');
const express=require('express')

const connectDB=async ()=>{

    try {
        await mongoose.connect(process.env.MONGODB_URI);
      } catch (error) {
        res.status(500).json({message:error })
      }
}
module.exports= connectDB;