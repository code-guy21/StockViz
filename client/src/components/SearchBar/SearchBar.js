import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchStocks } from '../../actions/stockActions';
import './SearchBar.scss';

const SearchBar = () => {
	const dispatch = useDispatch();

	const [query, setQuery] = useState('');

	const search = async () => {
		dispatch(searchStocks(query));
	};

	return (
		<form className='searchform' onSubmit={e => e.preventDefault()}>
			<input
				onChange={e => setQuery(e.target.value)}
				placeholder='...Apple'
				className='searchbox'
				type='text'
			/>
			<button type='submit' className='btn' onClick={search}>
				search
			</button>
		</form>
	);
};

export default SearchBar;
