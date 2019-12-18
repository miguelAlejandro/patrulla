import React from 'react';
import { connect } from 'react-redux';
import './css/mapas.css';

import useAxios from 'axios-hooks'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button, Container } from 'react-bootstrap';
import SimpleMap from './google_map';

function cerrar(id) {

  var eliminar = document.getElementById(id + '-nt');
  if (eliminar) {
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
function MapasAuthOn({ state }) {
 
  const [{ data: alertas, loading: loading_alerta, error: error_alerta}, {refetch : alertasUpdate}] = useAxios(
    'http://localhost:3000/api/alertas_sensor_1'
  )
  const [{ data: sensores, loading: loading_sensores, error: error_sensores }] = useAxios(
    'http://localhost:3000/api/read_sensores'
  )
  const [{ data: patrullas, loading: loading_patrullas, error: error_patrullas }] = useAxios(
    'http://localhost:3000/api/read_patrullas'
  )

  const [{ data: sensor_1, loading: loading_sensor_1, error: error_sensor_1}, {refetch : sensor_1_Update}] = useAxios(
    'http://localhost:3000/api/read_sensor_1'
  )
  if (loading_alerta || loading_sensores || loading_patrullas || loading_sensor_1) return <p>Loading...</p>
  if (error_alerta || error_sensores || error_patrullas || error_sensor_1) return <p>Error!</p>
  
  var notificaciones;
  var listaDeSensores;
  var listaDePatrullas;
  var ver;


  if (alertas[0]) {
  
    notificaciones = alerta[0].map((alerta, id) =>
      <div key={id + "-nt"} id={id + "-nt"} >
        <br></br>
        <div className="nota">
          <Row>
            <Col xs lg={6}>
              <h4>{alerta.nombre}</h4>
            </Col>
            <Col xs lg={6}>
              <div className="button-enviar-cerrar">
                <Button variant="outline-danger" id={id} onClick={(e) => cerrar(e.target.id)}>X</Button>
              </div>
             
            </Col>
          </Row>
          <Row>
            <Col xs lg={6}>
              <hr></hr>
              <h6>Nombre: {alerta.name}</h6>
              <h6>Serial: {alerta.serial}</h6>
            </Col>
            <Col xs lg={6}>
              <hr></hr>
              <h6>Valor maximo: 70db</h6>
              <h6>Tiemp: {alerta.time}</h6>
              <hr></hr>
            </Col>
          </Row>
          
        </div>
      </div>
    );
  }
  if (alertas[1]) {
  
    notificaciones = alerta[1].map((alerta, id) =>
      <div key={id + "b" + "-nt"} id={id + "b" + "-nt"} >
        <br></br>
        <div className="nota">
          <Row>
            <Col xs lg={6}>
              <h4>{alerta.nombre}</h4>
            </Col>
            <Col xs lg={6}>
              <div className="button-enviar-cerrar">
                <Button variant="outline-danger" id={id} onClick={(e) => cerrar(e.target.id + "b")}>X</Button>
              </div>
             
            </Col>
          </Row>
          <Row>
          <Col xs lg={6}>
              <hr></hr>
              <h6>Nombre: {alerta.name}</h6>
              <h6>Serial: {alerta.serial}</h6>
            </Col>
            <Col xs lg={6}>
              <hr></hr>
              <h6>Valor maximo: 60db</h6>
              <h6>Tiemp: {alerta.time}</h6>
              <hr></hr>
            </Col>
          </Row>
         
        </div>
      </div>
    );
  }

  if (sensores) {

   ver = sensores.sensores;
    listaDeSensores = ver.map((sensor, id) =>
      <Col xs lg={4}>
        <div key={id + "-ls"} className="listaDesensores">
          <Row>
            <Col xs lg={12}>
              <h4>{sensor.nombre}</h4>
            </Col>
          </Row>
          <Row>
          <Col xs lg={12}>
              <h6>Email : {sensor.email}</h6>
              <h6>Serial : {sensor.codigo}</h6>
            </Col>
            <Col xs lg={12}>
              <h6>Valor = {sensor.valMaximo}</h6>
            </Col>
           
            <Col xs lg={12}>
              <h5>Ubicacion</h5>
              <h6>X : {sensor.ejeX}</h6>
              <h6>Y : {sensor.ejeY}</h6>
            </Col>
            
          </Row>
          <hr></hr>
        </div>
      </Col>
    );


  }
  if (patrullas) {

    ver = patrullas.patrullas;
    listaDePatrullas = ver.map((patrulla, id) =>
      <Col xs lg={4}>
        <div key={id + "-ps"} className="listaDesensores">
        <Row>
            <Col xs lg={12}>
              <h4>{patrulla.nombre}</h4>
            </Col>
          </Row>
          <Row>
          <Col xs lg={12}>
              <h6>Email : {patrulla.email}</h6>
            </Col>
            
           
            <Col xs lg={12}>
              <h5>Ubicacion</h5>
              <h6>X : {patrulla.ejeX}</h6>
              <h6>Y : {patrulla.ejeY}</h6>
            </Col>
            
          </Row>
          <hr></hr>
        </div>
      </Col>
    );

  }

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
              {notificaciones}
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
                      listaDePatrullas
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
function Mapas({ state }) {
  if (state.email && state.token) {
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