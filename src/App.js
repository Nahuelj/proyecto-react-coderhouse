import './App.css';
import CartWidget from './components/CartWidget';
import Item from './components/Item/Item';
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

            <Item/>
        </div>
    );
}

export default App;
