import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom'

import Login from './components/login';
import Mapas from './components/mapas';
import Manager from './components/manager';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';

function App() {
  return (
   
      <BrowserRouter>
        <div>
          <Nav justify variant="tabs" bg="dark" defaultActiveKey="/Login">
            <Nav.Item>
              <Nav.Link ><Link to="/login"><h4>Login</h4></Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1"><Link to="/mapas"><h4>Mapas</h4></Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2"><Link to="/manager"><h4>Manager</h4></Link></Nav.Link>
            </Nav.Item>
          </Nav>

          <Route path="/login" component={Login} />
          <Route path="/mapas" component={Mapas} />
          <Route path="/manager" component={Manager} />
        </div>
      </BrowserRouter>
     
  );
}

export default App;
