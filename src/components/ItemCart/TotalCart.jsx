import React from 'react'
import styles from "./ItemCart.module.css"

const TotalCart = ({cant=0, precio=1}) => {
  return (
    <div className={styles.container}> 
        <h3 className={styles.name}>
            Total
        </h3>
        <div className={styles.cant}>
            cant:{cant}
        </div>
        <div className={styles.precio}>
            ${precio}
        </div>
    </div>
  )
}

export default TotalCart