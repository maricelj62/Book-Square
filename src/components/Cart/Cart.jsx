import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './cart.css';

const Cart = ({ id, image, name, author, price, qty }) => {

    const { deleteItem } = useContext(CartContext);

    const removeItem = () => {
        deleteItem(id, qty, price);
    }

    return (
        <article className="cartItemContainer">
            <div className="cartItemContainer__imageContain">
                <img className="imageContain__image" src={image} alt="" />
                <button className="deleteBtn" onClick={removeItem}>Eliminar</button>
            </div>
            <div className="cartItemContainer__textContainer">
                <section className="textContainer__info">
                    <div className="info__title">
                        <h2 className="title__bookName">{name}</h2>
                        <p>{author}</p>
                    </div>
                    <div className="info__data">
                        <p className="data__paragraph">Precio (unidad): USD ${price}</p>
                        <p className="data__paragraph">Cantidad: {qty}</p>
                        <p className="data__paragraph">Precio total: USD ${price * qty}</p>
                    </div>
                </section>
                <hr />
            </div>
        </article>
    )
}

export default Cart
