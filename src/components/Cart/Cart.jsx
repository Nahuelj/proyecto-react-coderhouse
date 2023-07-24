import React, { useContext } from 'react'
import { MyContext } from '../CartContext/CartContext'
import ItemCart from '../ItemCart/ItemCart';
import styles from './Cart.module.css';
import TotalCart from '../ItemCart/TotalCart';
import { Link } from 'react-router-dom';

const Cart = () => {
  const {itemsCart, clean, eliminarElemento, totalCantidad, totalPrecio} = useContext(MyContext);

  return (
    <div className={styles.containerCart}>
      <div className={styles.containerProducts}>
        <div>Productos Agregados</div>
          {itemsCart.map((item)=>(
            <ItemCart 
            nombre={item.nombre}
            precio={item.price}
            img={item.img}
            cantidad={item.cantidad}
            key={item.id}
            id={item.id}
            eliminar={eliminarElemento}/>
            ))}
            <TotalCart
            cant={totalCantidad}
            precio={totalPrecio}/>
            <button className={`${styles.buttonsCart} ${styles.buttonsCartClean}`} onClick={clean} >Limpiar Carrito</button>
            <Link to="/finalizar"><button className={`${styles.buttonsCart} ${styles.buttonsCartChechout}`}>Finaliza compra</button></Link>
      </div>
    </div>
  )
}

export default Cart