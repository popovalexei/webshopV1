import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component.jsx';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component.jsx';

import { CartContext } from '../../contexts/cart.context.jsx';

import logo from '../../assets/logo.png';
import './navigation.styles.scss';

const Navigation = () => {
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img className="logo" src={logo} alt="Logo" />
          <h1>KFC Paal-Tervant</h1>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/about">
            ABOUT OUR CLUB
          </Link>
          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
