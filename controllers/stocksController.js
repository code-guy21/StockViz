const axios = require('axios');
const asyncHandler = require('express-async-handler');

module.exports = {
	findStock: asyncHandler(async (req, res) => {
		const { data } = await axios.get(
			`https://financialmodelingprep.com/api/v3/search?query=${req.params.id}&apikey=${process.env.MODELING_PREP_API_KEY}`
		);

		if (data) {
			res.json(data);
		} else {
			res.status(404);
			throw new Error('Stock Not Found');
		}
	}),
	intraDay: asyncHandler(async (req, res) => {
		const { data } = await axios.get(
			`http://api.marketstack.com/v1/intraday/latest?access_key=${process.env.MARKET_STACK_API_KEY}&symbols=${req.params.id}&interval=1min`
		);

		if (data) {
			res.json(data);
		} else {
			res.status(404);
			throw new Error('Stock data not found');
		}
	}),
};
