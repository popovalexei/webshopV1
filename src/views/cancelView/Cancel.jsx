import { useNavigate } from 'react-router-dom';
import React from 'react'

function Cancel() {
const navigate = useNavigate();
  const goShop = () => {
    navigate('/shop');
  };


  return (
    <div>
    <h1>Sorry to see you cancelled your Stripe payment!</h1>
    <button onClick={goShop}>Go back to the shop</button>
</div>
  )
}

export default Cancel