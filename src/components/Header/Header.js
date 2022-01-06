import * as React from 'react';
import './Header.css';
import { TiShoppingCart } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="logo-wrapper">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo"></img>
        </Link>
      </div>
      <div className="breadcrumb-wrapper">breadcrumb</div>
      <div className="cart-wrapper">
        <div className="cart-box">
          <div className="cart-badge">10</div>
          <TiShoppingCart className="cart-icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;
