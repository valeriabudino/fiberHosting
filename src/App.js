import React, { Component } from 'react';
import './App.css';
//COMPONENTES
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


class App extends Component {
	render() {
		return (
			<div className='App'>
				<Header />
				<ItemListContainer nombre = {' Amigo'} />
			</div>
		);
	}
}

export default App;
