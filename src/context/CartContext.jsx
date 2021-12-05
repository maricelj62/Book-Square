import React from 'react';
import { useState, createContext } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);
 
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
    }

    const deleteItem = (id) => {
        const index = cartList.findIndex(item => item.product.id === id);
        cartList.splice(index, 1);
        document.getElementById(id).remove();
    }

    return (
        <CartContext.Provider value={{cartList, addProduct, emptyCart, deleteItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
