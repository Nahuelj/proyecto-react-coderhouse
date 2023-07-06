import './App.css';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <div className='container-nav-widget'>
                <Navbar />
                <CartWidget />
            </div>
            <ItemListContainer greeting="Mensaje enviado desde una prop" />
        </div>
    );
}

export default App;
