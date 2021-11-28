import React from 'react';
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './itemDetail.css';

const ItemDetail = ({item}) => {

    const [string, setString] = useState('');

    function onAdd (qty) {
        setString(`Added ${qty}`);
    }

    return (
        <>
            <article className="itemDetail">
                <div className="itemDetail__imageContainer">
                    <img className="imageContainer__image" src={item.imageURL} alt="" />
                </div>
                <div className="itemDetail__textContainer">
                    <div className="textContainer__description">
                        <h2 className="description__title">{item.name}</h2>
                        <p className="description__parr">{item.author}</p>
                    </div>
                    <p>USD {item.price}</p>
                    <p>{item.description}</p>
                </div>
            </article>
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} displayMsg={string}/>
        </>
    )
}

export default ItemDetail
