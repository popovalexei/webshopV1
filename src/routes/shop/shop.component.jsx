import { useContext } from 'react';

import { ProductsContext } from '../../contexts/products.context.jsx';
import ProductCard from '../../components/product-card/product-card.component.jsx';

import './shop.styles.scss';

const Shop = () => {
  const { products, filter } = useContext(ProductsContext);

  const tshirts = products.filter(
    (item) => item.category === "T-Shirts"
  );
  const tracksuits = products.filter(
    (item) => item.category === "tracksuits"
  );
  const sneakers = products.filter(
    (item) => item.category === "sneakers"
  );

    console.log(filter === 'T-Shirts');

  return (
    <div className="products-container">
      {/* {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))} */}
      {filter === "All Items" &&
      products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {filter === "T-Shirts" &&
      tshirts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {filter === "Tracksuits" &&
      tracksuits.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {filter === "Sneakers" &&
      sneakers.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
