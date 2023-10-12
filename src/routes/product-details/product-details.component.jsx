import React, { useContext, useState } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/button/button.component';
import { CartContext } from '../../contexts/cart.context';

function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state.product;

  const [size, setSize] = useState('');

  const { addItemToCart, clearItemFromCart, removeItemToCart } =
    useContext(CartContext);

  const goToHome = () => {
    navigate('/');
  };

  const addProductToCart = () => addItemToCart();

  const clearItemHandler = () => clearItemFromCart({ ...product, size: size });
  const addItemHandler = () => addItemToCart({ ...product, size: size });
  const removeItemHandler = () => removeItemToCart({ ...product, size: size });

  return (
    <div>
      {/* if product category is TSHIRTS OR TRACKSUITS*/}
      {product.category === 'T-Shirts' || product.category === 'tracksuits' ? (
        <div>
          <button onClick={() => setSize('S')}>S</button>
          <button onClick={() => setSize('M')}>M</button>
          <button onClick={() => setSize('L')}>L</button>
        </div>
      ) : null}
      {/* if product category is SNEAKERS */}
      {product.category === 'sneakers' ? (
        <div>
          <input>TO DO</input>
        </div>
      ) : null}

      <div className="checkout-item-container">
        <div className="image-container">
          <img src={product.imageUrl} alt={`${product.name}`} />
        </div>

        <span className="name">{product.name}</span>
        <span className="quantity">
          <div className="arrow" onClick={removeItemHandler}>
            &#10094;
          </div>
          <span className="value"> {product.quantity || '0'}</span>
          <div className="arrow" onClick={addItemHandler}>
            &#10095;
          </div>
        </span>
        <span className="price">{product.price}</span>
        <div className="remove-button" onClick={clearItemHandler}>
          &#10005;
        </div>
      </div>

      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
      <Button onClick={goToHome}>Go back to shop</Button>
    </div>
  );
}

export default ProductDetails;
