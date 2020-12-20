import {
	STOCK_LIST_FAIL,
	STOCK_LIST_REQUEST,
	STOCK_LIST_SUCCESS,
	SAVED_STOCK_ADD,
	SAVED_STOCK_REMOVE,
	SAVED_STOCK_FAIL,
	SAVED_STOCK_LOAD,
} from '../constants/stockConstants';

export const stockListReducer = (state = { stocks: [] }, action) => {
	switch (action.type) {
		case STOCK_LIST_REQUEST:
			return { loading: true, stocks: [] };
		case STOCK_LIST_SUCCESS:
			return { loading: false, stocks: action.payload };
		case STOCK_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const savedStockReducer = (state = { stocks: [] }, action) => {
	switch (action.type) {
		case SAVED_STOCK_ADD:
			if (!state.stocks.find(stock => stock.symbol === action.payload.symbol)) {
				let updated = {
					stocks: [...state.stocks, action.payload],
				};
				localStorage.setItem('saved', JSON.stringify(updated));
				return updated;
			} else {
				return state;
			}
		case SAVED_STOCK_REMOVE:
			let updated = {
				stocks: [
					...state.stocks.filter(stock => stock.symbol !== action.payload),
				],
			};
			localStorage.setItem('saved', JSON.stringify(updated));
			return updated;
		case SAVED_STOCK_LOAD:
			return {
				stocks: action.payload,
			};
		case SAVED_STOCK_FAIL:
			return { error: action.payload };

		default:
			return state;
	}
};
