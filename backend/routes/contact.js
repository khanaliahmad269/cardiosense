const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { name, email, message } = req.body;
  // Mock contact form submission
  res.json({ success: true, message: 'Thank you for contacting us!' });
});

module.exports = router;