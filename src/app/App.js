import * as React from 'react';
import Header from '../components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from '../views/ProductDetails/ProductDetails';
import ProductList from '../views/ProductList/ProductList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:product_name/:product_id/details" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
