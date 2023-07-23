import './App.css';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Cart from './components/Cart/Cart';
import FinalizarCompra from './components/FinalizarCompra/FinalizarCompra';



function App() {

    return (
        <BrowserRouter>
        <div className="App">
            <div className='container-nav-widget'>
                <Navbar />
                <CartWidget />
            </div>

            <Routes>
                <Route path='/' element={<ItemListContainer greeting="Shop" />}/>
                <Route path='/category/:id' element={<ItemListContainer greeting={"Shop"} />}/>
                <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart/>} />
                <Route path="/finalizar" element={<FinalizarCompra/>} />
            </Routes>
        </div>
        </BrowserRouter>
    );
}

export default App;
