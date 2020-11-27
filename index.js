const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

const DATA = process.env.DATASOURCE || 'data/project.json';
const data = require(path.join(__dirname, DATA));

const PORT = process.env.PORT || 3000;

const app = express(); // Init the app
app.use(morgan('tiny')); // logging service

// Set up of the view engine
app.set('views', path.join(__dirname, 'views'));
app.use('/static', express.static(path.join(__dirname, 'public'))); // static directory for public assets

app.set('view engine', 'pug');

app.get('/', (req, res) => {
	const { projects } = data;
	res.status(200).render('index.pug', { projects });
});

app.get('/about', (req, res) => {
	res.status(200).render('about.pug');
});

app.get('/project/:id', (req, res) => {
	let id = req.params.id;
	const { projects } = data;
	let found = projects.filter((v) => v.id == id);
	if (found.length > 0) {
		return res.json(found);
	} else {
		return next();
	}
});

// Error handler for route errors
app.use((req, res, next) => {
	const error = new Error('Encountered and error');
	error.status = 404;
	res.status(404).render('page-not-found.pug', { error });
});

// General catch all error handler to catch any code related errors
app.use((err, req, res, next) => {
	const error = new Error('Server envountered an error processing the request.');
	error.status(500);
	res.render('error.pug', { error });
});

// Start the app
app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
