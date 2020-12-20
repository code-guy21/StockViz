const axios = require('axios');
const asyncHandler = require('express-async-handler');

module.exports = {
	findStock: asyncHandler(async (req, res) => {
		const { data } = await axios.get(
			`https://financialmodelingprep.com/api/v3/search?query=${req.params.id}&apikey=${process.env.MODELINGPREP_API_KEY}`
		);

		if (data) {
			res.json(data);
		} else {
			res.status(404);
			throw new Error('Stock Not Found');
		}
	}),
};
