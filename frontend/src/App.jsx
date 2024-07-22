import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PatientRegistration from './components/Registration/PatientRegistration';
import DoctorRegistration from './components/Registration/DoctorRegistration';
import SelectRole from './components/Registration/SelectRole';
import LoginComponent from './components/Login/Login';

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <nav className="mb-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-blue-500 hover:underline">Home</Link>
          </li>
        </ul>
         
        </nav>
        <Routes>
        <Route path="/" element={<SelectRole />} />
          <Route path="/register/patient" element={<PatientRegistration />} />
          <Route path="/register/doctor" element={<DoctorRegistration />} />
          <Route path="/login" element={<LoginComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
