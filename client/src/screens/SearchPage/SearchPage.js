import React from 'react';
import { useSelector } from 'react-redux';
import './SearchPage.scss';
import SearchBar from '../../components/SearchBar/SearchBar';
import StockList from '../../components/StockList/StockList';

const SearchPage = () => {
	const stockList = useSelector(state => state.stockList);

	return (
		<main className='container searchpage'>
			<div className='heading-primary'>Search for Stocks</div>
			<SearchBar />
			<StockList stockList={stockList} />
		</main>
	);
};

export default SearchPage;
