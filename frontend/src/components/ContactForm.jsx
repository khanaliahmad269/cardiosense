import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/contact', formData);
      alert(response.data.message);
    } catch (error) {
      console.error('Error submitting contact form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Contact Us</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required></textarea>
      </div>
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Send</button>
    </form>
  );
}

export default ContactForm;