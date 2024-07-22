import React from 'react';
import { useNavigate } from 'react-router-dom';


const SelectRole = () => {
  const navigate=useNavigate();
  const handleSelection = (role) => {
      if (role === 'patient') {
        navigate("/register/patient");
        console.log("patient")
      } else if (role === 'doctor') {
        navigate("/register/doctor");
        console.log("doctor")
      }
    };
  
    return (
      <div className="selection-container">
        <h2 className='mb-3'>Select Role</h2>
        <button onClick={() => handleSelection('patient')} className="text-blue-500 hover:underline">
          Register as Patient
        </button>
        <button onClick={() => handleSelection('doctor')} className="text-blue-500 px-4 hover:underline">
          Register as Doctor
        </button>
      </div>
    );
  };
  export default SelectRole