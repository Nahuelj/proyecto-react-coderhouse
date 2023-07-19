import React, { useState } from "react";
import styles from "./Counter.module.css";

const Counter = ({ stock }) => {
  const [count, setCount] = useState(1);

  const incrementar = () => setCount(count + 1);
  const decrementar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className={styles.containerCount}>
      <div className={styles.containerCounter}>
        <button
          disabled={count === 1 ? true : false }  
          onClick={decrementar}
          className={`${styles.buttonResta} ${styles.buttonCount}`}
        >
          -
        </button>
        <input className={styles.inputCount} type="text" value={count} />
        <button
          disabled={stock === count ? true : false}
          onClick={incrementar}
          className={`${styles.buttonSuma} ${styles.buttonCount}`}
        >
          +
        </button>
      </div>
      <div className={styles.containerAdd}>
        <button className={styles.add}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default Counter;
