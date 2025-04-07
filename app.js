// express web app instance
const express = require('express');

// for File IO
const path = require('path');

// make mock database (raw .json file) available globally in app
global.mock_db = path.join(__dirname, './data/mock_db.json');

// Импорт маршрутов
const web_route = require('./routes/web');
const api_route = require('./routes/api');
const goal_api_route = require('./routes/api/goals'); // 👈 добавляем goals

const app = express();

// Set the view engine for web routes
app.set('view engine', 'pug');

// Serve static files
app.use('/css', express.static('public/css'));
app.use('/js', express.static('public/js'));

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', api_route); // API routes
app.use('/api/goals', goal_api_route); // 👈 API для целей
app.use('/', web_route); // Web routes

// Redirect unknown routes to home page
app.use((req, res) => {
  res.redirect('/');
});

// Start server
const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));