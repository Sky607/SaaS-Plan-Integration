const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  planId: { type: mongoose.Schema.Types.ObjectId, ref: 'SaaSPlan' },
  paymentStatus: { type: String, enum: ['Success', 'Failed'] },
  amount: Number,
  paymentDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Payment', PaymentSchema);
