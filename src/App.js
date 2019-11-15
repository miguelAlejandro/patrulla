import React from 'react';
import logo from './logo.svg';

import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';

import Login from './components/login';
import Mapas from './components/mapas';
import Manager from './components/manager';

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
          <Nav.Item>
            <Nav.Link eventKey="link-2" href="/manager"><h2>Manager</h2></Nav.Link>
          </Nav.Item>
          
        </Nav>

        <Route path="/login" component={Login}/>
        <Route path="/mapas" component={Mapas}/>
        <Route path="/manager" component={Manager}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
