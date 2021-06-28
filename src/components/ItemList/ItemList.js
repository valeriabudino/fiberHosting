import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';

const ItemList = () => {
    const [items, setItems] = useState({});

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
                <Item items={items} /> 
    
    );
}

export default ItemList;