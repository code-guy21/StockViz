import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
	return (
		<header className='navbar'>
			<nav className='container nav'>
				<h1 className='nav__brand'>StockViz</h1>
				<ul>
					<Link to='/' className='nav__item'>
						search
					</Link>
					<Link to='/list' className='nav__item'>
						list
					</Link>
					<Link to='#' className='nav__item'>
						login
					</Link>
				</ul>
			</nav>
		</header>
	);
};

export default NavBar;
