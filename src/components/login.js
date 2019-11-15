import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/login.css';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import axios from 'axios';

function Login() {
    function isValidEmail(mail) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
    }

    function LoginUp(e) {
        e.preventDefault();
        console.log('Login Up');
        var validar = true;
        if(e.target.elements.PasswordUp1.value != e.target.elements.PasswordUp2.value){
            alert("Error en el password");
            validar = false;
        }

        if(isValidEmail(e.target.elements.emailUp.value) != true){
            alert("Error en el email");
            validar = false;
        }

        if (validar) {
            const docs = {
                name: e.target.elements.user.value,
                email: e.target.elements.emailUp.value,
                password: e.target.elements.PasswordUp1.value,
                role: e.target.elements.type.value,
                image: null,
            }

            axios.post('http://localhost:3000/api/sign_up', { docs })
                .then(function (response) {
                    console.log(response.data);
                    if (response) {
                        alert("Login Up");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    if (error) {
                        alert(`Login Up Error: ${error}`);
                    }
                })
                .then(function () {
                    // always executed
                });
        }

    }

    function LoginIn(e) {
        e.preventDefault();
        console.log('Login In');
        if(isValidEmail(e.target.elements.email.value)){
            const docs = {
                email: e.target.elements.email.value,
                password: e.target.elements.Password.value,
            }
            axios.post('http://localhost:3000/api/sign_in', { docs })
                .then(function (response) {
                    console.log(response);
                    if (response) {
                        alert(`Login In data { message: ${response.data.message} , token :${response.data.token} } `);
                        window.location.href = "/mapas";
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    if (error) {
                        alert(`Login In Error: ${error}`);
                    }
                })
                .then(function () {
                    // always executed
                });
        }else{
            alert("Email no valido");
        }
        
    }
    return (
        <div className="body-login">
            <Container>
                <Row>
                    <Col sm={6}>
                        <div className="Sign_in">
                            
                            
                            <br></br>
                            <br></br>

                            <h2>Sign in</h2>
                            <hr></hr>
                            <Form onSubmit={(e) => LoginIn(e)}>
                                <Form.Group controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="@email" />
                                </Form.Group>
                                <br></br>
                                <br></br>
                                <Form.Group controlId="Password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <br></br>
                                <br></br>
                                <Button variant="primary" type="submit" >
                                    Login
                            </Button>
                            </Form>
                        </div>
                    </Col>

                    

                    <Col sm={6}>
                        <div className="Sign_up">
                            <h2>Sign up</h2>
                            <hr></hr>
                            <Form onSubmit={(e) => LoginUp(e)}>
                                <Form.Group controlId="user">
                                    <Form.Label>User</Form.Label>
                                    <Form.Control type="text" placeholder="user" />
                                </Form.Group>
                                <Form.Group controlId="emailUp">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="@email" />
                                </Form.Group>
                                <Form.Group controlId="PasswordUp1">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="PasswordUp2">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="type">
                                    <Form.Label>Type</Form.Label>
                                    <Form.Control as="select">
                                        <option>Usuario</option>
                                        <option>Cliente</option>
                                        <option>Patrulla</option>
                                        <option>Admin</option>
                                    </Form.Control>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Crear
                            </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Login;