import React, { useState } from 'react';
import axios from 'axios';

function PredictionForm({ setResult }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    medicalHistory: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/predict', formData);
      setResult(response.data);
    } catch (error) {
      console.error('Error making prediction:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Enter Patient Data</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Age</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Gender</label>
        <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Medical History</label>
        <textarea name="medicalHistory" value={formData.medicalHistory} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required></textarea>
      </div>
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Predict</button>
    </form>
  );
}

export default PredictionForm;