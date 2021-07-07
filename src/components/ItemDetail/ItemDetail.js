import React from 'react';
import { Card, Grid, Image } from 'semantic-ui-react';

const ItemDetail = ( {detail} ) => {

    return(

		<Grid divided='vertically'>
			<Grid.Row columns={2}>
				<Grid.Column>
					<Card>
						<Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
					</Card>
				</Grid.Column>
				<Grid.Column>
					<Card.Content>
						<Card.Header>{detail.title}</Card.Header>
						<Card.Meta>
						<h3>${detail.price}</h3>
						</Card.Meta>
					</Card.Content>
				</Grid.Column>
			</Grid.Row>
        </Grid>
    );
 
}

export default ItemDetail;