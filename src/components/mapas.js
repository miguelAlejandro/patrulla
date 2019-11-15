import React from 'react';
import './css/mapas.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button, Container } from 'react-bootstrap';
import SimpleMap from './google_map';

function Mapas() {
  return (
    <div className="body-map">
      <Row>
        <Col sm={5}>
          <Col sm={12}>
            <div className="titulo-Notificaciones">
              <h3>Notificaciones</h3>
            </div>
          </Col>

          <Col sm={12}>
            <Container>

              <div className="notificaciones">
                {
                  [
                    '12',
                    '14',
                    '41',
                    '21',
                    '12',
                    '54',
                    '34',
                    '32',
                    '52',
                    '32',
                    '100',
                    '233',
                    '254',
                    '345',
                    '23',
                    '23',
                    '28',
                    '44',
                  ].map((variant, idx) => (
                    <div key={idx} >
                      <br></br>
                      <div className="nota">
                        <Row>
                          <Col>
                            <h4>Sensor {idx + 1}</h4>
                          </Col>


                          <Col>
                            <div className="button-enviar-cerrar">
                              <Button variant="success">Enviar</Button>
                              <Button variant="outline-danger">X</Button>

                            </div>
                          </Col>
                        </Row>
                        <Row>

                          <Col sm={12}>
                            <hr></hr>
                            <h6>Valor: {variant} V</h6>
                            <h6>Ubicacion: (123, 2323, 2312, 232)</h6>
                            <h6>Tiempo: 2 hora</h6>
                            <h6>fecha: 20/01/2012</h6>
                          </Col>
                        </Row>

                      </div>

                    </div>
                  ))
                }
              </div>

            </Container>
          </Col>
        </Col>



        <Col sm={7}>
          <div className="notificaciones">
            <Row>
              <Col sm={12}>
                <div className="titulo-google-map">
                  <h2>Google Map</h2>
                </div>

                <div className="google-map">
                  <SimpleMap />
                </div>
              </Col>

              <Col sm={12}>
                <Col sm={12}>
                  <div className="titulo-Informacion">
                    <h3>Informacion</h3>
                  </div>
                </Col>

                <Col sm={12}>
                  <Col sm={12}>
                    <div className="sensores">
                      <h4>Lista de sensores</h4>
                      {
                        [
                          'Sensor 1',
                          'Sensor 2',
                          'Sensor 3',
                          'Sensor 4',

                        ].map((variant, idx) => (
                          <div>{variant}</div>
                        ))
                      }
                    </div>
                  </Col>

                  <Col sm={12}>
                    <div className="patrullas">
                      <h4>Lista de patrullas</h4>
                      {
                        [
                          'Patrulla 1',
                          'Patrulla 2',
                          'Patrulla 3',


                        ].map((variant, idx) => (
                          <div>{variant}</div>
                        ))
                      }
                    </div>
                  </Col>
                </Col>
              </Col>
            </Row>
          </div>

        </Col>


      </Row>


    </div>

  );
}

export default Mapas;