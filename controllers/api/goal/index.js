const goal_service = require('../../../services/goal');

const goal_controller = {
    // Get all goals
    getAll(req, res) {
        try {
            const goals = goal_service.getAll(); 
            res.json(goals);
        } catch (err) {
            res.status(500).json({ message: 'Error fetching goals', error: err });
        }
    },

    // Cretae new goal
    create(req, res) {
        try {
            const newGoal = goal_service.create(req.body);
            res.status(201).json(newGoal);
        } catch (err) {
            res.status(500).json({ message: 'Error creating goal', error: err });
        }
    }
};

module.exports = goal_controller;