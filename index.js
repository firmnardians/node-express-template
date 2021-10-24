const express = require('express');
const cors = require('cors');

const PORT = 5000;
const app = express();

app.use(cors());

app.get('/', (req, res) => {
	res.send('Hallo');
});

app.listen(PORT, function () {
	console.log(`Express server listening on port ${PORT}`);
});
