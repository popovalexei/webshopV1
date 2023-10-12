import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
  const location = useLocation();

  const product = location.state.product;

  console.log(product.imageUrl);
  console.log(product.id);

  return (
    <div>
      <img src={product.imageUrl} alt={`${product.name}`} />
      <p>{product.name}</p>
    </div>
  );
};

export default ProductDetails;
