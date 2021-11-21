import React from 'react';
import ItemList from './ItemList';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import './itemListContainer.css';

const ItemListContainer = (props) => {
    
    const [string, setString] = useState('');

    function onAdd (qty) {
        setString(`Added ${qty}`);
    }

    function noStock () {
        setString("Sorry! Only 5 units in stock");
    }

    return (
        <section className="itemListContainer">
            <ItemList data={props.data} />
            <ItemCount stock={5} initial={1} onAdd={onAdd} noStock={noStock} displayMsg={string}/>
        </section>
    )
}

export default ItemListContainer
