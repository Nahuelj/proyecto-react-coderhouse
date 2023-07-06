import React from 'react'
import ItemList from '../ItemList/ItemList'
import styles from "./ItemListContainer.module.css"

const ItemListContainer = ({ greeting }) => {
  return (
    <div className={styles.containerItemList}>
        <h2 className={styles.titleItemList}>{greeting}</h2>
        <ItemList></ItemList>
    </div>
  )
}

export default ItemListContainer