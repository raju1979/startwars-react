import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderComponent from './Components/HeaderComponent';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup'

import { Route, Switch, Link } from 'react-router-dom';

import HomeComponent from './Components/HomeComponent';
import MovieComponent from './Components/MovieComponent';

function App() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">Star Wars</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home.</Nav.Link>
          <Button variant="outline-success" onClick={handleShow}>Info</Button>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form> */}
      </Navbar>
      <div className="container-fluid p-3">
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/movie/:id" render={(props) => <MovieComponent {...props} />} />
        </Switch>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Basic Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>This project uses React 16.10.2.</ListGroup.Item>
            <ListGroup.Item>This project uses React Hooks like <span>useEffect</span> &amp; <span>useState</span></ListGroup.Item>
            <ListGroup.Item>Axios is used for API calling</ListGroup.Item>
            <ListGroup.Item><span className='text-primary'>react-promise-tracker</span> &amp; <span className='text-primary'>react-loader-spinner</span> is also used</ListGroup.Item>
            <ListGroup.Item><span className='text-primary'>react-truncate</span> is also used to truncate large text.</ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default App;
