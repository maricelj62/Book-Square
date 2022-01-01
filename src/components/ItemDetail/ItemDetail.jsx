import React from 'react';
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import EndPurchaseButton from '../EndPurchaseButton/EndPurchaseButton';
import './itemDetail.css';

const ItemDetail = ({ item }) => {

    const [string, setString] = useState('');
    const [itemCountShow, setItemCountShow] = useState(true);
    const { addProduct, totalQty, setTotalQty, setTotalPrice, totalPrice } = useContext(CartContext);

    function onAdd(qty) {
        setString(`Producto agregado al carrito (x${qty})`);
        addProduct({ product: item, quantity: qty });
        setTotalQty(totalQty + qty);
        setTotalPrice(totalPrice + item.price * qty);
        setItemCountShow(false);
    }

    return (
        <>
            <article className="itemDetail">
                <div className="itemDetail__setContainer">
                    <img className="setContainer__image" src={item.imageURL} alt="" />
                    {item.stock === 0 ?
                    <p className="setContainer__parr">¡Lo sentimos! En el momento no hay productos disponibles.</p>
                    :
                        <>
                        {itemCountShow === true ?
                            <ItemCount stock={item.stock}  initial={1} onAdd={onAdd} />
                            :
                            <div className="setContainer__endPurchaseContainer">
                                <EndPurchaseButton />
                                <p>{string}</p>
                            </div>
                        }
                        </>
                    }
                </div>
                <div className="itemDetail__textContainer">
                    <h2 className="textContainer__mainTitle">{item.name}</h2>
                    <p className="textContainer__author">{item.author}</p>
                    <p className="textContainer__price">USD ${item.price}</p>
                    <p>{item.description}</p>
                </div>
            </article>

        </>
    )
}

export default ItemDetail
