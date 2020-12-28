import React from 'react';
import { useDispatch } from 'react-redux';
import Stock from '../Stock/Stock';
import { saveStock, removeStock } from '../../actions/stockActions';
import './StockList.scss';

const StockList = ({ stockList, action }) => {
	const dispatch = useDispatch();

	const addStock = async stock => {
		dispatch(saveStock(stock));
	};

	const deleteStock = async symbol => {
		dispatch(removeStock(symbol));
	};

	return (
		<section className='stocklist'>
			{stockList &&
				stockList.stocks &&
				stockList.stocks.map((stock, i) => {
					return (
						<Stock
							key={i}
							stock={stock}
							action={action}
							add={() => addStock(stock)}
							remove={() => deleteStock(stock.symbol)}
						/>
					);
				})}
		</section>
	);
};

export default StockList;
