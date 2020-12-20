import React from 'react';
import Stock from '../Stock/Stock';
import './StockList.scss';

const StockList = ({ stockList }) => {
	console.log(stockList);
	return (
		<section className='stocklist'>
			{stockList.stocks.map(stock => {
				return <Stock stock={stock} />;
			})}
		</section>
	);
};

export default StockList;
