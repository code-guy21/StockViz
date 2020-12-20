const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const routes = require('./routes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.use(routes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
	console.log(
		`app listening in ${process.env.NODE_ENV} mode on PORT:${PORT}`.yellow
	);
});
