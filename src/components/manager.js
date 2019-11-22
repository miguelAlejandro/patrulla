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
function VerAlertas() {
    return (
        <div className="VerAlertas" id="VerAlertas">
            <Row>
                <Col xs lg={12}>
                    <div>
                        <h1>Ver Alertas</h1>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
function VerSensores() {
    return (
        <div className="VerSensores" id="VerSensores">
            <Row>
                <Col xs lg={12}>
                    <div>
                        <h1>Ver Sensores</h1>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
function VerPatrullas() {
    return (
        <div className="VerPatrullas" id="VerPatrullas">
            <Row>
                <Col xs lg={12}>
                    <div>
                        <h1>Ver Patrullas</h1>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

function RegistrarAlertas() {
    return (
        <div className="RegistrarAlertas" id="RegistrarAlertas">

            <Row >
                <Col xs lg={12}>
                    <div >
                        <br></br>
                        <h1>Registrar Alertas</h1>
                        <hr></hr>

                    </div>
                </Col>

                <Col xs lg={6}>
                    <div>
                        <Form.Group controlId="formBasicNamePatrulla">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="alerta" />
                            <Form.Text className="text-muted">
                                nombre de la alerta a registras.
                        </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="@ " />
                            <Form.Text className="text-muted">
                                Email ha enviar la alerta.
                        </Form.Text>
                        </Form.Group>


                    </div>
                </Col>
                <Col xs lg={5}>
                    <div >
                        <Form.Group controlId="formBasicUbicacion">
                            <Form.Label>Ubicacion</Form.Label>
                            <Form.Control type="text" placeholder="" />
                            <Form.Text className="text-muted">
                                Google Map Ubicacion.
                        </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicSerial">
                            <Form.Label>Serial</Form.Label>
                            <Form.Control type="text" placeholder="xxx-xxxx" />
                            <Form.Text className="text-muted">
                                Los seriales son unicos.
                        </Form.Text>
                        </Form.Group>
                    </div>
                </Col>
                <Col xs lg={11}>
                    <div>
                        <Form.Group controlId="formBasicSerial">
                            <Form.Label>Informacion</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                            <Form.Text className="text-muted">
                                Informacion de lo ocurido.
                        </Form.Text>
                        </Form.Group>
                    </div>

                </Col>
                <Col xs lg={12}>
                    <div>
                        <Button variant="primary">
                            Registrar
                        </Button>
                    </div>

                </Col>
            </Row>
        </div>
    )
}
function RegistrarSensores() {
    return (
        <div className="RegistrarSensores" id="RegistrarSensores">

            <Row >
                <Col xs lg={12}>
                    <div >
                        <br></br>
                        <h1>Registrar Sensores</h1>
                        <hr></hr>

                    </div>
                </Col>

                <Col xs lg={5}>
                    <div>
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
                            <Form.Text className="text-muted">
                                Los seriales son unicos.
                            </Form.Text>
                        </Form.Group>

                    </div>
                </Col>
                <Col xs lg={5}>
                    <div >
                        <Form.Group controlId="formBasicUbicacion">
                            <Form.Label>Ubicacion</Form.Label>
                            <Form.Control type="test" placeholder="" />
                            <Form.Text className="text-muted">
                                Google Map Ubicacion.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicValMaximo">
                            <Form.Label>Valor maximo</Form.Label>
                            <Form.Control type="test" placeholder="100 %" />
                            <Form.Text className="text-muted">
                                Solo numero.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicValMinimo">
                            <Form.Label>Valor minimo</Form.Label>
                            <Form.Control type="test" placeholder="0 %" />
                            <Form.Text className="text-muted">
                                Solo numero.
                            </Form.Text>
                        </Form.Group>
                    </div>
                </Col>
                <Col xs lg={12}>
                    <div>
                        <Button variant="primary">
                            Registrar
                            </Button>
                    </div>

                </Col>
            </Row>
        </div>

    )
}

function RegistrarPatrullas() {
    return (
        <div className="RegistrarPatrullas" id="RegistrarPatrullas">


            <Row >
                <Col xs lg={12}>
                    <div >
                        <br></br>
                        <h1>Registrar Patrullas</h1>
                        <hr></hr>

                    </div>
                </Col>

                <Col xs lg={5}>
                    <div>
                        <Form.Group controlId="formBasicNamePatrulla">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="patrulla" />
                            <Form.Text className="text-muted">
                                nombre de la patrulla a registras.
                        </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="@ " />
                            <Form.Text className="text-muted">
                                Email de dueño de la patrulla.
                        </Form.Text>
                        </Form.Group>


                    </div>
                </Col>
                <Col xs lg={5}>
                    <div >
                        <Form.Group controlId="formBasicUbicacion">
                            <Form.Label>Ubicacion</Form.Label>
                            <Form.Control type="test" placeholder="" />
                            <Form.Text className="text-muted">
                                Google Map Ubicacion.
                        </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicSerial">
                            <Form.Label>Serial</Form.Label>
                            <Form.Control type="test" placeholder="xxx-xxxx" />
                            <Form.Text className="text-muted">
                                Los seriales son unicos.
                        </Form.Text>
                        </Form.Group>
                    </div>
                </Col>
                <Col xs lg={12}>
                    <div>
                        <Button variant="primary">
                            Registras
                        </Button>
                    </div>

                </Col>
            </Row>
        </div>

    )
}

function MiCuenta() {
    return (
        <div className="MiCuenta" id="MiCuenta">
            <Row>
                <Col xs lg={12}>
                    <div >
                        <h1>Mi Cuenta</h1>
                    </div>
                </Col>
            </Row>
        </div>


    )
}
function Usuarios() {
    return (
        <div className="Usuarios" id="Usuarios">
            <Row>
                <Col xs lg={12}>
                    <div >
                        <h1>Usuarios</h1>
                    </div>
                </Col>
            </Row>
        </div>

    )
}

function Otros() {
    return (
        <div className="Otros" id="Otros">
            <Row>
                <Col xs lg={12}>
                    <div >
                        <h1>Otros</h1>
                    </div>
                </Col>
            </Row>
        </div>

    )
}

function menuVerAlerta() {
    document.getElementById("VerAlertas").style.display = 'inline';
    document.getElementById("VerSensores").style.display = 'none';
    document.getElementById('VerPatrullas').style.display = 'none';

    document.getElementById('RegistrarAlertas').style.display = 'none';
    document.getElementById('RegistrarSensores').style.display = 'none';
    document.getElementById('RegistrarPatrullas').style.display = 'none';

    document.getElementById("MiCuenta").style.display = 'none';
    document.getElementById("Usuarios").style.display = 'none';
    document.getElementById('Otros').style.display = 'none';
}
function menuVerSensores() {
    document.getElementById("VerAlertas").style.display = 'none';
    document.getElementById("VerSensores").style.display = 'inline';
    document.getElementById('VerPatrullas').style.display = 'none';

    document.getElementById('RegistrarAlertas').style.display = 'none';
    document.getElementById('RegistrarSensores').style.display = 'none';
    document.getElementById('RegistrarPatrullas').style.display = 'none';

    document.getElementById("MiCuenta").style.display = 'none';
    document.getElementById("Usuarios").style.display = 'none';
    document.getElementById('Otros').style.display = 'none';
}
function nemuVerPatrullas() {
    document.getElementById("VerAlertas").style.display = 'none';
    document.getElementById("VerSensores").style.display = 'none';
    document.getElementById('VerPatrullas').style.display = 'inline';

    document.getElementById('RegistrarAlertas').style.display = 'none';
    document.getElementById('RegistrarSensores').style.display = 'none';
    document.getElementById('RegistrarPatrullas').style.display = 'none';

    document.getElementById("MiCuenta").style.display = 'none';
    document.getElementById("Usuarios").style.display = 'none';
    document.getElementById('Otros').style.display = 'none';
}

function menuRegistrarAlertas() {
    
    document.getElementById("VerAlertas").style.display = 'none';
    document.getElementById("VerSensores").style.display = 'none';
    document.getElementById('VerPatrullas').style.display = 'none';

    document.getElementById('RegistrarAlertas').style.display = 'inline';
    document.getElementById('RegistrarSensores').style.display = 'none';
    document.getElementById('RegistrarPatrullas').style.display = 'none';

    document.getElementById("MiCuenta").style.display = 'none';
    document.getElementById("Usuarios").style.display = 'none';
    document.getElementById('Otros').style.display = 'none';
}
function menuRegistrarSensores() {
    document.getElementById("VerAlertas").style.display = 'none';
    document.getElementById("VerSensores").style.display = 'none';
    document.getElementById('VerPatrullas').style.display = 'none';

    document.getElementById('RegistrarAlertas').style.display = 'none';
    document.getElementById('RegistrarSensores').style.display = 'inline';
    document.getElementById('RegistrarPatrullas').style.display = 'none';

    document.getElementById("MiCuenta").style.display = 'none';
    document.getElementById("Usuarios").style.display = 'none';
    document.getElementById('Otros').style.display = 'none';

}
function menuRegistrarPatrullas() {
    document.getElementById("VerAlertas").style.display = 'none';
    document.getElementById("VerSensores").style.display = 'none';
    document.getElementById('VerPatrullas').style.display = 'none';

    document.getElementById('RegistrarAlertas').style.display = 'none';
    document.getElementById('RegistrarSensores').style.display = 'none';
    document.getElementById('RegistrarPatrullas').style.display = 'inline';

    document.getElementById("MiCuenta").style.display = 'none';
    document.getElementById("Usuarios").style.display = 'none';
    document.getElementById('Otros').style.display = 'none';

}

function menuMiCuenta(){
    document.getElementById("VerAlertas").style.display = 'none';
    document.getElementById("VerSensores").style.display = 'none';
    document.getElementById('VerPatrullas').style.display = 'none';

    document.getElementById('RegistrarAlertas').style.display = 'none';
    document.getElementById('RegistrarSensores').style.display = 'none';
    document.getElementById('RegistrarPatrullas').style.display = 'none';

    document.getElementById("MiCuenta").style.display = 'inline';
    document.getElementById("Usuarios").style.display = 'none';
    document.getElementById('Otros').style.display = 'none';
}

function menuUsuarios(){
    document.getElementById("VerAlertas").style.display = 'none';
    document.getElementById("VerSensores").style.display = 'none';
    document.getElementById('VerPatrullas').style.display = 'none';

    document.getElementById('RegistrarAlertas').style.display = 'none';
    document.getElementById('RegistrarSensores').style.display = 'none';
    document.getElementById('RegistrarPatrullas').style.display = 'none';

    document.getElementById("MiCuenta").style.display = 'none';
    document.getElementById("Usuarios").style.display = 'inline';
    document.getElementById('Otros').style.display = 'none';
}
function menuOtros(){
    document.getElementById("VerAlertas").style.display = 'none';
    document.getElementById("VerSensores").style.display = 'none';
    document.getElementById('VerPatrullas').style.display = 'none';

    document.getElementById('RegistrarAlertas').style.display = 'none';
    document.getElementById('RegistrarSensores').style.display = 'none';
    document.getElementById('RegistrarPatrullas').style.display = 'none';

    document.getElementById("MiCuenta").style.display = 'none';
    document.getElementById("Usuarios").style.display = 'none';
    document.getElementById('Otros').style.display = 'inline';
}

function ManagerAuthOn({ state, outUser }) {
    return (
        <div>
            <Row>
                <Col xs lg={4} className='body-menu'>
                    <Row>
                        <Col xs lg={12} >
                            <div className="img">
                                <Image src="/logo192.png" />
                                <div className='datos'>
                                    <h6>User: {state.name}</h6>
                                    <h6>Email: {state.email}</h6>
                                    <h6>Rol: {state.role}</h6>
                                </div>
                                <Button variant="danger" onClick={outUser}>Login out</Button>
                            </div>
                        </Col>
                        <Col xs lg={12}>
                            <div>
                                <h5>ver</h5>
                                <Button variant="link" onClick={menuVerAlerta}>Alertas</Button>
                                <Button variant="link" onClick={menuVerSensores}>Sensores</Button>
                                <Button variant="link" onClick={nemuVerPatrullas}>Patrullas</Button>
                                <h5>Registrar</h5>
                                <Button variant="link" onClick={menuRegistrarAlertas}>Alertas</Button>
                                <Button variant="link" onClick={menuRegistrarSensores}>Sensores</Button>
                                <Button variant="link" onClick={menuRegistrarPatrullas}>Patrullas</Button>
                                <h5>Configuraciones</h5>
                                <Button variant="link" onClick={menuMiCuenta}>Mi cuenta</Button>
                                <Button variant="link" onClick={menuUsuarios}>Usuarios</Button>
                                <Button variant="link" onClick={menuOtros}>Otros</Button>

                            </div>
                            <hr></hr>

                        </Col>
                    </Row>

                </Col>
                <Col xs lg={8}>
                    <Row>
                        <Col xs lg={12} className='body-opcion'>
                            <VerAlertas />
                            <VerSensores />
                            <VerPatrullas />

                            <RegistrarAlertas />
                            <RegistrarSensores />
                            <RegistrarPatrullas />

                            <MiCuenta />
                            <Usuarios />
                            <Otros />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
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
    outUser() {
        dispatch({
            type: "LOGIN_OUT",
            payload: null
        })
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(Manager);
