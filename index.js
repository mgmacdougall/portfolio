const express = require('express');
const morgan = require('morgan');
const path = require('path');

const pug = require('pug');

// Init the app
const app = express();
app.use(morgan('tiny')); // logging service

// Set up of the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.status(200).render('index.pug');
});

app.get('/about', (req, res) => {
	res.status(200).render('about.pug');
});

app.get('/project/:id', (req, res) => {
	// res.status(200).render('project.pug');
});

// Start the app
app.listen(3000, () => {
	console.log(`Server started on port 3000`);
});
