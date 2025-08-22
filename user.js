
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  phone: String,
  balance: Number,
  referralCode: String
});

module.exports = mongoose.model('User', userSchema);
