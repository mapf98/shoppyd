import * as React from 'react';
import { TiDelete } from 'react-icons/ti';
import { useSelector, useDispatch } from 'react-redux';
import './ProductList.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import Loader from '../../components/Loader/Loader';
import Product from '../../components/Product/Product';
import { fetchProducts } from '../../store/reducers/products/actions';

function ProductList() {
  const productState = useSelector((state) => state.products);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <section className="custom-view">
      <div className="product-list-toolbar">
        <h2>Productos (Total: {productState.totalProducts})</h2>
        <SearchBar />
      </div>
      <hr className="custom-divider"></hr>
      {!productState.isFetched && <Loader msg={'Cargando productos...'} />}
      <div className="product-list-wrapper">
        {productState.isFetched &&
          !productState.isSearch &&
          productState.products.map((product, index) => {
            return (
              <Product
                key={index}
                id={product.id}
                brand={product.brand}
                model={product.model}
                price={product.price}
                imgUrl={product.imgUrl}
              />
            );
          })}
        {productState.isFetched &&
          productState.isSearch &&
          productState.totalProducts > 0 &&
          productState.searchResults.map((product, index) => {
            return (
              <Product
                key={index}
                id={product.id}
                brand={product.brand}
                model={product.model}
                price={product.price}
                imgUrl={product.imgUrl}
              />
            );
          })}
      </div>
      {productState.products.length == 0 && productState.isFetched && (
        <div>
          <div className="empty-wrapper">
            <TiDelete className="empty-icon" />
          </div>
          <p className="text-center">No hay productos registrados</p>
        </div>
      )}
      {productState.searchResults.length == 0 && productState.isFetched && productState.isSearch && (
        <div>
          <div className="empty-wrapper">
            <TiDelete className="empty-icon" />
          </div>
          <p className="text-center">No hay productos que coincidan con:</p>
          <p className="text-center">&quot;{productState.search}&quot;</p>
        </div>
      )}
    </section>
  );
}

export default ProductList;
