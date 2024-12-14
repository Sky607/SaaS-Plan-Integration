const User = require('../models/User'); 
 
async function checkUserLimit(req, res, next) {
    console.log('checking')
  const { adminId } = req.body; 

  try {
 
    const admin = await User.findById(adminId).populate('plan');
console.log("admin",admin)
    if (!admin || !admin.plan) {
      return res.status(400).json({ success: false, message: 'Admin or plan not found.' });
    }
     
      const userCount = await User.countDocuments({ plan: admin.plan._id });
      if (userCount > admin.plan.maxUsers) {
        return res.status(403).json({ success: false, message: 'User limit exceeded for this plan.' });
      }  
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Server error.' });
  }
}

module.exports = checkUserLimit;
