import React, { useContext } from "react";
import styles from "./CartWidget.module.css"
import { Link } from 'react-router-dom'
import { MyContext } from "../CartContext/CartContext";

const CartWidget = () => {
  const {totalCantidad} = useContext(MyContext);
  return (
    <div className={styles.containerCartWidget}>
      <Link to="/cart" className={styles.buttonCartWidget}>
        <img
          className={styles.imgCartWidget}
          src={require("../../img/cart.png")}
          alt="Imagen del carrito"
        />
      </Link>
      <p className={styles.notificationCartWidget}>{totalCantidad}</p>
    </div>
  );
};

export default CartWidget;
