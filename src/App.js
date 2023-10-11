import { Routes, Route } from 'react-router-dom';

// Components
import Home from './routes/home/home.component.jsx';
import Navigation from './routes/navigation/navigation.component.jsx';
import Checkout from './routes/checkout/checkout.component.jsx';
import About from './routes/about/about.component.jsx';
import Contact from './routes/contact/contact.component.jsx';

const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
    </div>
  );
};

export default App;
