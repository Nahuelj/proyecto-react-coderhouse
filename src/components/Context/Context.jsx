import React, { createContext, useState } from 'react';

// Creamos el contexto
const MyContext = createContext();

// Creamos el componente proveedor del contexto
const MyContextProvider = ({ children }) => {
  const [itemsCart, setItemsCart] = useState(null);

  return (
    <MyContext.Provider value={{ itemsCart, setItemsCart }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
