import React from 'react';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';
import logo from '../../../assets/logoP.png';
import {SearchField, Box, Avatar} from 'gestalt';
import './NavBar.scss';
import {NavLink} from 'react-router-dom';
import {FaBell} from 'react-icons/fa';
import {AiFillMessage} from 'react-icons/ai';

export default function NavBar() {
    const [value, setValue] = React.useState('');

    return (
        <Navbar collapseOnSelect className="NavBar" expand="lg" bg="light" variant="light">
         <NavLink className="navbar-link" to="/feed"><Navbar.Brand href="#home"><img src={logo} style={{width: "30px"}}/></Navbar.Brand></NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <NavLink activeClassName="selected"  className="navbar-link" to="/feed">Home</NavLink>
        <NavLink activeClassName="selected" className="navbar-link mx-1" to="/details">Today</NavLink>
        <NavLink activeClassName="selected"  className="navbar-link"to="/profile">About</NavLink>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
          <SearchField
            accessibilityLabel="Demo Search Field"
            id="searchField"
            className="searchField"
            onChange={({value}) => setValue(value)}
            placeholder="Search and explore"
            value={value}/>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"><FaBell className="NavBarIcon mx-1"/></Nav.Link>
            <Nav.Link href="#memes"><AiFillMessage className="NavBarIcon mx-1"/></Nav.Link>
            <Nav.Link> <Box paddingX={2}>
            <Avatar size="xs" src="https://i.ibb.co/ZfCZrY8/keerthi.jpg" name="Keerthi"/>
            </Box></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}
