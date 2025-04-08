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

    // Create new goal
    create(req, res) {
        try {
            const newGoal = goal_service.create(req.body);
            res.status(201).json(newGoal);
        } catch (err) {
            res.status(500).json({ message: 'Error creating goal', error: err });
        }
    },

    // Update existing goal (NEW)
    update(req, res) {
        try {
            const updatedGoal = goal_service.update(
                req.params.id,  
            );
            res.json(updatedGoal);
        } catch (err) {
            res.status(500).json({ message: 'Error updating goal', error: err });
        }
    },

    // Delete goal (NEW)
    delete(req, res) {
        try {
            const deletedGoal = goal_service.delete(req.params.id);
            res.json(deletedGoal);
        } catch (err) {
            res.status(500).json({ message: 'Error deleting goal', error: err });
        }
    }
};
module.exports = {
    list: async (req, res) => {
      try {
        const goals = goal_service.getAll();
        res.render('goals/list', { goals });
      } catch (error) {
        res.status(500).send(error.message);
      }
    },
  
    addForm: (req, res) => {
      res.render('goals/form', { 
        mode: 'Add',
        goal: {
          goalName: '',
          startDateTime: '',
          target: '',
          age: '',
          currentWeight: '',
          height: ''
        }
      });
    },
  
    editForm: async (req, res) => {
      try {
        const goal = goal_service.getById(req.params.id);
        if (!goal) {
          return res.status(404).send('Goal not found');
        }
        res.render('goals/form', { 
          mode: 'Update',
          goal: goal.goal,
          id: goal.id
        });
      } catch (error) {
        res.status(500).send(error.message);
      }
    },
    index: async (req, res) => {
        try {
          const goals = goal_service.getAll();
          res.render('home/index', { 
            goals: goals || [] // always get massiv
          });
        } catch (error) {
          console.error('Error fetching goals:', error);
          res.render('home/index', { 
            goals: [], 
            error: 'Failed to load goals' 
          });
        }
      },
  };

module.exports = goal_controller;