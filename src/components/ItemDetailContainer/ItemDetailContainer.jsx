import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getFirestore from '../Firebase/firebase';
import Loading from '../Loading/Loading';
import ItemDetail from '../ItemDetail/ItemDetail';
import './itemDetailContainer.css';

const ItemDetailContainer = () => {

    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(true);
    const { idProduct } = useParams();

    useEffect(() => {
        const db = getFirestore()
        const dbQuery = db.collection('books').doc(idProduct)
        dbQuery.get()
        .then(resp => setBook( {id: resp.id, ...resp.data()} ))
        .catch(err => console.log(err))    
        .finally(()=> setLoading(false))

        return () => {
            console.log("clean");
        }
    }, [idProduct])

    return (
        <section className="itemDetailContainer">
            { loading ? <Loading text="Loading..." /> : <ItemDetail item={book}/> }
        </section>
    )
}

export default ItemDetailContainer
