import React from 'react';
import { useState } from 'react';
import './itemCount.css';

const ItemCount = ({stock, initial, onAdd, noStock, displayMsg}) => {

    const [count, setCount] = useState(initial);

    function sum () {
        setCount(count + 1);
    }

    function subtract () {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    function addToCart () {
        if (stock >= count) {
            onAdd(count);
            setCount(1);
        } else {
            noStock();
        }
    }

    return (
        <div className="itemCountContainer">
            <div className="itemCountContainer__countContainer">
                <label className="countContainer__text">{count}</label>
                <button className="countContainer__btn" onClick={sum}>+</button>
                <button className="countContainer__btn" onClick={subtract}>-</button>
            </div>
            <button className="itemCountContainer__addBtn"onClick={addToCart}>Add to cart</button>
            <p>{displayMsg}</p>
        </div>
    )
}

export default ItemCount