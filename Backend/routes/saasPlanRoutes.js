// routes/PlanRoutes.js
const express = require('express');
const { createPlan, updatePlan,getPlan, deletePlan, getAllPlans } = require('../controllers/planController');

const router = express.Router();

router.post('/create', createPlan);
router.put('/:id', updatePlan);
router.delete('/:id', deletePlan);
router.get('/', getAllPlans);


module.exports = router;
