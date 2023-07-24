import React, { useContext } from 'react'
import styles from "./ItemDetail.module.css"
import ItemCount from '../ItemCount/ItemCount';
import {MyContext} from "../CartContext/CartContext";
 
const ItemDetail = ({categoria, nombre, color, price, img, id, stock}) => {
  const {agregar} = useContext(MyContext)

  const item = {
    "categoria": categoria,
    "nombre": nombre,
    "color": color,
    "price": price,
    "img": img,
    "id": id,
  }


  return (
    <div className={styles.container}>
      <div className={styles.containerItemDetail}>
        <img className={styles.imgItemDetail} src={img} alt="" />
        <h3 className={styles.nombre}>{nombre}</h3>
        <h4 className={styles.price}>{price}</h4>
        <div className={styles.color}>color: {color}</div>
      </div>
      <div>
        <ItemCount stock={stock}
                  fn={agregar}
                  item={item}/>
      </div>
    </div>
  )
}

export default ItemDetail