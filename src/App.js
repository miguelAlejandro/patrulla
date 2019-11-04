import React from 'react';
import logo from './logo.svg';

import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';

import Login from './components/login';
import Mapas from './components/mapas';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div>
        

        <Nav justify variant="tabs" bg="dark" defaultActiveKey="/Login">
          <Nav.Item>
            <Nav.Link href="/login"><h2>Login</h2></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" href="/mapas"><h2>Mapas</h2></Nav.Link>
          </Nav.Item>
          
        </Nav>

        <Route path="/login" component={Login}/>
        <Route path="/mapas" component={Mapas}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
