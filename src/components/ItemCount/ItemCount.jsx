import React from 'react';
import { useState } from 'react';
import ButtonCount from './ButtonCount';
import './itemCount.css';

const ItemCount = ({stock, initial, onAdd, displayMsg}) => {

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
                <button className="countContainer__btn" onClick={sum}>+</button>
                <button className="countContainer__btn" onClick={subtract}>-</button>
            </div>
            <div className="itemCountContainer__addContainer">
                <ButtonCount addToCart={addToCart} />
                <p>{displayMsg}</p>
            </div>  
        </div>
    )
}

export default ItemCount