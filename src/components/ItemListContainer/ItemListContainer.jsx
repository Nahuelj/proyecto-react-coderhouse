import React,{ useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import styles from "./ItemListContainer.module.css"
import { useParams } from 'react-router-dom';
import { collection, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { getDocs } from 'firebase/firestore';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const {id} = useParams();

  
  useEffect(() => {
    const referencia = collection(db, "productos")

    const q = id ? query(referencia, where("categoria", "==", id )) : referencia

    getDocs(q)
      .then((resp)=> {

        setProducts(resp.docs.map((doc)=>{
          return  {...doc.data(), id: doc.id}
        }));
      })
  }, [id]);

  return (
    <div className={styles.containerItemList}>
        <h2 className={styles.titleItemList}>{greeting}</h2>
        <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer