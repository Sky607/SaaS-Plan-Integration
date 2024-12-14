const express = require('express');
const { connectDB } = require('./config/dbConfig');
const planRoutes = require('./routes/saasPlanRoutes');
const userRoutes = require('./routes/userRoutes');
const paymentRoutes=require('./routes/paymentRoutes');
const cors = require('cors');
const { stripeUpdate } = require('./services/stripeService');
const { getOrder } = require('./controllers/OrderController');
const app = express();

connectDB();

app.use(express.json());
app.use(cors())

app.use('/api/plans', planRoutes);
app.use('/api/users', userRoutes);
app.use('/api',paymentRoutes),
app.get('/api/verify-session/:session_id',stripeUpdate)
app.get('/api/order/:id',getOrder)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
