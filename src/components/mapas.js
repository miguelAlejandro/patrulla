import React from 'react';
import './css/mapas.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button } from 'react-bootstrap';
import SimpleMap from './google_map';

import data from '../data';

function Mapas() {
  const alertas = data.docs[0].alertas;
  const sensores = data.docs[0].sensores;
  // const patrullas = data.docs[0].patrullas;

  const notificaciones = alertas.map((alerta, id) =>
    <div key={id + "-nt"} >
      <br></br>
      <div className="nota">
        <Row>
          <Col xs lg={6}>
            <h4>{alerta.name}</h4>
          </Col>
          <Col xs lg={6}>
            <div className="button-enviar-cerrar">
              <Button variant="outline-danger">X</Button>
            </div>
            <div className="button-enviar-enviar">
              <Button variant="success">Enviar</Button>
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
    <div key={id + "-ls"} className="listaDesensores">


      <Col xs lg={12}>
        <Col xs lg={12}>
          <h4>{sensor.name}</h4>
        </Col>
        <Col xs lg={4}>
          <h5>Valor : {sensor.val}</h5>
        </Col>
        <Col xs lg={4}>
          <h6>Valor Maximo : {sensor.valMaximo}</h6>
          <h6>Valor Minimo : {sensor.valMinimo}</h6>
        </Col>
        <Col xs lg={4}>
          <h6>Ubicacion: {sensor.ubicacion}</h6>
        </Col>
      </Col>

    </div>
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
                  <div className="sensore_bar">
                    {
                      listaDeSensores
                    }

                  </div>
                </div>
              </Col>

              <Col xs lg={12}>
                <div className="patrullas">
                  <h4>Lista de patrullas</h4>
                  <div className="sensore_bar">
                    {
                      listaDeSensores
                    }

                  </div>
                </div>
              </Col>


            </Row>
          </div>

        </Col>


      </Row>


    </div>

  );
}

export default Mapas;