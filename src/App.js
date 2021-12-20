import Metadata from './components/Metadata'
import './scss/AppStyles.scss';
import {Navbar, Nav, Container, Row, Col, Card, Button} from 'react-bootstrap';
import 'regenerator-runtime/runtime'
import React from 'react'
import { login, logout } from './utils'
import './global.css'

import getConfig from './config'
const { networkId } = getConfig(process.env.NODE_ENV || 'development')

export default function App() {
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            
          <Nav.Link onClick={
              (window.accountId==='') ?
              login :
              logout
          }>
            {
                (window.accountId==='')?
                'Login' :
                'Logout'
            }
          </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {
      (window.accountId!=='') ?
        <Container>
          <Row className="d-flex justify-content-center">Meta Data</Row>
          <Row>Send Token Out</Row>
          <Row>Active Keys</Row>
        </Container>
        :
        <Card>
          <Card.Header as="h5">Hello User!</Card.Header>
          <Card.Body>
            <Card.Title>Please Login!</Card.Title>
            <Card.Text>
              This Application Will Not Work Otherwise, Sorry! ;)
            </Card.Text>
            <Button onClick={login}>Login Now!</Button>
          </Card.Body>
        </Card>
      }
    </React.Fragment>
  );
} 
