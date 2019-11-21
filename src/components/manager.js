import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/manager.css';
import { Row, Col, Container } from 'react-bootstrap';

import { connect } from 'react-redux';

function Manager({state}) {
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

const mapStateToProps = state => ({
    state: state
})
const mapDispatchToProps = dispatch => ({
  

});

export default connect(mapStateToProps, mapDispatchToProps)(Manager);
