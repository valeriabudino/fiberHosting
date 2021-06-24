import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const CartWidget = () => (
  <Header as='h2'>
    <Icon.Group size='small'>
      <Icon name='shopping cart'/>
    </Icon.Group>
  </Header>
)

export default CartWidget