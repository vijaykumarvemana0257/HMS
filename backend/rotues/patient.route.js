const express =require('express')
const {registerPatient}=require('../controllers/registration.controller')
//const homePatient=require('../controllers/patient.controller')
const patientRouter=express.Router()


patientRouter.post('/register/patient',registerPatient)
//patientRouter.post('/patient/home',homePatient)


module.exports=patientRouter