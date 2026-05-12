const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { name, age, gender, medicalHistory } = req.body;
  // Mock prediction logic
  const prediction = 'Low Risk';
  const confidence = 85;

  res.json({ prediction, confidence });
});

module.exports = router;