import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './cartListContainer.css';

const CartListContainer = () => {

    const {cartList, emptyCart, totalPrice, totalQty} = useContext(CartContext);

    return (
        <section className="cartListContainer">
            {totalQty === 0 ?
                <p className="cartListContainer__parr">No hay productos en el carrito.</p>
                :
                <section className="cartListContainer__cart">
                    <section>
                        {cartList.map(element => 
                            <Cart key={element.product.id} id={element.product.id} image={element.product.imageURL} name={element.product.name} author={element.product.author} price={element.product.price} qty={element.quantity} />
                        )}
                    </section>
                    <div className="cart__btnContainer">
                        <div className="btnContainer__buttons">
                            <p>Total compra: USD ${totalPrice.toFixed(2)}</p>
                            <Link to="/orderForm">
                                <button className="buttons__checkout">Checkout</button>
                            </Link>
                            <button className="buttons__emptyBtn" onClick={ () => emptyCart() }>Vaciar carrito</button>
                        </div>
                    </div>
                </section>
            }
        </section>
    )

}

export default CartListContainer
