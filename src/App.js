import './App.css';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {
    return (
        <BrowserRouter>
        <div className="App">
            <div className='container-nav-widget'>
                <Navbar />
                <CartWidget />
            </div>

            <Routes>
                <Route path='/' element={<ItemListContainer greeting="Mensaje enviado desde una prop" />}/>
                <Route path='/category/:id' element={<ItemListContainer greeting="Mensaje enviado desde una prop" />}/>
                <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            </Routes>
        </div>
        </BrowserRouter>
    );
}

export default App;
