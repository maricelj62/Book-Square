import React from 'react';
import Item from '../Item/Item';
import './itemList.css';

const ItemList = (props) => {
    return (
        <section className="itemList">
            {props.data.map(element => 
                <Item key={element.id} id={element.id} image={element.imageURL} name={element.name} author={element.author} price={element.price}/>
            )}
        </section>
    )
}

export default ItemList
