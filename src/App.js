import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderComponent from './Components/HeaderComponent';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import {Route, Switch, Link} from 'react-router-dom';

import HomeComponent from './Components/HomeComponent';

function App() {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form> */}
      </Navbar>
      <div className="container-fluid p-3">
        <Switch>
          <Route path="/" component={HomeComponent} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
