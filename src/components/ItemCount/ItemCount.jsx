import React from 'react';
import { useState } from 'react';
import AddToCartButton from './AddToCartButton';
import './itemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const sum = () => {
        if (stock > count) {
            setCount(count + 1); 
        }
    }

    const subtract = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const addToCart = () => {
        onAdd(count);
        setCount(1);
    }

    return (
        <div className="itemCountContainer">
            <div className="itemCountContainer__countContainer">
                <label className="countContainer__text">{count}</label>
                <button className="countContainer__btn" onClick={sum} >+</button>
                <button className="countContainer__btn" onClick={subtract} >-</button>
            </div>
            <AddToCartButton handleEvent={addToCart}/>
        </div>
    )
}

export default ItemCount