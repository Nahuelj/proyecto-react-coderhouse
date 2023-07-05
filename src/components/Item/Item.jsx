import React from 'react'
import styles from "./Item.module.css"

const Item = () => {
  return (
    <div className={styles.containerItem}>
        <img className={styles.imgItem} src="https://http2.mlstatic.com/D_NQ_NP_626237-MLA52853876230_122022-W.webp" alt="" />
        <h3 className={styles.nameItem}>Nombre</h3>
        <h5 className={styles.priceItem}>Precio</h5>
    </div>
  )
}

export default Item