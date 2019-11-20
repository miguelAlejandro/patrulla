import React from 'react';
// import logo from './logo.svg';

import { BrowserRouter, Route} from 'react-router-dom'
// import { Provider } from 'react-redux';
// import store from './redux/store';
import './App.css';

import Login from './components/login';
import Mapas from './components/mapas';
import Manager from './components/manager';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';

function App() {
  return (
    // <Provider store={store}>
      <BrowserRouter>
        <div>
          <Nav justify variant="tabs" bg="dark" defaultActiveKey="/Login">
            <Nav.Item>
              <Nav.Link href="/login"><h4>Login</h4></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1" href="/mapas"><h4>Mapas</h4></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" href="/manager"><h4>Manager</h4></Nav.Link>
            </Nav.Item>
          </Nav>

          <Route path="/login" component={Login} />
          <Route path="/mapas" component={Mapas} />
          <Route path="/manager" component={Manager} />
        </div>
      </BrowserRouter>
    // </Provider>
  );
}

export default App;
