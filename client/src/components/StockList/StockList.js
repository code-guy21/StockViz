import React from 'react';
import Stock from '../Stock/Stock';
import './StockList.scss';

const StockList = ({ stockList }) => {
	console.log(stockList);
	return (
		<section className='stocklist'>
			{stockList.stocks.map((stock, i) => {
				return <Stock key={i} stock={stock} />;
			})}
		</section>
	);
};

export default StockList;
