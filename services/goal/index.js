const fs = require('fs');

// Доступ к файлу mock базы данных
const goals = require(global.mock_db);

// Реализация методов сервиса
const goal_service = {
    // Получить все цели
    getAll() {
        return goals || []; // Всегда возвращаем массив
    },

    // Найти цель по ID
    getById(id) {
        return goals.find(g => g.id == id);
    },

    // Создать новую цель
    create(goalData) {
        let new_id = this.generateId(4);
        
        const new_goal = {
            id: new_id,
            goal: goalData
        };

        goals.push(new_goal);
        this.saveToFile(goals);
        
        return new_goal;
    },

    // Обновить существующую цель
    update(id, updateData) {
        const goalIndex = goals.findIndex(g => g.id == id);

        if (goalIndex === -1) {
            return null;
        }

        // Обновляем только измененные поля
        goals[goalIndex].goal = { 
            ...goals[goalIndex].goal, 
            ...updateData 
        };

        this.saveToFile(goals);
        return goals[goalIndex];
    },

    // Удалить цель
    delete(id) {
        const index = goals.findIndex(g => g.id == id);
        if (index !== -1) {
            goals.splice(index, 1);
            this.saveToFile(goals);
        }
        return index !== -1;
    },

    // Приватные вспомогательные методы
    saveToFile(data) {
        try {
            fs.writeFileSync(
                global.mock_db,
                JSON.stringify(data, null, 4),
                'utf8'
            );
        } catch (error) {
            console.error('Error saving to file:', error);
            throw error;
        }
    },

    generateId(count) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < count; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
};

module.exports = goal_service;