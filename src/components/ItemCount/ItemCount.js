import React, { Component } from 'react';
import './ItemCount.css';
import { Button, Segment , Header} from 'semantic-ui-react';

class ItemCount extends Component {
    constructor(){
        super();
        
        this.state={
            count : 1,
        }
    }
    counterUp = ()=> {
        this.setState({ count : this.state.count + 1});
    }
    counterDown = ()=>{
        this.setState({ count : this.state.count - 1});
    }
    render (){  
        return(
            <div className='count-container'>
                <Segment placeholder>
                <Header>
                <h3>Count</h3>
                </Header>
                    <p>{this.state.count}</p>
                    <div className='botones'>
                        <Button content='-' onClick={this.counterDown} secondary />
                        <Button content='+' onClick={this.counterUp} positive />
                    </div>
                <Button content='Añadir al carrito' onClick='onAdd' basic color='blue' />
            </Segment>
          </div>
        );
    }
}

export default ItemCount;