import React from "react";
import "../styles/CartWidget.css";

const CartWidget = () => {
  return (
    <div className="container-cart-widget">
      <button className="button-cart-widget">
        <img
          className="img-cart-widget"
          src={require("../img/cart.png")}
          alt="Imagen del carrito"
        />
      </button>
      <p className="notification-cart-widget">5</p>
    </div>
  );
};

export default CartWidget;
