import React from 'react'
import styles from "./ItemDetail.module.css"
import Counter from '../Counter/Counter';

const ItemDetail = ({nombre, color, price, img, id, stock}) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerItemDetail}>
        <img className={styles.imgItemDetail} src={img} alt="" />
        <h3 className={styles.nombre}>{nombre}</h3>
        <h4 className={styles.price}>{price}</h4>
        <div className={styles.color}>color: {color}</div>
      </div>
      <div>
        <Counter stock={stock}/>
      </div>
    </div>
  )
}

export default ItemDetail