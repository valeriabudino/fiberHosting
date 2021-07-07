import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

function Item({ item }) {
	// console.log('Items', item);

	return (
			<Card key={item.id}>
			  <Image src={item.thumbnail} wrapped ui={false} />
			</Card>
	);
  }

export default Item;

