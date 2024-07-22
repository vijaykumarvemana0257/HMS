const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  medicalLicenseNumber: { type: String },
  specialization: { type: String },
  yearsOfExperience: { type: Number },
  hospitalName: { type: String },
  hospitalAddress: { type: String },
  consultationFee: { type: Number },
  education: {
    medicalSchool: { type: String },
    graduationYear: { type: Number },
    additionalCertifications: { type: [String] }
  },
  availability: {
    consultationHours: { type: String },
    daysAvailable: { type: [String] }
  },
  emergencyContact: {
    name: { type: String },
    relationship: { type: String },
    contactNumber: { type: String }
  }
});


const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
