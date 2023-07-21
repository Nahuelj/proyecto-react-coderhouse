import React, { createContext, useState } from 'react';

// Creamos el contexto
const MyContext = createContext();



// Creamos el componente proveedor del contexto
const MyContextProvider = ({ children }) => {
  const [itemsCart, setItemsCart] = useState([]);

  const agregar = (cant, item) => {
    const itemExistente = itemsCart.find((elemento) => elemento.id === item.id);
  
    if (itemExistente) {
      setItemsCart((prevItems) =>
        prevItems.map((elemento) =>
          elemento.id === item.id ? { ...elemento, cantidad: elemento.cantidad + cant } : elemento
        )
      );
    } else {
      const itemConCantidad = { ...item, cantidad: cant };
      setItemsCart((prevItems) => [...prevItems, itemConCantidad]);
    }

    alert("Producto agregado al carrito")
  };
  

  const eliminarElemento = (id) => {
    setItemsCart((prev) => prev.filter((item) => item.id !== id));
  };
  

  const clean= () => {
    setItemsCart([]);
  }

    console.log(itemsCart);
    
  return (
    <MyContext.Provider value={{ eliminarElemento, clean, agregar, itemsCart, setItemsCart }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider};

