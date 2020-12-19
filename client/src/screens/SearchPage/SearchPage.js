import React from 'react';
import './SearchPage.scss';
import SearchBar from '../../components/SearchBar/SearchBar';

const SearchPage = () => {
	return (
		<main className='container searchpage'>
			<div className='heading-primary'>Search for Stock Tickers</div>
			<SearchBar />
		</main>
	);
};

export default SearchPage;
