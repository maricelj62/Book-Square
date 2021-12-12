import React from 'react';
import { useState } from 'react';
//import { CartContext } from '../../context/CartContext';
import ButtonCount from './ButtonCount';
import './itemCount.css';

const ItemCount = ({stock, initial, onAdd, which, quantity, item, modifyQty}) => {

    const [count, setCount] = useState(initial);
    const [cartCount, setCartCount] = useState(quantity);
    //const {addProduct} = useContext(CartContext);

    const sum = () => {
        
            if (which === "itemDetail") {
                setCount(count + 1); 
            } else {
                setCartCount(cartCount + 1);
                //addProduct({ product: item, quantity: cartCount});
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
                {which === "itemDetail" ?
                    <>
                    <label className="countContainer__text">{count}</label>
                    <ButtonCount addToCart={addToCart} />
                    </>
                    :
                    <label className="countContainer__text">{cartCount}</label>
                } 
                <button className="countContainer__btn" onClick={sum} >+</button>
                <button className="countContainer__btn" onClick={subtract} >-</button>
            </div>

           {/*<div className="itemCountContainer__addContainer">
                <ButtonCount addToCart={addToCart} />
            </div>   */}
        </div>
    )
}

export default ItemCount