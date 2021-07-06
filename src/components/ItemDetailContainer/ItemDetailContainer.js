import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ( {item} ) =>{

    const [detail, setDetail] = useState([]);

    useEffect(()=>{
 
        setTimeout(()=>{
            setDetail(item)
           
        }, 2000);

   }, []);

    return(
        <ItemDetail detail={detail} />
    )
    
}

export default ItemDetailContainer;