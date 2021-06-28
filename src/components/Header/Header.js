import React, { Component } from 'react';
import './Header.css';
import CartWidget from '../CartWidget/CartWidget';
import img from './apple-touch-icon.png';

class Header extends Component {
	render() {
		return (
			<div className='Nav-bar'>
				<img src={img} alt='logo' />
                <ul>
                    <li><a>Inicio</a></li>
                    <li><a>Productos</a></li>
                    <li><a>Contacto</a></li>
					<li><CartWidget /></li>
                </ul>
			</div>
		);
	}
}

export default Header;
