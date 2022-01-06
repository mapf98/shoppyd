import * as React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader/Loader';
import './CustomImg.css';

function CustomImg(props) {
  const [loaded, setLoaded] = React.useState(false);

  function loadedHandler() {
    setLoaded(true);
  }

  return (
    <div className="product-img-wrapper">
      {!loaded && <Loader msg={'Cargando...'} />}
      <img
        style={{ display: loaded ? 'block' : 'none' }}
        onLoad={loadedHandler}
        src={props.url}
        alt={props.name}
        height={props.height}
        className="product-img"></img>
    </div>
  );
}

CustomImg.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  height: PropTypes.string
};

export default CustomImg;
