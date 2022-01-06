import * as React from 'react';
import './ProductList.css';
import SearchBar from '../../components/SearchBar/SearchBar';

function ProductList() {
  return (
    <section className="custom-view">
      <div className="product-list-toolbar">
        <h2>Productos (Total: 32)</h2>
        <SearchBar />
      </div>
      <hr className="custom-divider"></hr>
      <div className="product-list-wrapper"></div>
    </section>
  );
}

export default ProductList;
