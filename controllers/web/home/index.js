const goal_service = require('../../../services/goal');

const home_controller = {
  index: (req, res) => res.render('home/index'),

  // Пустая форма
  addGoalPage: (req, res) => {
    res.render('home/add_update', {
      mode: 'Add',
      goalData: null
    });
  },

  // Заполненная форма
  updateGoalPage: async (req, res) => {
    const goal = await goal_service.getById(req.params.id);
    if (!goal) return res.status(404).send('Goal not found');

    res.render('home/add_update', {
      mode: 'Update',
      goalData: goal
    });
  }
};

module.exports = home_controller;