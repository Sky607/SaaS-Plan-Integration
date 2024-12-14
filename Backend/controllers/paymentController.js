// controllers/StripeController.js
const stripe = require('stripe')("sk_test_51QVTO5Gmj0jqZUZNp2F1tQCZKflVG9AE7TFrpb0nDez9xJZ4AjEp2FBKZ9xLCKeopGuBXVe6fDqeM4VpVCi8p5nG00SVa4l2O3");

exports.createCheckoutSession = async (req, res) => {
  try {

    const { name,price,userId,id } = req.body;
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data:{
             name
            },
            unit_amount: price * 100, 
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url:'http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:3000/cancel',
      metadata: {
        'userId':userId,
      'id':id,
      'name':name,
      'price':price
      },
    });

    res.json({ id: session.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
