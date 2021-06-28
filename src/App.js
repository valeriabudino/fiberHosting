import React, { useState } from 'react';
import './App.css';
//COMPONENTES
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {

	return (
			<div className='App'>
				<Header />
				<ItemListContainer seccion = {'Productos'} />
				
			</div>
	);
}

export default App;
