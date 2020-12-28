import React from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import './Stock.scss';

const Stock = ({ stock, action, add, remove }) => {
	let day = dayjs.extend(utc);
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

				{action !== 'add' && !stock.error && (
					<>
						<p>
							OPEN: <span>{`$${stock.open}`}</span>
						</p>
						<p>
							CLOSE: <span>{`$${stock.close}`}</span>
						</p>
						<p>
							DATE:{' '}
							<span>
								{day.utc(stock.date).local().format('D/M/YY [at] h:mm A')}
							</span>
						</p>
						<p>
							VOLUME:{' '}
							<span>
								{Number(parseFloat(stock.volume).toFixed(2)).toLocaleString(
									'en'
								)}
							</span>
						</p>
					</>
				)}
			</div>
			<div className='stock__options'>
				{action === 'add' ? (
					<i className='far fa-plus-circle' onClick={add}></i>
				) : (
					<>
						<i onClick={remove} className={'far fa-trash-alt'}></i>
						<i onClick={add} className='far fa-sync-alt'></i>
					</>
				)}
			</div>
		</div>
	);
};

export default Stock;
