import axios from 'axios';

const API = {
	findStock: q => axios.get(`/api/stock/${q}`),
	intraDay: q => axios.get(`/api/stock/intraday/${q}`),
};

export default API;
