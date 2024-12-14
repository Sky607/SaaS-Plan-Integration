// controllers/PlanController.js
const Plan = require('../models/Plan');

exports.createPlan = async (req, res) => {
  try {
    const { name, price, features, maxUsers } = req.body;
    const Price=parseInt(price)
    const MaxUsers = parseInt(maxUsers)
    const plan = new Plan({ name, price:Price, features, maxUsers:MaxUsers });
    await plan.save();
    res.status(201).json(plan);
  } catch (err) {
    res.status(500).json({error: "error from create plan" });
  }
};

exports.updatePlan = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPlan = await Plan.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedPlan);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deletePlan = async (req, res) => {
  try {
    const { id } = req.params;
    await Plan.findByIdAndDelete(id);
    res.json({ message: 'Plan deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllPlans = async (req, res) => {
  try {
    const plans = await Plan.find();
    res.json(plans);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
