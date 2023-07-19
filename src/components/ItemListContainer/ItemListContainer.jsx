import React,{ useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import styles from "./ItemListContainer.module.css"
import data from "../../data/products.json";
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 500);
    });

    promesa.then((result) => {
      setProducts(result);
      if (id) {
        setProducts(result.filter(item => item.categoria == id));
      }
    });
  }, [id]);

  return (
    <div className={styles.containerItemList}>
        <h2 className={styles.titleItemList}>{greeting}</h2>
        <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer