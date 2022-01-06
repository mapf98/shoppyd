import * as React from 'react';
import PropTypes from 'prop-types';
import './Product.css';
import { TiZoomIn } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
import CustomImg from '../CustomImg/CustomImg';

function Product(props) {
  const navigate = useNavigate();

  function goToDetail() {
    let name = props.brand + ' ' + props.model;
    let nameForUrl = name.toLowerCase().replace(/ /g, '-');
    navigate(`/product/${nameForUrl}/${props.id}/details`);
  }

  return (
    <div className="product-wrapper" onClick={goToDetail}>
      <div className="product-info">
        <CustomImg url={props.imgUrl} name={props.brand + ' ' + props.model} height="250px" />
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
