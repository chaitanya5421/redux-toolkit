import React, { createContext, useContext, useState } from 'react';

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);

  return (
    <ProductsContext.Provider value={{ productsData, setProductsData }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductsContext);
