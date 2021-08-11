const { default: axios } = require('axios');
const express = require('express');

const PORT = 5000;
const app = express();

app.get('/', (req, res) => {
	res.send('Welcome to your App!');
});

app.get('/users', (req, res) => {
	axios
		.get('https://jsonplaceholder.typicode.com/users')
		.then((response) => {
			res.json(response.data);
		})
		.catch((err) => {
			res.json('Error', err);
		});
});

app.listen(PORT, function () {
	console.log(`Express server listening on port ${PORT}`);
});
