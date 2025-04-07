const fs = require('fs');

// Access the global mock DB file
const goals = require(global.mock_db);

// Write updated data to the DB file
let writeToFile = async (goals) => {
    await fs.writeFileSync(global.mock_db, JSON.stringify(goals, null, 4), 'utf8');
};

// Generate random ID for goal 
let genRandId = (count) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < count; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

// Service for working with goals
const goal_service = {
    getAll() {
        return goals;
    },
    create(goalData) {
        let new_id = genRandId(4); 
        const new_goal = { id: new_id, goal: goalData };
        goals.push(new_goal);
        writeToFile(goals);
        return new_goal;
    }
};

module.exports = goal_service;