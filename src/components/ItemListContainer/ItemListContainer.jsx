import React,{ useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import styles from "./ItemListContainer.module.css"
import data from "../../data/products.json";
const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });

    promesa.then((result) => {
      setProducts(result);
    });
  }, []);

  return (
    <div className={styles.containerItemList}>
        <h2 className={styles.titleItemList}>{greeting}</h2>
        <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer