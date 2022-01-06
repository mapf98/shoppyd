import * as React from 'react';
import PropTypes from 'prop-types';
import './Loader.css';

function Loader(props) {
  return (
    <div className="loader-wrapper">
      <div className="text-center">
        <div className="loader-animation"></div>
      </div>
      <p className="loader-text text-center">{props.msg}</p>
    </div>
  );
}

Loader.propTypes = {
  msg: PropTypes.string
};

export default Loader;
