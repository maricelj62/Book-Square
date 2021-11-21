import { useState, useEffect } from 'react';
import {getFetch} from './helpers/getFetch';
import NavBar from './components/NavBar/NavBar';
import GreetingContainer from './components/GreetingContainer/GreetingContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Loading from './components/Loading/Loading';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

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
    <>
      <NavBar />
      <GreetingContainer greeting = "Best sellers yet to come..." />
      { loading ? <Loading text="Loading..." /> : <ItemListContainer data={books} /> }
    </>
  );
}

export default App;
