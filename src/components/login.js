import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/login.css';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
// import axios from 'axios';

function Login() {

    // function LoginUp(e) {
    //     // e.preventDefault();
    //     console.log('Login Up');
    //     console.log(e.target.elements.email.value);
    //   }

    //   function LoginIp(e) {
    //     // e.preventDefault();
    //     console.log('Login In');
    //     console.log(e.target.elements.email.value);
    //   }
    return (
    <div className="body-login">    
        <Container>
            <Row>
                <Col>
                    <div className="Sign_in">
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>

                        <h2>Sign in</h2>
                        <hr></hr>
                        <Form>
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
                            <Button variant="primary" type="submit" href="/mapas">
                                Login
                            </Button>
                        </Form>
                    </div>
                </Col>
                
                <Col>
                
                </Col>
                
                <Col>
                    <div className="Sign_up">
                        <h2>Sign up</h2>
                        <hr></hr>
                        <Form>
                            <Form.Group controlId="user">
                                <Form.Label>User</Form.Label>
                                <Form.Control type="text" placeholder="user" />
                            </Form.Group>
                            <Form.Group controlId="email-up">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="@email" />
                            </Form.Group>
                            <Form.Group controlId="Password-up-1">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="Password-up-2">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Type</Form.Label>
                            <Form.Control as="select">
                                <option>Usuario</option>
                                <option>Patrulla</option>
                                <option>Sensor</option>
                            </Form.Control>
                            </Form.Group>
                            <Button variant="primary" type="submit" href="/mapas">
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