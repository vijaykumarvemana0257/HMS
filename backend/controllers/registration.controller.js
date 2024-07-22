const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const Patient = require("../models/patient.model");
const Doctor = require("../models/doctor.model");

const registerPatient = async (req, res) => {
  const {
    username,
    password,
    name,
    dateOfBirth,
    gender,
    contactNumber,
    email,
    residentialAddress,
    bloodGroup,
    knownAllergies,
    currentMedications,
    pastMedicalHistory,
    familyMedicalHistory,
    insuranceProvider,
    policyNumber,
    insuranceValidityPeriod,
    emergencyContactName,
    emergencyContactRelationship,
    emergencyContactNumber
  } = req.body;

  try {
    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({
      username,
      password: hashedPassword,
      fullName: name,
      dateOfBirth,
      gender,
      contactNumber,
      email,
      residentialAddress,
      role: 'patient'
    });

    const savedUser = await user.save();

    // Create new patient
    const patient = new Patient({
      userId: savedUser._id,
      bloodGroup,
      knownAllergies,
      currentMedications,
      pastMedicalHistory,
      familyMedicalHistory,
      insuranceProvider,
      policyNumber,
      insuranceValidityPeriod,
      emergencyContact: {
        name: emergencyContactName,
        relationship: emergencyContactRelationship,
        contactNumber: emergencyContactNumber
      }
    });

    await patient.save();

    res.status(201).json({ message: 'Patient registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

const registerDoctor = async (req, res) => {
  const {
    username,
    password,
    name,
    dateOfBirth,
    gender,
    contactNumber,
    email,
    residentialAddress,
    medicalLicenseNumber,
    specialization,
    yearsOfExperience,
    hospitalName,
    hospitalAddress,
    consultationFee,
    medicalSchool,
    graduationYear,
    additionalCertifications,
    consultationHours,
    daysAvailable,
    emergencyContactName,
    emergencyContactRelationship,
    emergencyContactNumber
  } = req.body;

  try {
    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({
      username,
      password: hashedPassword,
      fullName: name,
      dateOfBirth,
      gender,
      contactNumber,
      email,
      residentialAddress,
      role: 'doctor'
    });

    const savedUser = await user.save();

    // Create new doctor
    const doctor = new Doctor({
      userId: savedUser._id,
      medicalLicenseNumber,
      specialization,
      yearsOfExperience,
      hospitalName,
      hospitalAddress,
      consultationFee,
      education: {
        medicalSchool,
        graduationYear,
        additionalCertifications
      },
      availability: {
        consultationHours,
        daysAvailable
      },
      emergencyContact: {
        name: emergencyContactName,
        relationship: emergencyContactRelationship,
        contactNumber: emergencyContactNumber
      }
    });

    await doctor.save();

    res.status(201).json({ message: 'Doctor registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error:error });
  }
};
  
module.exports = {registerPatient,registerDoctor};
