import React from 'react';
import './ItemListContainer.css'
import ItemCount from  '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';


function ItemListContainer({ nombre }) {
	return (
		<div className="itemList-container">
			<h4>Hola, {nombre}!!</h4>
			<ItemCount />
			<ItemList />
		</div>
	);
}

export default ItemListContainer;
