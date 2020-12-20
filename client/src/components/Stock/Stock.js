import React from 'react';
import './Stock.scss';

const Stock = ({ stock }) => {
	return (
		<div className='stock'>
			<div className='stock__symbol'>{stock.symbol}</div>
			<div className='stock__data'>
				<p>NAME: {stock.name}</p>
				<p>EXCHANGE: {stock.stockExchange}</p>
				<p>CURRENCY: {stock.currency}</p>
			</div>
		</div>
	);
};

export default Stock;
