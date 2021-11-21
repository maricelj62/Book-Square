import React from 'react';
import Item from './Item';
import './itemList.css';

const ItemList = (props) => {
    return (
        <section className="itemList">
            {props.data.map(element => 
                <Item key={element.id} name={element.name} image={element.imageURL} price={element.price}/>
            )}
        </section>
    )
}

export default ItemList
