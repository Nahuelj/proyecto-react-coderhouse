import React from "react";
import styles from "./CartWidget.module.css"
import { Link } from 'react-router-dom'

const CartWidget = ({cant = 0}) => {
  return (
    <div className={styles.containerCartWidget}>
      <Link to="/cart" className={styles.buttonCartWidget}>
        <img
          className={styles.imgCartWidget}
          src={require("../../img/cart.png")}
          alt="Imagen del carrito"
        />
      </Link>
      <p className={styles.notificationCartWidget}>{cant}</p>
    </div>
  );
};

export default CartWidget;
