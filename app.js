const express = require('express');
const body_parser = require('body-parser');
const path = require('path');

// Correct the missing quote here
const web_route = require('./routes/web');

// Make mock database (raw .json file) available globally in app
global.mock_db = path.join(__dirname, './data/mock_db.json');

const app = express();

// Set the view engine for web routes
app.set('view engine', 'pug');

// Use body-parser middleware for JSON and URL-encoded data
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

// Serve static files
app.use('/css', express.static('public/css'));
app.use('/js', express.static('public/js'));

// Use web routes
app.use('/', web_route);

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));