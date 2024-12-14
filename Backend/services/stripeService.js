const Payment=require('../models/Payment')
const User=require('../models/User')
const stripe = require('stripe')("sk_test_51QVTO5Gmj0jqZUZNp2F1tQCZKflVG9AE7TFrpb0nDez9xJZ4AjEp2FBKZ9xLCKeopGuBXVe6fDqeM4VpVCi8p5nG00SVa4l2O3");

exports.stripeUpdate= async (req, res) => {
  const { session_id } = req.params;

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);
    if (session.payment_status === 'paid') {

      const user = await User.findById(session.metadata.userId); // Find user by userId

      if (user) { 
        user.plan = session.metadata.id;  
      }
        await user.save();

      const paymentData = {
        planId:session.metadata.id,
        userId: session.metadata.userId,
        amount: session.amount_total / 100,
        paymentStatus: 'Success',
      };
      
      await Payment.create(paymentData);

      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
