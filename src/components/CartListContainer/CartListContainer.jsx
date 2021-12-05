import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import Cart from '../Cart/Cart';
import './cartListContainer.css';

const CartListContainer = () => {

    const {cartList, emptyCart} = useContext(CartContext);

    return (
        <section className="cartListContainer">
            <button onClick={ () => emptyCart() }>Empty Cart</button>
            {cartList.map(element => 
                <Cart key={element.product.id} id={element.product.id} image={element.product.imageURL} name={element.product.name} author={element.product.author} price={element.product.price} qty={element.quantity} />
            )}
        </section>
    )

}

export default CartListContainer
