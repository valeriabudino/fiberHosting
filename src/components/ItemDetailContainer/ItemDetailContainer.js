import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ( {items} ) =>{

    const [detail, setDetail] = useState([]);

    useEffect(()=>{
 
        setTimeout(()=>{
            setDetail()
           
        }, 2000);

   }, []);

    return(
        <ItemDetail detail={detail} />
    )
    
}

export default ItemDetailContainer;