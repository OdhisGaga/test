const router = require('express').Router();
const transfi = require('../utils/transfi');
const User = require('../models/User');

router.post('/deposit', async (req, res) => {
  const { phone, amount} = req.body;
  if (amount < 50) return res.status(400).send('Minimum deposit is 50 bob');
  const result = await transfi.initiatePayment(phone, amount);
  if (result.success) {
    const user = await User.findOne({ phone});
    user.balance += amount;
    await user.save();
    res.send({ success: true, balance: user.balance});
} else {
    res.status(500).send('Payment failed');
}
});

module.exports = router;
