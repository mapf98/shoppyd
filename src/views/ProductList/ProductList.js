import * as React from 'react';
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
      </div>
    </section>
  );
}

export default ProductList;
