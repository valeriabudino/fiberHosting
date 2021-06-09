import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
	render() {
		return (
			<div className='Nav-bar'>
				<h1>My e-commerce</h1>
                <ul>
                    <li><a>Productos</a></li>
                    <li><a>Nosotros</a></li>
                    <li><a>Contacto</a></li>
                </ul>
			</div>
		);
	}
}

export default Header;
