import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
//import ItemCount from '../ItemCount/ItemCount';
import './cart.css';

const Cart = ({ item, id }) => {

    const {deleteItem, totalResult} = useContext(CartContext);
    
    const removeItem = () => {
        deleteItem(id);
        //totalResult();
    }

    //const [finalQty, setFinalQty]  = useState(qty);

    /*const modifyQty = (cartCount) => {
        setFinalQty(cartCount)
    }*/

    return (
        <article className="cartItemContainer" id={id}>
            <div className="itemContainer__imageContainer">
                <img className="imageContainer__image" src={item.product.imageURL} alt="" />
            </div>
            <div className="itemContainer__textContainer">
                <div className="textContainer__description">
                    <h2 className="description__title">{item.product.name}</h2>
                    <p className="description__parr">{item.product.author}</p>
                </div>
                <p className="textContainer__price">Unit price: USD {item.product.price}</p>
                <p className="textContainer__price">Quantity {item.quantity}</p>
                {/* <ItemCount stock={stock} initial={1} which="cart" quantity={finalQty} modifyQty={modifyQty}/> */}
                {/* <ItemCount stock={item.stock} initial={1} which="cart" quantity={item.quantity} item={item}/> */}
                <button className="deleteBtn" onClick={removeItem}>Remove</button>
            </div>
        </article>
    )
}

export default Cart
