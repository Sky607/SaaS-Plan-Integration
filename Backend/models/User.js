const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['super-admin', 'admin', 'user'], required: true },
  plan: { type: mongoose.Schema.Types.ObjectId, ref: 'Plan', default: null },
});

// Hash password before saving

module.exports = mongoose.model('User', userSchema);
