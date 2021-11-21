import React from 'react';
import ItemList from './ItemList';
import './itemListContainer.css';

const ItemListContainer = (props) => {
    return (
        <section className="itemListContainer">
            <ItemList data={props.data} />
        </section>
    )
}

export default ItemListContainer
