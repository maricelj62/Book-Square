import React from 'react';
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';
import GreetingContainer from '../GreetingContainer/GreetingContainer';
import {getFetch} from '../../helpers/getFetch';
import { useState, useEffect } from 'react';
import './itemListContainer.css';
import { useParams } from 'react-router';

const ItemListContainer = () => {

    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)
    const {idCategory} = useParams()

    useEffect(() => {
        if (idCategory) {
            getFetch
            .then(data => {
                setBooks(data.filter(item => item.category === idCategory))
            })
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        } else {
            getFetch
            .then(data => { 
                setBooks(data)     
            })
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
