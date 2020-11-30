const express = require('express');
const morgan = require('morgan');
const path = require('path');

const DATA = process.env.DATASOURCE || 'data/project.json';
const data_path = require(path.join(__dirname, DATA));

const PORT = process.env.PORT || 3000;

const app = express(); // Init the app
app.use(morgan('tiny')); // logging service

// Set up of the view engine
app.set('views', path.join(__dirname, 'views'));

// static directory for public assets
app.use('/static', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
	const { projects } = data_path;
	res.status(200).render('index.pug', { projects });
});

app.get('/about', (req, res) => {
	res.status(200).render('about.pug');
});

app.get('/project/:id', (req, res) => {
	let id = req.params.id;
	const { projects } = data_path;
	let project = projects.filter((v) => v.id == id);
	if (project.length === 1) {
		let proj = project[0];
		res.status(200).render('project.pug', { project: proj });
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
	const error = new Error('Server encountered an error processing the request.');
	error.status = 500;
	res.render('error.pug', { error });
});

// Start the app
app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
