import React from 'react';
import Stock from '../Stock/Stock';
import './StockList.scss';

const StockList = ({ stockList }) => {
	return (
		<section className='stocklist'>
			{stockList &&
				stockList.stocks &&
				stockList.stocks.map((stock, i) => {
					return <Stock key={i} stock={stock} />;
				})}
		</section>
	);
};

export default StockList;
