import React from 'react';
import {useState, useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import firebase from 'firebase/compat/app';
import getFirestore from '../Firebase/firebase';
import './orderForm.css';

const OrderForm = () => {

    const {cartList, totalPrice, emptyCart} = useContext(CartContext);

    const [idOrder, setIdOrder] = useState('');
    const [string, setString] = useState('');

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');

    const generateOrder = (e) => {
        e.preventDefault();

        if (email.value === confirmEmail.value) {

            const order = {};
            order.date = firebase.firestore.Timestamp.fromDate(new Date());    
            order.buyer = {name: name.value, email: email.value, tel: phone.value};
            order.total =  totalPrice;

            order.items = cartList.map(cartItem => {
                const id = cartItem.product.id
                const name = cartItem.product.name
                const unitPrice = cartItem.product.price
                const quantity = cartItem.quantity;

                return {id, name, quantity, unitPrice}   
            })

            //Add collection
            const db = getFirestore()
            db.collection('orders').add(order)
            .then(resp => setIdOrder(resp.id))

            // Find items in books collection that match with products in cartList
            const itemsToUpdate = db.collection('books').where(
                firebase.firestore.FieldPath.documentId() , 'in', cartList.map(i=> i.product.id)
            )
        
            const batch = db.batch();
            
            // Update Stock in books collection
            itemsToUpdate.get()
            .then( collection=>{
                collection.docs.forEach(docSnapshot => {
                    batch.update(docSnapshot.ref, {
                        stock: docSnapshot.data().stock - cartList.find(item => item.product.id === docSnapshot.id).quantity
                    })
                })

                batch.commit()
            })

            setString('orderID ok')
            document.getElementById('orderForm').reset();
            emptyCart();

        } else {
            setString('email error');
        }
    }

    return (
        <section className="formContainer">
            <h1 className="formContainer__title">Checkout</h1>
            <form onSubmit={generateOrder} className="formContainer__dataRecord" id="orderForm">
                <fieldset className="dataRecord__inputSet">
                    <input className="inputSet__entry" type="text" name="name" placeholder="Nombre" ref={c => setName(c)} required />
                    <input className="inputSet__entry" type="text" name="phone" placeholder="Teléfono" ref={c => setPhone(c)} required />
                    <input className="inputSet__entry" type="email" name="email" placeholder="email" ref={c => setEmail(c)} required />
                    <input className="inputSet__entry" type="email" name="confirmEmail" placeholder="Confirmar email" ref={c => setConfirmEmail(c)} required />
                    <button className="inputSet__btn">Generar orden</button>
                    {idOrder!=='' && string==='orderID ok' ?
                        <label className="inputSet__orderIdText">El ID de su orden es: {idOrder}</label>
                        :
                        string === 'email error' ?
                            <label className="inputSet__orderIdText">¡Por favor verifique su email!</label>
                            :
                            <label className="inputSet__noSubmitText"></label>
                    }
                </fieldset>
            </form>
        </section>
    )
}

export default OrderForm
