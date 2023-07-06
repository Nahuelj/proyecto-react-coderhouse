import React, { useEffect, useState } from "react";
import data from "../../data/products.json";
import Item from "../Item/Item";
import styles from "./ItemList.module.css"
import Link from "react-router-dom"

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
        <div>Loading...</div>
      ) : (
        products.map((pr) => (
          <Link>
            <Item 
              key={pr.id} 
              id={pr.id}
              name={pr.nombre} 
              price={pr.price} 
              src={pr.img} />
          </Link>
        ))
      )}
    </div>
  );
};

export default ItemList;
