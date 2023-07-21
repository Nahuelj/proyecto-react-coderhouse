import React, { useContext } from 'react'
import { MyContext } from '../Context/Context'
import ItemCart from '../ItemCart/ItemCart';
import styles from './Cart.module.css';
import TotalCart from '../ItemCart/TotalCart';

const Cart = () => {
  const {itemsCart, clean, eliminarElemento} = useContext(MyContext);

  const totalCantidad = itemsCart.reduce((acu, item)=>acu + item.cantidad, 0);

  const totaPrecio = itemsCart.reduce((total, item)=>total + item.price * item.cantidad, 0);

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
            precio={totaPrecio}/>
            <button onClick={clean} >Limpiar Carrito</button>
      </div>
      <div>
        <div className={styles.finalizar}>Finalizar Compra</div>

        <form className={styles.formulario} action="">
          <label htmlFor="">Nombre:</label>
          <input type="" />
          
          <label htmlFor="">Tel:</label>
          <input type="number" />

          <label htmlFor="">Correo electronico:</label>
          <input type="text" />
        </form>

        <button>Comprar</button>
      </div>
    </div>
  )
}

export default Cart