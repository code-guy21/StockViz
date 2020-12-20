import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
	const toggleMenu = () => {
		let hidden = document.querySelector('#nav_hidden');

		hidden.classList.toggle('visible');
	};

	return (
		<header className='navbar'>
			<nav className='container nav'>
				<h1 className='nav__brand'>StockViz</h1>
				<ul className='navigation'>
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
				<i onClick={toggleMenu} className='fal fa-bars'></i>
			</nav>
			<ul id='nav_hidden' className='visible'>
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
		</header>
	);
};

export default NavBar;
