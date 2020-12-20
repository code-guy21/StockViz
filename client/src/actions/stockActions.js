import {
	STOCK_LIST_REQUEST,
	STOCK_LIST_FAIL,
	STOCK_LIST_SUCCESS,
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
