import React from 'react';
import './NavBar.scss';

const NavBar = () => {
	return (
		<header className='navbar'>
			<nav className='container nav'>
				<h1 className='nav__brand'>StockViz</h1>
				<a href='#' className='nav__login'>
					login
				</a>
			</nav>
		</header>
	);
};

export default NavBar;
