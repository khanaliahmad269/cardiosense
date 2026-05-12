import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PatientList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('/api/patients');
        setPatients(response.data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Patient List</h2>
      <ul>
        {patients.map(patient => (
          <li key={patient.id} className="mb-2">
            {patient.name} - {patient.age} years old - Prediction: {patient.prediction}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PatientList;