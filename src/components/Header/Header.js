import * as React from 'react';
import './Header.css';
import { TiShoppingCart } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { clearNavigation } from '../../store/reducers/navigation/actions';

function Header() {
  const navigation = useSelector((state) => state.navigation);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function resetNavigation() {
    dispatch(clearNavigation());
  }

  return (
    <header className="header">
      <div className="logo-wrapper">
        <Link to="/" onClick={resetNavigation}>
          <img src={logo} alt="Logo" className="logo"></img>
        </Link>
      </div>
      <div className="breadcrumb-wrapper">
        <Link to="/" onClick={resetNavigation}>
          <p className="breadcrumb-root">Productos</p>
        </Link>
        {navigation.productName !== '' && navigation.productId !== -1 && (
          <p className="breadcrumb-selector">&gt;</p>
        )}
        {navigation.productName !== '' && navigation.productId !== -1 && (
          <p className="text-center">{navigation.productName}</p>
        )}
      </div>
      <div className="cart-wrapper">
        <div className="cart-box">
          <div className="cart-badge">{cart.cartCount}</div>
          <TiShoppingCart className="cart-icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;
