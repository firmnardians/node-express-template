const { default: axios } = require('axios');
const express = require('express');
const cors = require('cors');

const PORT = 5000;
const app = express();

app.use(cors());

app.get('/', (req, res) => {
	res.send('This is folderin api');
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
