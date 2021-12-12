import React from 'react';
import { useState, createContext } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);
    const [totalQty, setTotalQty] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
 
    const addProduct = (element) => {

        const carItemtQty = cartList.find(item => item.product.id === element.product.id);

        if (carItemtQty) {
            const sum = element.quantity + carItemtQty.quantity;
            const position = cartList.findIndex(item => item.product.id === element.product.id);
            cartList[position].quantity = sum;
        } else {
            setCartList( [...cartList, element] );
        }
    }

    const emptyCart = () => {
        if (cartList.length > 0) {
            setCartList([]);
        }
        setTotalQty(0);
    }

    const deleteItem = (id) => {
        const index = cartList.findIndex(item => item.product.id === id);
        cartList.splice(index, 1);
        document.getElementById(id).remove();
    }

    const totalResult = () => {
        const qtyResult = cartList.reduce((total, currentValue) => total = total + currentValue.quantity, 0);
        setTotalQty(qtyResult);
        const priceResult = cartList.reduce((total, currentValue) => total = total + currentValue.quantity*currentValue.product.price, 0);
        setTotalPrice(priceResult);
    }

    return (
        <CartContext.Provider value={{cartList, addProduct, emptyCart, deleteItem, totalResult, totalQty, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
