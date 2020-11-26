const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const pug = require('pug');

const sourceFile = process.env.DATASOURCE || 'data/project.json';
const PORT = process.env.PORT || 3000;

let dataFilePath = path.join(__dirname, sourceFile); // data file path

// Init the app
const app = express();
app.use(morgan('tiny')); // logging service

// Set up of the view engine
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'data'))); // project.json file
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.status(200).render('index.pug');
});

app.get('/about', (req, res) => {
	res.status(200).render('about.pug');
});

app.get('/project/:id', (req, res) => {
	let id = req.params.id;
	fs.readFile(dataFilePath, (err, data) => {
		if (err) {
			let error = new Error(err);
			error.message = 'A problem occurred to datasource.';
			return res.send(error.message);
		} else {
			let parsedData = JSON.parse(data);
			let found = parsedData.projects.filter((v) => v.id == id);
			if (found.length > 0) {
				return res.json(found);
			} else {
				return res.redirect('/');
			}
		}
	});
});

// Start the app
app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
