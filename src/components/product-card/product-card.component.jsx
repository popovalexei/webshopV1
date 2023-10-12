import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context.jsx';
import { useNavigate } from 'react-router-dom';

import Button from '../button/button.component.jsx';
import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  const navigate = useNavigate();

  const goToProductDetails = () => {
    navigate('productDetails', { state: { product } });
  };

  return (
    <div className="product-card-container">
      <div
        onClick={() => {
          goToProductDetails();
        }}
      >
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
