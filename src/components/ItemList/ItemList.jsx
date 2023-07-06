import React, { useEffect, useState } from "react";
import data from "../../data/products.json";
import Item from "../Item/Item";
import styles from "./ItemList.module.css"

const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 4000);
    });

    promesa.then((result) => {
      setProducts(result);
    });
  }, []);

  return (
    <div className={styles.containerItemList}>
      {products.length === 0 ? (
        <div>load</div>
      ) : (
        products.map((pr) => (
          <Item 
            key={pr.id} 
            name={pr.nombre} 
            price={pr.price} 
            src={pr.img} />
        ))
      )}
    </div>
  );
};

export default ItemList;