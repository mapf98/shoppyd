import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setNavigation } from '../../store/reducers/navigation/actions';

function ProductDetails() {
  const { product_id, product_name } = useParams();
  const dispatch = useDispatch();

  function formatedProductName() {
    let name = product_name.split('-');
    let formatedName = '';

    name.forEach((word) => {
      formatedName = formatedName + word.charAt(0).toUpperCase() + word.slice(1) + ' ';
    });

    return formatedName.trim();
  }

  React.useEffect(() => {
    dispatch(setNavigation(product_id, formatedProductName()));
  }, []);

  return (
    <section>
      <h1>PRODUCT DETAILS {product_id} </h1>
    </section>
  );
}

export default ProductDetails;
