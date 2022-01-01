import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartListContainer from './components/CartListContainer/CartListContainer';
import CartContextProvider from './context/CartContext';
import OrderForm from './components/OrderForm/OrderForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route path='/category/:idCategory' element={<ItemListContainer />} />
            <Route path='/detail/:idProduct' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartListContainer />} />
            <Route path='/orderForm' element={<OrderForm />} />
          </Routes>
        </>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
