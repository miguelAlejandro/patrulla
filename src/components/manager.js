import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/manager.css';
import { Row, Col, Container } from 'react-bootstrap';

function Manager() {
    return (
    <div className="body-manager">    
        <Container>
            <Row>
                <Col xs lg={12}>
                    <h1>Manager</h1>
                </Col>
            </Row>
        </Container>

    </div>
    );
}

export default Manager;