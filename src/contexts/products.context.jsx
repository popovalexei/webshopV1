import { createContext, useState } from 'react';

import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {

  const [products, setProducts] = useState(PRODUCTS);
  const [filter, setFilter] = useState('All Items')

  const value = { 
    products,
    filter,
    setFilter
   };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
