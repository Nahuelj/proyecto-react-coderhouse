import './App.css';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
            </Routes>
        </div>
        </BrowserRouter>
    );
}

export default App;
