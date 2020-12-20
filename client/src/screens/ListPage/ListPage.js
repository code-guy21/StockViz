import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import StockList from '../../components/StockList/StockList';
import './ListPage.scss';

const ListPage = () => {
	const [saved, setSaved] = useState([]);

	useEffect(() => {
		setSaved(JSON.parse(localStorage.getItem('saved')));
	}, []);

	return (
		<main className='container searchpage'>
			<div className='heading-primary'>Your Saved Stocks</div>
			<StockList stockList={saved} />
		</main>
	);
};

export default ListPage;
