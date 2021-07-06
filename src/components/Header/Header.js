import React, { Component } from 'react';
import './Header.css';
import CartWidget from '../CartWidget/CartWidget';
import img from './apple-touch-icon.png';
import { Link } from "react-router-dom";

class Header extends Component {
	render() {
		return (
			<header>
				<img src={img} alt='logo' />
				<nav className='Nav-bar'>
					<ul>
						<Link to="./" className='nav-link'>Home</Link>
						<Link to="/about" className='nav-link'>About</Link>
						<Link to="/contact" className='nav-link'>Contact</Link>
						<li><CartWidget /></li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Header;
