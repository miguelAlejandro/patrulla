import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom'

import Login from './components/login';
import Mapas from './components/mapas';
import Manager from './components/manager';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';

import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
       
          <Nav justify variant="tabs" bg="dark">
            <Nav.Item>
              <Link to="/login"><h4>Login</h4></Link>
            </Nav.Item>
            <Nav.Item>
             <Link to="/mapas"><h4>Mapas</h4></Link>
            </Nav.Item>
            <Nav.Item>
            <Link to="/manager"><h4>Manager</h4></Link>
            </Nav.Item>
          </Nav>

          <Route path="/login" component={Login} />
          <Route path="/mapas" component={Mapas} />
          <Route path="/manager" component={Manager} />
        
      </BrowserRouter>
      </Provider>
  );
}

export default App;
