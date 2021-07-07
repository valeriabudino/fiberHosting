import React, { useEffect, useState} from 'react';
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer';

function ItemDetailView({match}) {
    const [items, setItems] = useState([]);
    let itemID = match.params.id;
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
    console.log(items)
	return (
			<div>
                <ItemDetailContainer items={items}/>              
			</div>
	);
}

export default ItemDetailView;
