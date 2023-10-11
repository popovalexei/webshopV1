import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context.jsx';
import CheckoutItem from '../../components/checkout-item/checkout-item.component.jsx';

import Button from '../../components/button/button.component.jsx';

import './checkout.styles.scss';

const Checkout = () => {

  const { cartItems, cartTotal } = useContext(CartContext);

  const checkoutFunction = async() => {

    console.log(cartItems);

    //TODO
    //Update this with ENV variable  (backend server)
    await fetch('http://localhost:4000/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({items: cartItems})
    }).then((response) => {
      return response.json()
    }).then((response) =>{
      if (response.url) {
        window.location.assign(response.url)
      }
    })
  }

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className="total">TOTAL: ${cartTotal}</span>
      <Button onClick={checkoutFunction}>CHECKOUT</Button>
    </div>
  );
};

export default Checkout;
