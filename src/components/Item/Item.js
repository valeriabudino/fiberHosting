import React from 'react';
import { Card, Image } from 'semantic-ui-react';

function Item({ items }) {
	 console.log('USERS DESDE CARDUSER', items);
	return ( 
		
	  <div>  
		{items.map((item) => {
		  return (
			<Card key={item.id}>
			  <Image src={item.thumbnail} wrapped ui={false} />
			  <Card.Content>
				<Card.Header>{item.title}</Card.Header>
				<Card.Meta>
				  <p>{item.price}</p>
				</Card.Meta>
			  </Card.Content>
			</Card>
		  );
		})}
	  </div>
	);
  }

export default Item;




