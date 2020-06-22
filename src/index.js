import React from 'react';
import ReactDOM from 'react-dom';

// import {Navbar} from  'react-bootstrap'
// import {Nav} from  'react-bootstrap'


import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/home.js'
import Register from './components/register.js'
import Login from './components/login.js'
ReactDOM.render(
  <React.StrictMode>
    
    {/* <Router>
        <Navbar bg="light">
          <Navbar.Brand href="/" >
          WebSiteName
          
          </Navbar.Brand>
          <Nav.Link>
            <Link to="/login">Login</Link>
            </Nav.Link>
            <Nav.Link>
            <Link to="/register">Register</Link>
            </Nav.Link>

          
      </Navbar>
   
        <Switch>
          <Route path="/register" component={Register}/>
            
          <Route path="/login" component={Login}/>
           
          <Route path="/">
            <Home/>
          </Route>
          
        </Switch>     
    </Router> */}
    <Home/>
  </React.StrictMode>,
  document.getElementById('root')
);

