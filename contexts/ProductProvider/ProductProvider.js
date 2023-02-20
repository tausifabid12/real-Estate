import React, { createContext, useContext, useEffect } from 'react';
import productData from '../../data/ProuductData.json';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={productData}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

export const useProudcts = () => {
  const context = useContext(ProductContext);
  return context;
};
