import React from 'react';
import { useState } from 'react';
import './itemCount.css';

const ItemCount = ({stock, initial, onAdd, displayMsg}) => {

    const [count, setCount] = useState(initial);

    function sum () {
        if (stock > count) {
            setCount(count + 1);
        }  
    }

    function subtract () {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    function addToCart () {
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
                <button className="addContainer__addBtn" onClick={addToCart}>Add to cart</button>
                <p>{displayMsg}</p>
            </div>  
        </div>
    )
}

export default ItemCount