import React from 'react'
import styles from "./Item.module.css"
import { Link } from 'react-router-dom'

const Item = ({src, price, name}) => {
  return (
    <Link className={styles.containerItem}>
        <img className={styles.imgItem} src={src} alt="" />
        <h3 className={styles.nameItem}>{name}</h3>
        <h5 className={styles.priceItem}>{price}</h5>
    </Link>
  )
}

export default Item