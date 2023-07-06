import React from 'react'
import styles from "./Item.module.css"

const Item = ({src, price, name}) => {
  return (
    <div className={styles.containerItem}>
        <img className={styles.imgItem} src={src} alt="" />
        <h3 className={styles.nameItem}>{name}</h3>
        <h5 className={styles.priceItem}>{price}</h5>
    </div>
  )
}

export default Item