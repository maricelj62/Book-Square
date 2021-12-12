import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './cart.css';

const Cart = ({ id, image, name, author, price, qty }) => {

    const {deleteItem} = useContext(CartContext);
    
    const removeItem = () => {
        deleteItem(id, qty, price);
    }

    return (
        <article className="cartItemContainer" id={id}>
            <div className="itemContainer__imageContainer">
                <img className="imageContainer__image" src={image} alt="" />
            </div>
            <div className="itemContainer__textContainer">
                <div className="textContainer__description">
                    <h2 className="description__title">{name}</h2>
                    <p className="description__parr">{author}</p>
                </div>
                <p className="textContainer__price">Unit price: USD {price}</p>
                <p className="textContainer__price">Quantity {qty}</p>
                <button className="deleteBtn" onClick={removeItem}>Remove</button>
            </div>
        </article>
    )
}

export default Cart
