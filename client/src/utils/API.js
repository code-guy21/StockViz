import axios from 'axios';

const API = {
	findStock: q => axios.get(`/api/stock/${q}`),
};

export default API;
