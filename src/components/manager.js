import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/manager.css';
import { Row, Col, Container, Image, Button, Form } from 'react-bootstrap';
import axios from 'axios';

import { connect } from 'react-redux';

const { useState, useEffect } = React;

function alertaPost(e) {
    e.preventDefault();
    const docs = {
        nombre: e.target.elements.nombre.value,
        email: e.target.elements.email.value,
        emailDestino: e.target.elements.emailDestino.value,
        ubicacion: e.target.elements.ubicacion.value,
        informacion: e.target.elements.informacion.value,
        serial: e.target.elements.serial.value,
    }

    if (docs.nombre && docs.email && docs.emailDestino && docs.ubicacion && docs.informacion && docs.serial) {
        console.log(docs)
        axios.post("http://localhost:3000/api/create_alertas", docs).then(function (res) {
            alert(res.data.message);
        }).catch(function (err) {
            alert("su alerta no pudo enviarse revise su coneccion de internet")
        })
    }
}
function sensorPost(e) {
    e.preventDefault();
    const docs = {
        nombre: e.target.elements.nombre.value,
        email: e.target.elements.email.value,
        serial: e.target.elements.serial.value,
        ubicacion: e.target.elements.ubicacion.value,
        valMaximo: e.target.elements.valMaximo.value,
        ValMinimo: e.target.elements.ValMinimo.value,
    }

    if (docs.nombre && docs.email && docs.valMaximo && docs.ubicacion && docs.ValMinimo && docs.serial) {
        console.log(docs)
        axios.post("http://localhost:3000/api/create_sensores", docs).then(function (res) {
            alert(res.data.message)
        }).catch(function (err) {
            alert("su alerta no pudo enviarse revise su coneccion de internet")
        })
    }
}

function patrullaPost(e) {
    e.preventDefault();
    const docs = {
        nombre: e.target.elements.nombre.value,
        email: e.target.elements.email.value,
        serial: e.target.elements.serial.value
    }

    if (docs.nombre && docs.email && docs.serial) {
        console.log(docs)
        axios.post("http://localhost:3000/api/create_sensores", docs).then(function (res) {
            alert(res.data.message)
        }).catch(function (err) {
            alert("su alerta no pudo enviarse revise su coneccion de internet")
        })
    }
}

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
    var ver;
    const [count, setCount] = useState([]);
    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        const fetchData = async () => {
            const result = await axios.get('http://localhost:3000/api/read_alertas');
            setCount(result.data.alertas);
            ver = result.data.alertas
            console.log(ver)
     
            ver = Object.keys(ver).map((alerta)=> <h1>{ver[alerta].nombre})</h1>)
   


        };
        fetchData();

    }, []);

    return (
        <div className="VerAlertas" id="VerAlertas">
            <Row>
                <Col xs lg={12}>
                    <div>
                        <h1>Ver Alertas</h1>
                        <ul>
                            {ver}
                        </ul>
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
                <Col xs lg={10}>
                    <Form onSubmit={(e) => alertaPost(e)}>

                        <div >
                            <br></br>
                            <h1>Registrar Alertas</h1>
                            <hr></hr>
                        </div>

                        <Form.Group controlId="nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="alerta" />
                            <Form.Text className="text-muted">
                                nombre de la alerta a registras.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="@ " />
                            <Form.Text className="text-muted">
                                Email.
                        </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="emailDestino">
                            <Form.Label>Email Destino</Form.Label>
                            <Form.Control type="text" placeholder="@ " />
                            <Form.Text className="text-muted">
                                Email destino.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="ubicacion">
                            <Form.Label>Ubicacion</Form.Label>
                            <Form.Control type="text" placeholder="" />
                            <Form.Text className="text-muted">
                                Google Map Ubicacion.
                        </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="serial">
                            <Form.Label>Serial</Form.Label>
                            <Form.Control type="text" placeholder="xxx-xxxx" />
                            <Form.Text className="text-muted">
                                Los seriales son unicos.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="informacion">
                            <Form.Label>Informacion</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                            <Form.Text className="text-muted">
                                Informacion de lo ocurido.
                        </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Registrar
                        </Button>

                    </Form>
                </Col>
            </Row>
        </div>
    )
}
function RegistrarSensores() {
    return (
        <div className="RegistrarSensores" id="RegistrarSensores">

            <Row >
                <Col xs lg={10}>
                    <Form onSubmit={(e) => sensorPost(e)}>

                        <div >
                            <br></br>
                            <h1>Registrar Alertas</h1>
                            <hr></hr>
                        </div>

                        <Form.Group controlId="nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Sensor" />
                            <Form.Text className="text-muted">
                                nombre de la sensor a registras.
                        </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="@ " />
                            <Form.Text className="text-muted">
                                Email.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="ubicacion">
                            <Form.Label>Ubicacion</Form.Label>
                            <Form.Control type="text" placeholder="" />
                            <Form.Text className="text-muted">
                                Google Map Ubicacion.
                        </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="serial">
                            <Form.Label>Serial</Form.Label>
                            <Form.Control type="text" placeholder="xxx-xxxx" />
                            <Form.Text className="text-muted">
                                Los seriales son unicos.
                        </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="valMaximo">
                            <Form.Label>Maximo</Form.Label>
                            <Form.Control type="text" placeholder="%" />
                            <Form.Text className="text-muted">
                                Valor maximo.
                        </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="ValMinimo">
                            <Form.Label>Minimo</Form.Label>
                            <Form.Control type="text" placeholder="%" />
                            <Form.Text className="text-muted">
                                Valor minimo
                        </Form.Text>
                        </Form.Group>


                        <Button variant="primary" type="submit">
                            Registrar
                    </Button>

                    </Form>
                </Col>

            </Row>
        </div>

    )
}

function RegistrarPatrullas() {
    return (
        <div className="RegistrarPatrullas" id="RegistrarPatrullas">
            <Row >

                <Col xs lg={10}>
                    <div >
                        <br></br>
                        <h1>Registrar Patrullas</h1>
                        <hr></hr>
                    </div>
                    <Form onSubmit={(e) => patrullaPost(e)}>

                        <Form.Group controlId="nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Patrulla" />
                            <Form.Text className="text-muted">
                                nombre de la sensor a registras.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="@ " />
                            <Form.Text className="text-muted">
                                Email.
                        </Form.Text>
                        </Form.Group>


                        <Form.Group controlId="serial">
                            <Form.Label>Serial</Form.Label>
                            <Form.Control type="text" placeholder="xxx-xxxx" />
                            <Form.Text className="text-muted">
                                Los seriales son unicos.
                        </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Registrar
                        </Button>

                    </Form>
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

function menuMiCuenta() {
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

function menuUsuarios() {
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
function menuOtros() {
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
                                <Button variant="danger" onClick={() => outUser()}>Login out</Button>
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

function Manager({ state, outUser }) {
    console.log(state);
    if (state.email && state.token) {
        return <ManagerAuthOn state={state} outUser={outUser} />
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
