import {
	STOCK_LIST_FAIL,
	STOCK_LIST_REQUEST,
	STOCK_LIST_SUCCESS,
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
