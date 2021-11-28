import React from 'react';
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';
import GreetingContainer from '../GreetingContainer/GreetingContainer';
import {getFetch} from '../../helpers/getFetch';
import { useState, useEffect } from 'react';
import './itemListContainer.css';

const ItemListContainer = () => {

    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch
        .then(data => { 
            setBooks(data)     
        })
        .catch(err => console.log(err))    
        .finally(()=> setLoading(false))
        
        return () => {
            console.log('clean')
        }
    },[])

    return (
        <section className="itemListContainer">
            { loading ? <Loading text="Loading..." /> :
               <> 
                <GreetingContainer greeting = "Best sellers yet to come..." />
                <ItemList data={books} />
               </> 
            }
        </section>
    )
}

export default ItemListContainer
