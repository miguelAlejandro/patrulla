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
 
  const [{ data: alertas, loading: loading_alerta, error: error_alerta}] = useAxios(
    'http://localhost:3000/api/alertas_sensor_1'
  )
  const [{ data: sensores, loading: loading_sensores, error: error_sensores }] = useAxios(
    'http://localhost:3000/api/read_sensores'
  )
  const [{ data: patrullas, loading: loading_patrullas, error: error_patrullas }] = useAxios(
    'http://localhost:3000/api/read_patrullas'
  )

  const [{ data: sensor_1}, sensor_1_Update] = useAxios(
    'http://localhost:3000/api/read_sensor_1'
  )
  if (loading_alerta || loading_sensores || loading_patrullas) return <p>Loading...</p>
  if (error_alerta || error_sensores || error_patrullas) return <p>Error!</p>
  
  
  var notificaciones_1;
  var notificaciones_2;
  var listaDeSensores;
  var listaDePatrullas;
  
  var ver;

  if (alertas.alert[0]) {
  
    notificaciones_1 =alertas.alert[0].map((alerta, id) =>
      <div key={alerta.time} id={id + "-nt"} >
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
            </Col>
            <Col xs lg={4}>
             
              <h6>Serial: {alerta.serial}</h6>
            </Col>
            <Col xs lg={6}>
              <h6>Valor maximo: 70db</h6>
             
            </Col>
          
          </Row>
          <Row>
            
            <Col xs lg={12}>
             
              <h6>fecha: {alerta.time}</h6>
              <hr></hr>
            </Col>
          </Row>
          
        </div>
      </div>
    );
  }
  if (alertas.alert[1]) {
  
    notificaciones_2 = alertas.alert[1].map((alerta, id) =>
      <div id={`${id}-nt`} >
        <br></br>
        <div className="nota">
          <Row>
            <Col xs lg={6}>
              <h4>{alerta.name}</h4>
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
              <h6>Serial: {alerta.serial}</h6>
            </Col>
            <Col xs lg={6}>
              <hr></hr>
              <h6>Valor maximo: 60db</h6>
              <h6>Fecha: {alerta.time}</h6>
              <hr></hr>
            </Col>
          </Row>
         
        </div>
      </div>
    );
  }

  if (sensores && sensor_1) {

   ver = sensores.sensores;
    listaDeSensores = ver.map((sensor, id) =>
    <div key={id}>

    <Col xs lg={4}>
        <div  className="listaDesensores">
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
              <h6>Valor = {sensor_1.data.serial === sensor.serial ? sensor_1.data.value : 0 }</h6>
              {/* <p>Time = {sensor_1.data.serial === sensor.serial ? sensor_1.hora : 0}</p> */}
             
              {/* <button onClick={updateData}>refetch</button> */}
            </Col>
           
            <Col xs lg={12}>
              <h6>Ubicacion</h6>
              <p>X : {sensor.ejeX}</p>
              <p>Y : {sensor.ejeY}</p>
            </Col>
            
          </Row>
      
        </div>
      </Col>
    </div>
    );


  }
  if (patrullas) {

    ver = patrullas.patrullas;
    listaDePatrullas = ver.map((patrulla, id) =>
      <div key={id}>
      <Col xs lg={4}>
        <div className="listaDesensores">
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
        </div>
      </Col>
  </div>
    );

  }

  if(sensor_1){
    setInterval(sensor_1_Update, 10000);
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
              {notificaciones_1}
              {notificaciones_2}
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