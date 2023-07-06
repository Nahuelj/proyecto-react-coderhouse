import React from "react";
import styles from "./CartWidget.module.css"

const CartWidget = () => {
  return (
    <div className={styles.containerCartWidget}>
      <button className={styles.buttonCartWidget}>
        <img
          className={styles.imgCartWidget}
          src={require("../../img/cart.png")}
          alt="Imagen del carrito"
        />
      </button>
      <p className={styles.notificationCartWidget}>5</p>
    </div>
  );
};

export default CartWidget;
