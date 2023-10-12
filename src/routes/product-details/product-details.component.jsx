import React, { useContext, useState } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/button/button.component';
import { CartContext } from '../../contexts/cart.context';
import "./product-details.styles.scss";

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
      <div className="checkout-item-container">
        <div className="product-page-left">
            <img className="product-image" src={product.imageUrl} alt={`${product.name}`} />
        </div>
        <div className="product-page-right">
          <div className="product-name-price">
            <span className="name bold">{product.name}</span>
            <span className="price bold">${product.price}</span>
          </div>
          {/* if product category is TSHIRTS OR TRACKSUITS*/}
          {product.category === 'T-Shirts' || product.category === 'tracksuits' ? (
            <div className="size-selector-holder">
              <p className="size-selector-label bold">Select Size</p>
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
          <div className="product-info-holder">
            <p className="product-info-title bold">Product Information</p>
            <p className="product-info">The Robey Performance Shirt in Navy/Sky Blue was developed especially in accordance with the wishes of our prof clubs. The luxurious training shirt is made of material that helps to remove sweat, to stay dry during the training and because of the perfect fit, one can move about in the field freely and feeling comfortable.</p>
          </div>
          <ul>
            <li>Free Shipping</li>
          </ul>
        </div>
      </div>
      <div className="checkout-buttons">
        <Button buttonType="inverted" onClick={addProductToCart}>
          Add to cart
        </Button>
        <Button onClick={goToHome}>Go back to shop</Button>
      </div>
    </div>
  );
}

export default ProductDetails;
