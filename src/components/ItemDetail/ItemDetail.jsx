import React from 'react';
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import EndPurchaseButton from '../ItemCount/EndPurchaseButton';
import './itemDetail.css';

const ItemDetail = ({item}) => {

    const [string, setString] = useState('');
    const {addProduct, totalResult} = useContext(CartContext);
    const [itemCountShow, setItemCountShow] = useState(true);

    function onAdd (qty) {
        setString(`Added ${qty}`);
        addProduct({ product: item, quantity: qty});
        totalResult();
        setItemCountShow(false);
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
            {itemCountShow === true ?
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} which="itemDetail" />
                :
                <div className="itemCountContainer">
                    <div className="itemCountContainer__addContainer">
                        <EndPurchaseButton />
                        <p>{string}</p>
                    </div>
                </div>
            }
            
        </>
    )
}

export default ItemDetail
