const express = require("express")
const bcrypt = require("bcrypt");
const Doctor = require("../models/doctor.model");
const Patient = require("../models/patient.model");

const createNewUser = async (userData, roleData) => {
    try {
      let ref;
      if (userData.role === 'patient') {
        const newPatient = new Patient(roleData);
        ref = await newPatient.save();
      } else if (userData.role === 'doctor') {
        const newDoctor = new Doctor(roleData);
        ref = await newDoctor.save();
      }
      
      const newUser = new User({
        ...userData,
        refId: ref._id
      });
      
      await newUser.save();
      console.log('User created successfully');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };
  
  module.exports =  createNewUser;