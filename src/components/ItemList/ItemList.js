import React, { useState, useEffect } from 'react';
import './ItemList.css';
import Item from '../Item/Item';
import { Card } from 'semantic-ui-react';
import { Link } from "react-router-dom";

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(()=>{

         // Llamada Async a una api   
         setTimeout(()=>{
            fetch(
                'https://api.mercadolibre.com/sites/MLA/search?q=grisino'
                )
                 .then((res)=> res.json())
                 .then((dataApi)=> setItems(dataApi.results));
 
         }, 2000);

    }, []);
  
    return(
        <div className="items">
            {items.map((item) => {
                return (
                        <Card.Group>
                            <div key={item}>
                                <Link to={`/detail/${item.id}`}>
                                    <Item item={item} />
                                </Link>
                            </div>
                        </Card.Group>
                    );
                })} 
        </div>
    );
}

export default ItemList;