import React from 'react';
import { Card } from 'semantic-ui-react';

const ItemDetail = ( {detail} ) => {

    return(
        <Card.Content>
				<Card.Header>{detail.title}</Card.Header>
				<Card.Meta>
				  <h3>${detail.price}</h3>
				</Card.Meta>
		</Card.Content>
    );
 
}

export default ItemDetail;