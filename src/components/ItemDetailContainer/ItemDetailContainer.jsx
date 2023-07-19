import React, { useState, useEffect } from "react";
import data from "../../data/products.json";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const {id}= useParams();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
    promesa.then((res) => setProduct(res.find((item)=> item.id === parseInt(id))))
    console.log(product);
  }, [id]);

  return (
    <div>
    { product.length === 0? <div>Loading...</div>:
        <ItemDetail 
        nombre={product.nombre}
        color={product.color}
        img={product.img}
        price={product.price}
        stock={product.stock} />
      }
      </div>
  )
};

export default ItemDetailContainer;
