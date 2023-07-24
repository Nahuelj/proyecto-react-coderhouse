import React from 'react'
import styles from './ItemCart.module.css';

const ItemCart = ({img, nombre, cantidad, precio, id, eliminar}) => {
    
    const borrar = () => {
        eliminar(id);
    };

  return (
    <div className={styles.container}> 
        <img className={styles.imgItem} src={img} alt="product" />
        <h3 className={styles.name}>
            {nombre}
        </h3>
        <div className={styles.cant}>
            cant: {cantidad}
        </div>
        <div className={styles.precio}>
            ${precio}
        </div>
        <button className={styles.buttonDelete} onClick={borrar}>
            X
        </button>
    </div>
  )
}

export default ItemCart