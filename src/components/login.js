import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/login.css';
import { Form, Button } from 'react-bootstrap';


 

function Login() {
  return (
    
    <div className="body-login">
        <div className="login">
            <Form>
                <Form.Group controlId="url">
                    <Form.Label>Url</Form.Label>
                    <Form.Control type="text" placeholder="mongodb://localhost/my_database" />
                    <Form.Text className="text-muted">
                        Url Server Mongodb 
                    </Form.Text>
                </Form.Group>
                
                <Form.Group controlId="user">
                    <Form.Label>User</Form.Label>
                    <Form.Control type="text" placeholder="User" />
                </Form.Group>
                <Form.Group controlId="Password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="Save">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" href="/mapas">
                    Login
                </Button>
                
            </Form>
        </div>
        
    </div>
   
  );
}

export default Login;