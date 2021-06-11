import React, { Component } from 'react';
import './Header.css';
import CartWidget from '../CartWidget/CartWidget';

class Header extends Component {
	render() {
		return (
			<div className='Nav-bar'>
				<h1>My E-commerce</h1>
                <ul>
                    <li><a>Productos</a></li>
                    <li><a>Nosotros</a></li>
                    <li><a>Contacto</a></li>
					<li><CartWidget /></li>
                </ul>
			</div>
		);
	}
}

export default Header;
