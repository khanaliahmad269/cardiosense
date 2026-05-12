import React from 'react';

function PatientDetail({ patient }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Patient Detail</h2>
      <p><strong>Name:</strong> {patient.name}</p>
      <p><strong>Age:</strong> {patient.age}</p>
      <p><strong>Gender:</strong> {patient.gender}</p>
      <p><strong>Medical History:</strong> {patient.medicalHistory.join(', ')}</p>
      <p><strong>Prediction:</strong> {patient.prediction}</p>
    </div>
  );
}

export default PatientDetail;