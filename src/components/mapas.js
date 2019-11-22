import React from 'react';
import { connect } from 'react-redux';
import './css/mapas.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button, Container } from 'react-bootstrap';
import SimpleMap from './google_map';

import data from '../data';
function cerrar(id) {
  var eliminar = document.getElementById(id + '-nt');
  if (eliminar) {
    alert('ok enviar');
    eliminar.style.display = 'none';
  }
}
function enviar(id) {
  var eliminar = document.getElementById(id + '-nt');
  if (eliminar) {
    alert('ok enviar');
    eliminar.style.display = 'none';
  }
}
function MapasAuthOff() {
  return (<div>
      <div className="body-manager">
          <Container>
              <Row>
                  <Col xs lg={12}>
                  <h1>Necesita iniciar seccion</h1>
                  </Col>
              </Row>
          </Container>

      </div>
      
  </div>);
}
function MapasAuthOn({state}) {
  const alertas = data.docs[0].alertas;
  const sensores = data.docs[0].sensores;
  // const patrullas = data.docs[0].patrullas;
  const notificaciones = alertas.map((alerta, id) =>
    <div key={id + "-nt"} id={id + "-nt"} >
      <br></br>
      <div className="nota">
        <Row>
          <Col xs lg={6}>
            <h4>{alerta.name}</h4>
          </Col>
          <Col xs lg={6}>
            <div className="button-enviar-cerrar">
              <Button variant="outline-danger" id={id} onClick={(e) => cerrar(e.target.id)}>X</Button>
            </div>
            <div className="button-enviar-enviar">
              <Button variant="success" id={id} onClick={(e) => enviar(e.target.id)}>Enviar</Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs lg={6}>
            <hr></hr>
            <h6>Valor: {alerta.val}</h6>
            <h6>Valor Maximo: {alerta.valMaximo}</h6>
            <h6>Valor Minimo: {alerta.ValMinimo}</h6>
          </Col>
          <Col xs lg={6}>
            <hr></hr>
            <h6>Ubicacion: {alerta.ubicacion}</h6>
            <h6>Hora: {alerta.hora}</h6>
            <h6>Fecha: {alerta.fecha}</h6>
            <hr></hr>
          </Col>
        </Row>
        <Row>
          <Col xs lg={12}>
            <h6>Detalles:</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit duis tempus fringilla id. Maecenas dictum hendrerit tortor placerat</p>
          </Col>
        </Row>
      </div>
    </div>
  );
  const listaDeSensores = sensores.map((sensor, id) =>
    <Col xs lg={4}>
      <div key={id + "-ls"} className="listaDesensores">
        <Row>
          <Col xs lg={12}>
            <h4>{sensor.name}</h4>
          </Col>
        </Row>
        <Row>
          <Col xs lg={12}>
            <h6>Valor Maximo = {sensor.valMaximo}</h6>
          </Col>
          <Col xs lg={12}>
            <h6>Valor Minimo = {sensor.ValMinimo}</h6>
          </Col>
          <Col xs lg={12}>
            <h6>Ubicacion : {sensor.ubicacion}</h6>
          </Col>
          <Col xs lg={12}>
            <h6>Valor = {sensor.val}</h6>
          </Col>
        </Row>
        <hr></hr>
      </div>
    </Col>
  );
  return (
    <div className="body-map">
      <Row>
        <Col xs lg={4}>
          <Col xs lg={12}>
            <div className="titulo-Notificaciones">
              <h3>Notificaciones</h3>
            </div>
          </Col>
          <Col xs lg={12}>
            <Col xs lg={12} className="notificaciones">
              {
                notificaciones
              }
            </Col>
          </Col>
        </Col>
        <Col xs lg={8}>
          <div className="notificaciones">
            <Row>
              <Col xs lg={12}>
                <div className="titulo-google-map">
                  <h2>Google Map</h2>
                </div>
                <div className="google-map">
                  <SimpleMap />
                </div>
              </Col>
              <Col xs lg={12}>
                <div className="titulo-Informacion">
                  <h3>Informacion</h3>
                </div>
              </Col>
              <Col xs lg={12}>
                <div className="sensores">
                  <h4>Lista de sensores</h4>
                  <Row className="sensore_bar">
                    {
                      listaDeSensores
                    }
                  </Row>
                </div>
              </Col>
              <Col xs lg={12}>
                <div className="patrullas">
                  <h4>Lista de patrullas</h4>
                  <Row className="sensore_bar">
                    {
                      listaDeSensores
                    }
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}
function Mapas({state}){
  if(state.email && state.token){
    return < MapasAuthOn />
  }
  return < MapasAuthOff />
}

const mapStateToProps = state => ({
    state: state
})
const mapDispatchToProps = dispatch => ({
  

});

export default connect(mapStateToProps, mapDispatchToProps)(Mapas);