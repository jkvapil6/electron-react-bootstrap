import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

import { Link } from "react-router-dom"

const NavigationBar = (props) => (
  <Navbar bg="dark" variant="dark">
    <Nav className="mr-auto">
      <Nav.Link>
        <Link className="App-link" to="/">Home</Link>
      </Nav.Link>
      <Nav.Link>
        <Link className="App-link" to="/about">About</Link>
      </Nav.Link>
    </Nav>
  </Navbar>
)

export default NavigationBar