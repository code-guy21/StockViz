import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StockList from '../../components/StockList/StockList';
import { loadStocks } from '../../actions/stockActions';
import './ListPage.scss';

const ListPage = () => {
	const dispatch = useDispatch();
	const saved = useSelector(state => state.savedStocks);

	useEffect(() => {
		dispatch(loadStocks());
	}, []);

	return (
		<main className='container searchpage'>
			<div className='heading-primary'>Your Saved Stocks</div>
			<StockList action='remove' stockList={saved} />
		</main>
	);
};

export default ListPage;
