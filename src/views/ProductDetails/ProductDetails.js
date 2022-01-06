import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setNavigation } from '../../store/reducers/navigation/actions';
import { fetchProductDetail } from '../../store/reducers/productDetails/actions';
import Loader from '../../components/Loader/Loader';
import { TiDelete } from 'react-icons/ti';
import CustomImg from '../../components/CustomImg/CustomImg';
import './ProductDetails.css';

function ProductDetails() {
  const { product_id, product_name } = useParams();
  const [color, setColor] = useState(-1);
  const [storage, setStorage] = useState(-1);
  const state = useSelector((state) => state.productDetails);
  const dispatch = useDispatch();

  function formatedInfo(info) {
    if (Array.isArray(info)) {
      return info.join(' / ');
    } else {
      return info == '' ? 'N/A' : info;
    }
  }

  function formatedProductName() {
    let name = product_name.split('-');
    let formatedName = '';

    name.forEach((word) => {
      formatedName = formatedName + word.charAt(0).toUpperCase() + word.slice(1) + ' ';
    });

    return formatedName.trim();
  }

  function handleChangeColor(e) {
    let { value } = e.target;
    setColor(parseInt(value));
  }

  function handleChangeStorage(e) {
    let { value } = e.target;
    setStorage(parseInt(value));
  }

  function addToCart() {
    console.log(color, storage);
  }

  React.useEffect(() => {
    dispatch(setNavigation(product_id, formatedProductName()));
    dispatch(fetchProductDetail(product_id));
    setColor(state.currentProductDetails.options.colors[0].code);
    setStorage(state.currentProductDetails.options.storages[0].code);
  }, []);

  return (
    <section className="custom-view">
      {!state.isFetched && <Loader msg={'Cargando detalle del producto...'} />}
      {state.isFetched && !state.isError && (
        <div>
          <h1>
            {state.currentProductDetails.brand} {state.currentProductDetails.model}
          </h1>
          <hr className="custom-divider"></hr>
          <div className="detail-wrapper">
            <div className="detail-img-wrapper deatil-col6">
              <CustomImg
                url={state.currentProductDetails.imgUrl}
                name={state.currentProductDetails.brand + ' ' + state.currentProductDetails.model}
                height="350px"
              />
            </div>
            <div className="detail-info-wrapper deatil-col6">
              <div className="detail-info-description">
                <h2 className="text-center">
                  {formatedInfo(state.currentProductDetails.brand) +
                    ' ' +
                    formatedInfo(state.currentProductDetails.model)}
                </h2>

                <p className="text-center">
                  <span className="price-text">
                    {formatedInfo(state.currentProductDetails.price)} USD
                  </span>
                </p>
                <hr className="custom-divider"></hr>
                <div className="info-text-wrapper">
                  <p>
                    <b>Información general</b>
                  </p>
                  <hr></hr>
                  <p className="infoItem">
                    <b>Marca: </b> {formatedInfo(state.currentProductDetails.brand)}
                  </p>
                  <p className="infoItem">
                    <b>Modelo: </b> {formatedInfo(state.currentProductDetails.model)}
                  </p>
                  <p className="infoItem">
                    <b>CPU: </b> {formatedInfo(state.currentProductDetails.cpu)}
                  </p>
                  <p className="infoItem">
                    <b>GPU: </b> {formatedInfo(state.currentProductDetails.gpu)}
                  </p>

                  <p className="item-separator">
                    <b>Tamaño</b>
                  </p>
                  <hr></hr>
                  <p className="infoItem">
                    <b>Dimensiones: </b> {formatedInfo(state.currentProductDetails.dimentions)}
                  </p>
                  <p className="infoItem">
                    <b>Peso (gramos): </b> {formatedInfo(state.currentProductDetails.weight)}
                  </p>

                  <p className="item-separator">
                    <b>Redes</b>
                  </p>
                  <hr></hr>
                  <p className="infoItem">
                    <b>Tecnología de red: </b>{' '}
                    {formatedInfo(state.currentProductDetails.networkTechnology)}
                  </p>
                  <p className="infoItem">
                    <b>Velocidad de red: </b>{' '}
                    {formatedInfo(state.currentProductDetails.networkSpeed)}
                  </p>
                  <p className="infoItem">
                    <b>GPRS: </b> {formatedInfo(state.currentProductDetails.gprs)}
                  </p>
                  <p className="infoItem">
                    <b>EDGE: </b> {formatedInfo(state.currentProductDetails.edge)}
                  </p>
                  <p className="infoItem">
                    <b>SIM: </b> {formatedInfo(state.currentProductDetails.sim)}
                  </p>

                  <p className="item-separator">
                    <b>Lanzamiento</b>
                  </p>
                  <hr></hr>
                  <p className="infoItem">
                    <b>Fecha de anuncio: </b> {formatedInfo(state.currentProductDetails.announced)}
                  </p>
                  <p className="infoItem">
                    <b>Estado: </b> {formatedInfo(state.currentProductDetails.status)}
                  </p>

                  <p className="item-separator">
                    <b>Pantalla</b>
                  </p>
                  <hr></hr>
                  <p className="infoItem">
                    <b>Tipo de pantalla: </b>{' '}
                    {formatedInfo(state.currentProductDetails.displayType)}
                  </p>
                  <p className="infoItem">
                    <b>Resolución de pantalla: </b>{' '}
                    {formatedInfo(state.currentProductDetails.displayResolution)}
                  </p>
                  <p className="infoItem">
                    <b>Tamaño de pantalla: </b>{' '}
                    {formatedInfo(state.currentProductDetails.displaySize)}
                  </p>

                  <p className="item-separator">
                    <b>Plataforma</b>
                  </p>
                  <hr></hr>
                  <p className="infoItem">
                    <b>Sistema operativo: </b> {formatedInfo(state.currentProductDetails.os)}
                  </p>

                  <p className="item-separator">
                    <b>Memoria</b>
                  </p>
                  <hr></hr>
                  <p className="infoItem">
                    <b>RAM: </b> {formatedInfo(state.currentProductDetails.ram)}
                  </p>
                  <p className="infoItem">
                    <b>Memoría interna: </b>
                    {formatedInfo(state.currentProductDetails.internalMemory)}
                  </p>
                  <p className="infoItem">
                    <b>Memoria externa: </b>
                    {formatedInfo(state.currentProductDetails.externalMemory)}
                  </p>

                  <p className="item-separator">
                    <b>Cámaras</b>
                  </p>
                  <hr></hr>
                  <p className="infoItem">
                    <b>Principal: </b> {formatedInfo(state.currentProductDetails.primaryCamera)}
                  </p>
                  <p className="infoItem">
                    <b>Secundaria: </b> {formatedInfo(state.currentProductDetails.secondaryCmera)}
                  </p>

                  <p className="item-separator">
                    <b>Conectividad</b>
                  </p>
                  <hr></hr>
                  <p className="infoItem">
                    <b>WLAN: </b> {formatedInfo(state.currentProductDetails.wlan)}
                  </p>
                  <p className="infoItem">
                    <b>Bluetooth: </b> {formatedInfo(state.currentProductDetails.bluetooth)}
                  </p>

                  <p className="item-separator">
                    <b>Sonido</b>
                  </p>
                  <hr></hr>
                  <p className="infoItem">
                    <b>Altavoces: </b> {formatedInfo(state.currentProductDetails.speaker)}
                  </p>
                  <p className="infoItem">
                    <b>Audio Jack: </b> {formatedInfo(state.currentProductDetails.audioJack)}
                  </p>

                  <p className="item-separator">
                    <b>Batería</b>
                  </p>
                  <hr></hr>
                  <p className="infoItem">
                    <b>Batería: </b> {formatedInfo(state.currentProductDetails.battery)}
                  </p>

                  <p className="item-separator">
                    <b>Otras características</b>
                  </p>
                  <hr></hr>
                  <p className="infoItem">
                    <b>Chipset: </b> {formatedInfo(state.currentProductDetails.chipset)}
                  </p>
                  <p className="infoItem">
                    <b>GPS: </b> {formatedInfo(state.currentProductDetails.gps)}
                  </p>
                  <p className="infoItem">
                    <b>NFC: </b> {formatedInfo(state.currentProductDetails.nfc)}
                  </p>
                  <p className="infoItem">
                    <b>Radio: </b> {formatedInfo(state.currentProductDetails.radio)}
                  </p>
                  <p className="infoItem">
                    <b>USB: </b> {formatedInfo(state.currentProductDetails.usb)}
                  </p>
                  <p className="infoItem">
                    <b>Sensores: </b> {formatedInfo(state.currentProductDetails.sensors)}
                  </p>
                  <p className="infoItem">
                    <b>Colores: </b> {formatedInfo(state.currentProductDetails.colors)}
                  </p>
                </div>
              </div>
              <div className="detail-info-actions">
                <select
                  className="custom-select"
                  placeholder="Colores"
                  onChange={handleChangeColor}>
                  {state.currentProductDetails.options.colors.map((color, index) => {
                    return (
                      <option key={index} value={color.code}>
                        {color.name}
                      </option>
                    );
                  })}
                </select>
                <select
                  className="custom-select"
                  placeholder="Colores"
                  onChange={handleChangeStorage}>
                  {state.currentProductDetails.options.storages.map((storage, index) => {
                    return (
                      <option key={index} value={storage.code}>
                        {storage.name}
                      </option>
                    );
                  })}
                </select>
                <div className="custom-button-wrapper">
                  <button className="custom-button" onClick={addToCart}>
                    Añadir al carrito de compras
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {state.isFetched && state.isError && (
        <div className="detail-error-wrapper">
          <div className="detail-error-icon-wrapper">
            <TiDelete className="detail-error-icon" />
          </div>
          <p className="text-center">
            Lo sentimos, ocurrió un errro al cargar la información del producto, intente nuevamente
          </p>
        </div>
      )}
    </section>
  );
}

export default ProductDetails;
