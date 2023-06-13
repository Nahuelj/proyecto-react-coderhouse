import './App.css';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

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
