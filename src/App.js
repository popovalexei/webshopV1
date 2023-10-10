import { Routes, Route } from 'react-router-dom';

// Components
import Home from './routes/home/home.component.jsx';
import Navigation from './routes/navigation/navigation.component.jsx';
import Shop from './routes/shop/shop.component.jsx';
import Checkout from './routes/checkout/checkout.component.jsx';
import About from './routes/about/about.component.jsx';
import Contact from './routes/contact/contact.component.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
