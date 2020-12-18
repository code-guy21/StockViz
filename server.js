const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.get('/api', (req, res) => {
	res.json('StockViz API');
});

app.use(function (req, res) {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {
	console.log(
		`app listening in ${process.env.NODE_ENV} mode on PORT:${PORT}`.yellow
	);
});
