import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/manager.css';
import { Row, Col, Container, Image, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import useAxios from 'axios-hooks'
import { connect } from 'react-redux';

function eliminarPatrulla(id) {
    
    var element = document.getElementById(id);
    if (element && id) {
        axios.post('http://localhost:3000/api/delete_patrullas', { id }).then((req, res) => {
           
            element.parentNode.removeChild(element);

        }).catch((err) => {
           

        })
    }

}
function eliminarAlerta(id) {
    
    var element = document.getElementById(id);
    if (element && id) {
        axios.post('http://localhost:3000/api/delete_alertas', { id }).then((req, res) => {
            
            element.parentNode.removeChild(element);

        }).catch((err) => {
            

        })
    }
}
function eliminarSensor(id) {
   
    var element = document.getElementById(id);
    if (element && id) {
        axios.post('http://localhost:3000/api/delete_sensores', { id }).then((req, res) => {
            
            element.parentNode.removeChild(element);

        }).catch((err) => {
            

        })
    }
}

function alertaPost(e) {
    e.preventDefault();
    const docs = {
        nombre: e.target.elements.nombre_1.value,
        email: e.target.elements.email_1.value,
        emailDestino: e.target.elements.emailDestino_1.value,
        informacion: e.target.elements.informacion_1.value
    }

    if (docs.nombre && docs.email && docs.emailDestino && docs.informacion) {
        
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
        nombre: e.target.elements.nombre_2.value,
        email: e.target.elements.email_2.value,
        codigo: e.target.elements.serial_2.value,
        ejeX: e.target.elements.ejeX_2.value,
        ejeY: e.target.elements.ejeY_2.value
    }

    if (docs.nombre && docs.email && docs.codigo && docs.ejeX && docs.ejeY) {
        
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
        nombre: e.target.elements.nombre_3.value,
        email: e.target.elements.email_3.value,
        ejeX: e.target.elements.ejeX_3.value,
        ejeY: e.target.elements.ejeY_3.value
    }
   
    if (docs.nombre && docs.email && docs.ejeX && docs.ejeY) {
       
        axios.post("http://localhost:3000/api/create_patrullas", docs).then(function (res) {
            alert(res.data.message)
        }).catch(function (err) {
            alert("su patrulla no pudo enviarse revise su coneccion de internet")
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
function VerAlertas({ email }) {
    const [{ data, loading, error }] = useAxios(
        'http://localhost:3000/api/read_alertas'
    )

    if (loading) return <div className="VerAlertas" id="VerAlertas"><p>Loading...</p></div>
    if (error) return <div className="VerAlertas" id="VerAlertas"><p>No hay alertas registradas</p></div>
    const myData = []
    data.alertas.forEach(d => {
        if (d.emailDestino === email) {
            myData.push(d)
        }
    });
    return (
        <div className="VerAlertas" id="VerAlertas">
            <Row>
                <Col xs lg={12}>
                    <div>
                        <h1>Ver Alertas</h1>
                        <div className="ver_alertas">
                            {myData.map((alerta =>
                                <div className="ve_alerta" id={alerta._id}>
                                    <Row>
                                        <Col xs lg={12}>
                                            <Row>
                                                <Col xs lg={8}>
                                                    <h2>{alerta.nombre}</h2>
                                                </Col>

                                                <Col xs lg={4}>
                                                    <Button onClick={() => eliminarAlerta(alerta._id)}>X</Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xs lg={6}>
                                            <h6>Email : {alerta.email}</h6>
                                        </Col>
                                        <Col xs lg={6}>
                                            <h6>Email destino : {alerta.emailDestino}</h6>
                                        </Col>
                                        <Col xs lg={12}>
                                            <h4>Informacion</h4>
                                            <p>{alerta.informacion}</p>
                                        </Col>
                                    </Row>



                                </div>
                            ))}
                        </div>
                    </div>
                </Col>
            </Row>
        </div>

    )

}
function VerSensores({ role }) {
    const [{ data, loading, error }] = useAxios(
        'http://localhost:3000/api/read_sensores'
    )

    if (loading) return <div className="VerSensores" id="VerSensores"><p>Loading...</p></div>
    if (error) return <div className="VerSensores" id="VerSensores"><p>No hay sensores registrados</p></div>
    
    return (
        <div className="VerSensores" id="VerSensores">
            <Row>
                <Col xs lg={12}>
                    <div>
                        <h1>Ver Sensores</h1>

                        <div className="ver_sensores">
                            {data.sensores.map((sensor =>
                                <div key={sensor._id} className="ve_sensor" id={sensor._id}>
                                    <Row>
                                        <Col xs lg={12}>
                                            <Row>
                                                <Col xs lg={8}>
                                                    <h2>{sensor.nombre}</h2>
                                                </Col>

                                                <Col xs lg={4}>
                                                    {role === "Admin" ? (<Button onClick={() => eliminarSensor(sensor._id)}>X</Button>) : (<div></div>)}

                                                </Col>

                                            </Row>

                                            <hr></hr>
                                        </Col>
                                        <Col xs lg={6}>

                                            <h6>Email : {sensor.email}</h6>

                                        </Col>
                                        <Col xs lg={6}>
                                            <h6>Serial : {sensor.codigo}</h6>
                                            <h6>Ubicacion</h6>
                                            <h6> x = {sensor.ejeX}</h6>
                                            <h6> y = {sensor.ejeY}</h6>
                                        </Col>

                                    </Row>



                                </div>
                            ))}
                        </div>
                    </div>
                </Col>
            </Row>
        </div>

    )

}
function VerPatrullas({ role }) {

    const [{ data, loading, error }] = useAxios(
        'http://localhost:3000/api/read_patrullas'
    )

    if (loading) return <div className="VerPatrullas" id="VerPatrullas"><p>Loading...</p></div>
    if (error) return <div className="VerPatrullas" id="VerPatrullas"><p>No hay patrullas registradas</p></div>

    return (
        <div className="VerPatrullas" id="VerPatrullas">
            <Row>
                <Col xs lg={12}>
                    <div>
                        <h1>Ver Patrullas</h1>

                        <div className="ver_patrullas">
                            {data.patrullas.map((patrulla =>
                                <div key={patrulla._id} className="ve_patrulla" id={patrulla._id}>
                                    <Row>
                                        <Col xs lg={12}>
                                            <Row>
                                                <Col xs lg={8}>
                                                    <h2>{patrulla.nombre}</h2>
                                                </Col>

                                                <Col xs lg={4}>
                                                    {role === "Admin" ? (<Button onClick={() => eliminarPatrulla(patrulla._id)}>X</Button>) : (<div></div>)}

                                                </Col>

                                            </Row>

                                            <hr></hr>
                                        </Col>
                                        <Col xs lg={6}>

                                            <h6>Nombre : {patrulla.nombre}</h6>
                                            <h6>Email : {patrulla.email}</h6>


                                        </Col>
                                        <Col xs lg={6}>
                                            <h6>Ubicacion</h6>
                                            <h6>X : {patrulla.ejeX}</h6>
                                            <h6>Y : {patrulla.ejeY}</h6>
                                        </Col>

                                    </Row>



                                </div>
                            ))}
                        </div>
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

                            <h1>Registrar Alertas</h1>
                            <hr></hr>
                        </div>

                        <Form.Group controlId="nombre_1">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="alerta" />
                            <Form.Text className="text-muted">
                                nombre de la alerta a registras.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="email_1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="@ " />
                            <Form.Text className="text-muted">
                                Email.
                        </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="emailDestino_1">
                            <Form.Label>Email Destino</Form.Label>
                            <Form.Control type="text" placeholder="@ " />
                            <Form.Text className="text-muted">
                                Email destino.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="informacion_1">
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

                            <h1>Registrar Sensores</h1>
                            <hr></hr>
                        </div>

                        <Form.Group controlId="nombre_2">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Sensor" />
                            <Form.Text className="text-muted">
                                nombre de la sensor a registras.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="email_2">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="@ " />
                            <Form.Text className="text-muted">
                                Email.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="serial_2">
                            <Form.Label>Codigo</Form.Label>
                            <Form.Control type="text" placeholder="xxx-xxxx" />
                            <Form.Text className="text-muted">
                                Los codigos son unicos.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="ejeX_2">
                            <Form.Label>X</Form.Label>
                            <Form.Control type="text" placeholder="" />
                            <Form.Text className="text-muted">
                                Google Map Ubicacion X.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="ejeY_2">
                            <Form.Label>Y</Form.Label>
                            <Form.Control type="text" placeholder="" />
                            <Form.Text className="text-muted">
                                Google Map Ubicacion Y.
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
                        <h1>Registrar Patrullas</h1>
                        <hr></hr>
                    </div>
                    <Form onSubmit={(e) => patrullaPost(e)}>

                        <Form.Group controlId="nombre_3">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Patrulla" />
                            <Form.Text className="text-muted">
                                nombre de la sensor a registras.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="email_3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="@ " />
                            <Form.Text className="text-muted">
                                Email.
                        </Form.Text>
                        </Form.Group>


                        <Form.Group controlId="serial_3">
                            <Form.Label>Serial</Form.Label>
                            <Form.Control type="text" placeholder="xxx-xxxx" />
                            <Form.Text className="text-muted">
                                Los seriales son unicos.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="ejeX_3">
                            <Form.Label>X</Form.Label>
                            <Form.Control type="text" placeholder="" />
                            <Form.Text className="text-muted">
                                Google Map Ubicacion X.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="ejeY_3">
                            <Form.Label>Y</Form.Label>
                            <Form.Control type="text" placeholder="" />
                            <Form.Text className="text-muted">
                                Google Map Ubicacion Y.
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
                                {state.image === "" ? (<Image src="/logo192.png" height='200px' width='200px'/>): (<Image src={state.image} height='200px' width='200px'/>)}
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
                                {state.role === 'Admin' ?
                                    (<div><h5>Registrar</h5>
                                        <Button variant="link" onClick={menuRegistrarAlertas}>Alertas</Button>
                                        <Button variant="link" onClick={menuRegistrarSensores}>Sensores</Button>
                                        <Button variant="link" onClick={menuRegistrarPatrullas}>Patrullas</Button>
                                        <h5>Configuraciones</h5>
                                        <Button variant="link" onClick={menuMiCuenta}>Mi cuenta</Button>
                                        <Button variant="link" onClick={menuUsuarios}>Usuarios</Button>
                                        <Button variant="link" onClick={menuOtros}>Otros</Button></div>) : (<div></div>)

                                }


                            </div>
                            <hr></hr>

                        </Col>
                    </Row>

                </Col>
                <Col xs lg={8}>
                    <Row>
                        <Col xs lg={12} className='body-opcion'>
                            <VerAlertas email={state.email} role={state.role}/>
                            <VerSensores  role={state.role}/>
                            <VerPatrullas role={state.role}/>

                            <RegistrarAlertas  />
                            <RegistrarSensores  />
                            <RegistrarPatrullas  />

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
