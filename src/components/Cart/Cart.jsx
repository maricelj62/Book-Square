import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './cart.css';

const Cart = ({ id, image, name, author, price, qty }) => {

    const {deleteItem} = useContext(CartContext);

    const removeItem = () => {
        deleteItem(id);
        document.getElementById("cartItemCard").remove();
    }

    return (
        <article className="cartItemContainer" id="cartItemCard">
            <div className="itemContainer__imageContainer">
                <img className="imageContainer__image" src={image} alt="" />
            </div>
            <div className="itemContainer__textContainer">
                <div className="textContainer__description">
                    <h2 className="description__title">{name}</h2>
                    <p className="description__parr">{author}</p>
                </div>
                <p className="textContainer__price">USD {price}</p>
                <p className="textContainer__price">Quantity {qty}</p>
                <button onClick={removeItem} className="deleteBtn">Remove</button>
            </div>
        </article>
    )
}

export default Cart
