import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

function Item({ items }) {
	 console.log('Items', items);
	return ( 
		
	  <div className="items"> 
	  	  <Card.Group>
		{items.map((item) => {
		  return (
			<Card key={item.id}>
			  <Image src={item.thumbnail} wrapped ui={false} />
			  <ItemDetailContainer item={item}/>
			</Card>
		  );
		})}
		</Card.Group> 
	  </div>
	);
  }

export default Item;

