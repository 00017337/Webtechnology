# Webtechnology
# Fitness Goal Tracker Web App

This web application was created to fulfill Web Technology module’s requirements and does not represent an actual company or service.

## Project Overview

This is a simple fitness goal tracking web application that allows users to manage their fitness-related goals. Users can create, view, update, and delete goals. The application uses a minimalistic UI and basic form validation to ensure usability and input accuracy.

## Project Structure

The project follows the recommended structure provided in the assignment
/Project ├── app.js ├── package.json ├── .gitignore ├── /controllers │ └── /web/home/index.js ├── /routes │ └── /web/home/index.js ├── /services │ └── /goal/index.js ├── /validators │ └── /goal/index.js ├── /views │ └── /home │ ├── index.pug │ └── add_update.pug │ └── head.pug ├── /public │ ├── /styles │ │ └── style.css │ └── /images └── /data └── mock_db.json
## Features

- Create new goals with form validation
- View all existing goals in a table
- Update any goal
- Delete goals
- Minimal UI with Pug templates
- Static assets (styles and images) served from `/public`

## Technologies Used

- Node.js
- Express.js
- Pug (for templating)
- Vanilla CSS
- JavaScript
- JSON file as mock database (for simplicity)

## Validation & Error Handling

- Input validation is done both on client and server side.
- Server-side validation is written in the `validators/goal/index.js` file.
- All operations return clear error messages in case of failure.

## Installation
npm install
npm start