import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import Cart from '../Cart/Cart';
import './cartListContainer.css';

const CartListContainer = () => {

    const {cartList, emptyCart, totalPrice} = useContext(CartContext);

    return (
        <section className="cartListContainer">
            <button className="cartListContainer__emptyBtn" onClick={ () => emptyCart() }>Empty Cart</button>
            {cartList.map(element => 
                <Cart key={element.product.id} id={element.product.id} item={element} />
            )}
            <p>Total Price: {totalPrice}</p>
        </section>
    )

}

export default CartListContainer
