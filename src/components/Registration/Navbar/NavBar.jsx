import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import logo from '../../../assets/logo.png';
import {Button, Box} from 'gestalt';
import './Navbar.scss';
import {Link} from 'react-scroll';
import {NavLink} from 'react-router-dom';

export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="light" className="NavBar py-0 m-0 px-5 d-flex justify-content-center align-items-center">
        <Navbar.Brand href="#home" className="p-0"><img src={logo} className="Logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="Nav ml-auto p-0 d-flex justify-content-center align-items-center">
            <NavLink to="#"><p href="#deets">About</p></NavLink>
            <p hrefeventKey={2} href="#memes">
              Business            
            </p>
            <p eventKey={2} href="#memes">
              Blog            
            </p>
            <Link to="login" smooth={true} duration={900}>
            <Box paddingX={2}>
            <Button text="Log in" inline color="red"  display="flex" paddingX={3} marginEnd={3}/>
            </Box>
            </Link>
            <Link to="login" smooth={true} duration={900}>
            <Box paddingX={2}>
            <Button text="Sign up" inline color="grey"/>
            </Box>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}




