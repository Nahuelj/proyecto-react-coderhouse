import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc} from "firebase/firestore"
import { db } from "../../firebase/config"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const {id}= useParams();

  useEffect(() => {
    const ref = doc(db, "productos", id);
    getDoc(ref)
      .then((resp) => setProduct(
        {...resp.data(), id: resp.id}
      ));
  }, [id]);

  return (
    <div>
    { product.length === 0? <div>Loading...</div>:
        <ItemDetail 
        nombre={product.nombre}
        color={product.color}
        img={product.img}
        price={product.precio}
        stock={product.stock}
        categoria={product.categoria}
        id={product.id} />
      }
      </div>
  )
};

export default ItemDetailContainer;
