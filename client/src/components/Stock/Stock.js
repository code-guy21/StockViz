import React from 'react';
import './Stock.scss';

const Stock = ({ stock, action, method }) => {
	return (
		<div className='stock'>
			<div className='stock__symbol'>{stock.symbol}</div>
			<div className='stock__data'>
				<p>
					NAME: <span>{stock.name}</span>{' '}
				</p>
				<p>
					EXCHANGE: <span>{stock.stockExchange}</span>{' '}
				</p>
				<p>
					CURRENCY: <span>{stock.currency}</span>{' '}
				</p>
			</div>
			<div className='stock__options'>
				<i
					onClick={() => method()}
					className={
						action === 'add' ? 'far fa-plus-circle' : 'far fa-trash-alt'
					}></i>
			</div>
		</div>
	);
};

export default Stock;
