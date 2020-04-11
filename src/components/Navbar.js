import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

const NavigationBar = (props) => (

  // <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  //   <a class="navbar-brand" href="#"> { props.title } </a>
  // </nav>
  <div>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar>
    <br />
  </div>
)

export default NavigationBar