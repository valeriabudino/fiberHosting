import React from 'react';
import './ItemListContainer.css'
//import ItemCount from  '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';


function ItemListContainer({ seccion }) {
	return (
		<div>
			<h2>{seccion}</h2>
			<div className="itemList-container">
				<ItemList />
			</div>
		</div>
	);
}

export default ItemListContainer;
