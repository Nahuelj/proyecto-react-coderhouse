import React from 'react'
import styles from "./ItemDetail.module.css"

const ItemDetail = ({nombre, color, price, img, id}) => {
  return (
    <div className={styles.containerItemDetail}>
      <img className={styles.imgItemDetail} src={img} alt="" />
      <h3 className={styles.nombre}>{nombre}</h3>
      <h4 className={styles.price}>{price}</h4>
      <div className={styles.color}>color: {color}</div>
    </div>
  )
}

export default ItemDetail