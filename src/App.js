import { Routes, Route } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';


// Components
import Home from './routes/home/home.component.jsx';
import Navigation from './routes/navigation/navigation.component.jsx';
import Checkout from './routes/checkout/checkout.component.jsx';
import About from './routes/about/about.component.jsx';
import Contact from './routes/contact/contact.component.jsx';
import AddressForm from './views/addressView/AddressForm.jsx';
import Success from './views/successView/Success.jsx';
import Cancel from './views/cancelView/Cancel.jsx';
import { CartContext } from './contexts/cart.context.jsx';

const App = () => {

  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    if (isCartOpen) {
      setIsCartOpen(!isCartOpen)};
    }

  return (
    <div onClick={toggleIsCartOpen}>
      <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="addressForm" element={<AddressForm />} />
        <Route path="success" element={<Success />} />
        <Route path="cancel" element={<Cancel/>} />
      </Route>
    </Routes>
    </div>
  );
};

export default App;
