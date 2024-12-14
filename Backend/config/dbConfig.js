const mongoose = require('mongoose');
const url="mongodb+srv://shashiyadav4097:s%40k%40y%40123@cluster0.75az0.mongodb.net/SaasDatabase?retryWrites=true&w=majority"
const connectDB = async () => {
  try {
    await mongoose.connect(url,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed', error.message);
    process.exit(1);
  }
};

module.exports = { connectDB };
