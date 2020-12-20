import React from 'react';
import { useDispatch } from 'react-redux';
import { saveStock } from '../../actions/stockActions';
import './Stock.scss';

const Stock = ({ stock }) => {
	const dispatch = useDispatch();

	const addStock = async stock => {
		dispatch(saveStock(stock));
	};

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
				<i onClick={() => addStock(stock)} className='far fa-plus-circle'></i>
			</div>
		</div>
	);
};

export default Stock;
