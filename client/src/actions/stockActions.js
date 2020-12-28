import {
	STOCK_LIST_REQUEST,
	STOCK_LIST_FAIL,
	STOCK_LIST_SUCCESS,
	SAVED_STOCK_ADD,
	SAVED_STOCK_REMOVE,
	SAVED_STOCK_FAIL,
	SAVED_STOCK_LOAD,
} from '../constants/stockConstants';
import API from '../utils/API';

export const searchStocks = query => async dispatch => {
	try {
		dispatch({
			type: STOCK_LIST_REQUEST,
		});

		const { data } = await API.findStock(query);

		dispatch({
			type: STOCK_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: STOCK_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const loadStocks = () => async dispatch => {
	try {
		const stocks = await JSON.parse(localStorage.getItem('saved'));

		dispatch({
			type: SAVED_STOCK_LOAD,
			payload: stocks ? stocks.stocks : [],
		});
	} catch (error) {
		dispatch({
			type: STOCK_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const saveStock = stock => async dispatch => {
	try {
		const { data } = await API.intraDay(stock.symbol);

		dispatch({
			type: SAVED_STOCK_ADD,
			payload: { stock: { ...stock, ...data.data[0] } },
		});
	} catch (error) {
		dispatch({
			type: SAVED_STOCK_FAIL,
			payload: {
				stock: {
					...stock,
					error:
						error.response && error.response.data.message
							? error.response.data.message
							: error.message,
				},
			},
		});
	}
};

export const removeStock = symbol => async dispatch => {
	try {
		dispatch({
			type: SAVED_STOCK_REMOVE,
			payload: symbol,
		});
	} catch (error) {
		dispatch({
			type: SAVED_STOCK_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
