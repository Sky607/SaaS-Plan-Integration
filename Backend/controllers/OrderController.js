const Payment =require('../models/Payment')
const Plan=require('../models/Plan')
exports.getOrder=async (req, res) => {
  try {
    const {id}=req.params
    const payments = await Payment.find({ userId: id })
    const plans = await Promise.all(
      payments.map(async (payment) => {
        return await Plan.findById(payment.planId); 
      })
    );
    
    if (payments.length === 0) {
      console.log('No payments found for this user.');
      return [];
    }
    res.status(200).json( {payments,plans})
  } catch (error) {
    console.error('Error fetching payments:', error);
    throw error;
  }

};