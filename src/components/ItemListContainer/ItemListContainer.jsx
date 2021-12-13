import React from 'react';
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';
import GreetingContainer from '../GreetingContainer/GreetingContainer';
import getFirestore from '../Firebase/firebase';
import { useState, useEffect } from 'react';
import './itemListContainer.css';
import { useParams } from 'react-router';

const ItemListContainer = () => {

    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)
    const {idCategory} = useParams()

    useEffect(() => {
        const db = getFirestore()
        if (idCategory) {
            const dbQuery = db.collection('books').where('category', '==', idCategory)
            dbQuery.get()
            .then(data => 
                setBooks( data.docs.map(item => ( {id: item.id, ...item.data()} )) )
            )
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        } else {
            const dbQuery = db.collection('books')
            dbQuery.get()
            .then(data => 
                setBooks( data.docs.map(item => ( {id: item.id, ...item.data()} )) )
            )
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }

        return () => {
            console.log('clean')
        }
    }, [idCategory])

    return (
        <section className="itemListContainer">
            { loading ? <Loading text="Loading..." /> :
                idCategory ? 
                    <>  
                        <GreetingContainer greeting = {idCategory} />
                        <ItemList data={books} />
                    </>
                    :
                    <> 
                        <GreetingContainer greeting = "Best sellers yet to come..." />
                        <ItemList data={books} />
                    </>
            }
        </section>
    )
}

export default ItemListContainer
