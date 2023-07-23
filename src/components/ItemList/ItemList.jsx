import React from "react";
import Item from "../Item/Item";
import styles from "./ItemList.module.css"

const ItemList = ({products}) => {
  
  return (
    <div className={styles.containerItemList}>
      {products.length === 0 ? (
        <div>Loading...</div>
      ) : (
        products.map((pr) => (
          <Item 
            key={pr.id}
            id={pr.id} 
            name={pr.nombre} 
            price={pr.precio} 
            src={pr.img} />
        ))
      )}
    </div>
  );
};

export default ItemList;