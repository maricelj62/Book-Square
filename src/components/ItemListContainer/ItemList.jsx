import React from 'react';
import Item from './Item';

const ItemList = (props) => {
    return (
        <>
            {props.data.map(element => 
                <Item key={element.id} name={element.name} image={element.imageURL} price={element.price}/>
            )}
        </>
    )
}

export default ItemList
