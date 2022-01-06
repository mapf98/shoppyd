import * as React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader/Loader';
import './Product.css';
import { TiZoomIn } from 'react-icons/ti';

function Product(props) {
  const [loaded, setLoaded] = React.useState(false);

  function loadedHandler() {
    setLoaded(true);
  }

  return (
    <div className="product-wrapper">
      <div className="product-info">
        <div className="product-img-wrapper">
          {!loaded && <Loader msg={'Cargando...'} />}
          <img
            style={{ display: loaded ? 'block' : 'none' }}
            onLoad={loadedHandler}
            src={props.imgUrl}
            alt={props.brand + ' ' + props.model}
            className="product-img"></img>
        </div>
        <hr></hr>
        <div className="product-info-wrapper">
          {props.price !== '' && (
            <div className="product-price-label">
              <p>{props.price} USD</p>
            </div>
          )}
          {props.price == '' && (
            <div className="product-not-available-label">
              <p>No disponible</p>
            </div>
          )}
          <p className="text-center">
            {props.brand} {props.model}
          </p>
        </div>
      </div>
      <div className="product-cta">
        <div className="product-cta-icon">
          <TiZoomIn className="cta-icon" />
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  id: PropTypes.string,
  brand: PropTypes.string,
  model: PropTypes.string,
  price: PropTypes.string,
  imgUrl: PropTypes.string
};

export default Product;
