const express = require('express');
const { registerAdmin } = require('../controllers/userController');
const { verifyToken } = require('../middlewares/authMiddleware');
const { checkRole } = require('../middlewares/roleMiddleware');
const {registerUser,loginUser}=require('../controllers/userController')
const checkUserLimit = require('../middlewares/maxUsersMiddleware')
const User = require('../models/User')
const router = express.Router();
const bcrypt = require('bcrypt');

router.post('/auth/login',loginUser)
router.post('/admin', verifyToken, checkRole('super-admin'), registerAdmin);
router.post('/superadmin',registerUser)
router.post('/user', checkUserLimit, async (req, res) => {
    const { email,name,password,role, adminId } = req.body; 
    const admin = await User.findById(adminId)
     const hashedPassword = await bcrypt.hash(password, 10);
    try {
      const newUser = new User({
       email:email,
       name:name,
       password:hashedPassword,
       role:role,
        plan: admin.plan._id, 
      });
  
      await newUser.save();
      res.status(201).json({ success: true, user: newUser });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  });
  
  module.exports = router;


module.exports = router;
