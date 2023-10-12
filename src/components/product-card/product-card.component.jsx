import React, { useContext, useState } from 'react'
import { ProductsContext } from '../../contexts/products.context'
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/button/button.component';
import { CartContext } from '../../contexts/cart.context';


function ProductDetails() {

    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state.product

    const [productOptions, setProductOptions] = useState({
        size: null,
        category: product.category
    })

    const { addItemToCart } = useContext(CartContext);

    const goToHome = () => {
      navigate('/');
    };
    
  const addProductToCart = () => addItemToCart(product);

  console.log(product);

  return (
    <div>
        {/* if product category is TSHIRTS OR TRACKSUITS*/}
        {product.category === 'T-Shirts' || product.category === 'tracksuits'
        ? 
        <div>
            <button onClick={() => setProductOptions({size: 'S'})}>S</button>
            <button onClick={() => setProductOptions({size: 'M'})}>M</button>
            <button onClick={() => setProductOptions({size: 'L'})}>L</button>
        </div>
        : null
        }
        {/* if product category is SNEAKERS */}
        {product.category === 'sneakers' 
        ? 
        <div>
            <input>TO DO</input>
        </div>
        : null
        }
        <p>{product.name}</p>
        <img src={product.imageUrl} alt={`${product.name}`} />
        <Button buttonType="inverted" onClick={addProductToCart}>
          Add to card
        </Button>
        <Button onClick={goToHome}>Go back to shop</Button>
    </div>
  )
}

export default ProductDetails