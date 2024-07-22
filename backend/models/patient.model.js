const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bloodGroup: { type: String, required: true },
  knownAllergies: { type: [String] },
  currentMedications: { type: [String] },
  pastMedicalHistory: { type: String },
  familyMedicalHistory: { type: String },
  insuranceProvider: { type: String },
  policyNumber: { type: String },
  insuranceValidityPeriod: { type: Date },
  emergencyContact: {
    name: { type: String, required: true },
    relationship: { type: String, required: true },
    contactNumber: { type: String, required: true }
  }
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
