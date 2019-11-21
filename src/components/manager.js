import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/manager.css';
import { Row, Col, Container, Image, Button, Form } from 'react-bootstrap';

import { connect } from 'react-redux';

function ManagerAuthOff() {
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

function alertas() {
    var activar = document.getElementById("Alertas");
    var sensores = document.getElementById("Sensores");
    var patrullas = document.getElementById('Patrullas');
    var admin = document.getElementById('Admin');
    if (activar) {
        alert('alertas');
        activar.style.display = 'inline';
        sensores.style.display = 'none';
        patrullas.style.display = 'none';
        admin.style.display = 'none';


    }
}
function sensores() {
    var activar = document.getElementById("Sensores");
    var alertas = document.getElementById("Alertas");
    var patrullas = document.getElementById('Patrullas');
    var admin = document.getElementById('Admin');
    if (activar) {
        alert('sensores');
        activar.style.display = 'inline';
        alertas.style.display = 'none';
        patrullas.style.display = 'none';
        admin.style.display = 'none';
    }
}
function patrullas() {
    var activar = document.getElementById("Patrullas");
    var alertas = document.getElementById("Alertas");
    var sensores = document.getElementById('Sensores');
    var admin = document.getElementById('Admin');
    if (activar) {
        alert('patrullas');
        activar.style.display = 'inline';
        alertas.style.display = 'none';
        sensores.style.display = 'none';
        admin.style.display = 'none';
    }
}

function ManagerAuthOn({ state }) {
    return (<div>
        <div className="body-manager">
            <Row>
                <Col xs lg={12}>
                    <div className='body-menu'>
                        <Col xs lg={12}>
                            <div className="img">
                                <Image src="/logo192.png" />
                            </div>
                            <h1>{state.email}</h1>
                        </Col>
                        <Col xs lg={12}>
                            <div>
                                <Button variant="link" onClick={alertas}>Alertas</Button>
                                <Button variant="link" onClick={sensores}>Registar Sensores</Button>
                                <Button variant="link" onClick={patrullas}>Registrar Patrullas</Button>
                                <Button variant="link">.</Button>
                            </div>
                            <hr></hr>
                            <Button variant="danger" onClick={sensores}>Login out</Button>
                        </Col>
                    </div>

                    <div className='body-opcion'>
                        <Col xs lg={8}>
                            <Col xs lg={12}>
                                <div className="Admin" id="Admin">
                                    <h1>Admin</h1>
                                </div>
                            </Col>
                            <Col xs lg={12}>
                                <div className="Alertas" id="Alertas">
                                    <h1>Alertas</h1>

                                </div>
                            </Col>
                            <Col xs lg={12}>
                                <div className="Sensores " id="Sensores">
                                    <h1>Sensor</h1>
                                    <Form>
                                        <Form.Group controlId="formBasicName">
                                            <Form.Label>Nombre</Form.Label>
                                            <Form.Control type="text" placeholder="sensor" />
                                            <Form.Text className="text-muted">
                                                nombre del sensor a registras.
                                         </Form.Text>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="text" placeholder="@ " />
                                            <Form.Text className="text-muted">
                                                Email de dueño del sensor.
                                         </Form.Text>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicSerial">
                                            <Form.Label>Serial</Form.Label>
                                            <Form.Control type="test" placeholder="xxx-xxxx" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicUbicacion">
                                            <Form.Label>Ubicacion</Form.Label>
                                            <Form.Control type="test" placeholder="" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicValMaximo">
                                            <Form.Label>Valor maximo</Form.Label>
                                            <Form.Control type="test" placeholder="100 %" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicValMinimo">
                                            <Form.Label>Valor minimo</Form.Label>
                                            <Form.Control type="test" placeholder="0 %" />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Registras
                                    </Button>
                                    </Form>
                                </div>
                            </Col>
                            <Col xs lg={12}>
                                <div className="Patrullas" id="Patrullas">
                                    <h1>Patrulla</h1>
                                    <Form>
                                        <Form.Group controlId="formBasicName">
                                            <Form.Label>Nombre</Form.Label>
                                            <Form.Control type="text" placeholder="patrulla" />
                                            <Form.Text className="text-muted">
                                                nombre del patrulla a registras.
                                         </Form.Text>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="text" placeholder="@ " />
                                            <Form.Text className="text-muted">
                                                Email de dueño de la patrulla.
                                         </Form.Text>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicUbicacion">
                                            <Form.Label>Ubicacion</Form.Label>
                                            <Form.Control type="test" placeholder="" />
                                        </Form.Group>
                                       
                                        <Button variant="primary" type="submit">
                                            Registras
                                    </Button>
                                    </Form>
                                </div></Col>
                            <Col xs lg={12}>
                                <div className="xxxxx">
                                    <h1>xxxxx</h1>
                                </div>
                            </Col>





                        </Col>
                    </div>

                </Col>
            </Row>
        </div>

    </div>);
}

function Manager({ state }) {
    console.log(state);
    if (state.email && state.token) {
        return <ManagerAuthOn state={state} />
    }

    return <ManagerAuthOff />

}

const mapStateToProps = state => ({
    state: state
})
const mapDispatchToProps = dispatch => ({


});

export default connect(mapStateToProps, mapDispatchToProps)(Manager);
