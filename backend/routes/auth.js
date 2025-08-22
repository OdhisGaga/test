
const router = require('express').Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  const { phone} = req.body;
  if (!phone.startsWith('+254')) return res.status(400).send('Kenyan numbers only');
  const user = new User({ phone, balance: 0});
  await user.save();
  res.send(user);
});

module.exports = router;


  
Blaming test/auth.js at main · OdhisGaga/test
