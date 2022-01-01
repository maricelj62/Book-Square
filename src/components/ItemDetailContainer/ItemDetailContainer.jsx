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
        const timer = setTimeout(() => {
            const db = getFirestore()
            const dbQuery = db.collection('books').doc(idProduct)
            dbQuery.get()
            .then(resp => setBook( {id: resp.id, ...resp.data()} ))  
            .finally(()=> setLoading(false))
        }, 1000);

        return () => {
            clearTimeout(timer);
        }
    }, [idProduct])

    return (
        <section className="itemDetailContainer">
            { loading ? <Loading text="Cargando..." /> : <ItemDetail item={book}/> }
        </section>
    )
}

export default ItemDetailContainer
