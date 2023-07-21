import React, { useState } from 'react';
import styles from './ItemCount.module.css';

const ItemCount = ({ stock, fn, item }) => {
  
  const [count, setCount] = useState(1);

  const incrementar = () => {
    if (count < stock) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const decrementar = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleChange = (e) => {
    const inputValue = Number(e.target.value);
    if (!isNaN(inputValue) && inputValue >= 1 && inputValue <= stock) {
      setCount(inputValue);
    }
  };

  function infoAlPadre() {
    const cantidadElegida = count;
    fn(cantidadElegida, item);
  }

  return (
    <div className={styles.containerCount}>
      <div className={styles.containerCounter}>
        <button
          disabled={count === 1}
          onClick={decrementar}
          className={`${styles.buttonResta} ${styles.buttonCount}`}
        >
          -
        </button>
        <input
          className={styles.inputCount}
          type="text"
          value={count}
          onChange={handleChange}
        />
        <button
          disabled={count === stock}
          onClick={incrementar}
          className={`${styles.buttonSuma} ${styles.buttonCount}`}
        >
          +
        </button>
      </div>
      <div className={styles.containerAdd}>
        <button onClick={infoAlPadre} className={styles.add}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
