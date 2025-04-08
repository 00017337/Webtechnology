const express = require('express');
const router = express.Router();
const home_controller = require('../../../controllers/web/home');

//Main page
router.get('/', home_controller.index);

// Add page
router.get('/goals/add', home_controller.addGoalPage);

// Page for adding goals by id
router.get('/goals/update/:id', home_controller.updateGoalPage);

module.exports = router;