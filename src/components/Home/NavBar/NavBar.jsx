import React, {useState, useEffect} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../../../assets/logoP.png';
import {SearchField, Box, Avatar, Dropdown} from 'gestalt';
import './NavBar.scss';
import {NavLink} from 'react-router-dom';
import {FaBell} from 'react-icons/fa';
import {AiFillMessage} from 'react-icons/ai';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import { connect } from "react-redux";


const mapStateToProps = (state) => state;

function NavBar(props) {
    const [value, setValue] = React.useState('');
    const userId= localStorage.getItem('id');
    const [user, setUser]= useState({})
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    if(value){
      if(document.querySelector('.black')){
        document.querySelector('.black').classList.add('blur')
      }
      document.body.classList.add('backdrop');
    }else{
      document.body.classList.remove('backdrop');
      if(document.querySelector('.black')){
        document.querySelector('.black').classList.remove('blur')
      }
    }
    const getUser=async()=>{
        try{
            const response = await axios(`http://localhost:3001/users/${userId}`, {withCredentials: true});
            const fetchedUser = await response.data;
              if (fetchedUser) {
                setUser(fetchedUser)
            }
        }catch(error){
            console.log(error)
        }
    }
    const logout=async()=>{
      localStorage.clear();
      props.history.push("/");
    }
    useEffect(() => {
     getUser()
    }, [props.user.changed])
  
    return (
        <Navbar collapseOnSelect className="NavBar" expand="lg" bg="light" variant="light">
         <NavLink className="navbar-link" to="/feed"><Navbar.Brand href="#home"><img src={logo} style={{width: "30px"}}/></Navbar.Brand></NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <NavLink activeClassName="selected"  className="navbar-link" to="/feed">Home</NavLink>
        <NavLink activeClassName="selected" className="navbar-link mx-1" to="/hi">Today</NavLink>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto d-block">
          <SearchField
            accessibilityLabel="Demo Search Field"
            id="searchField"
            className="searchField"
            onChange={({value}) => setValue(value)}
            placeholder="🔍 Search and explore"
            value={value}/>
         {value && <div className="mt-2 animate__animated animate__fadeIn animate__faster searchResult">
           <span>Blablabla</span>
          </div>}
          </Nav>
          <Nav>
            <Nav.Link href="#deets"><FaBell className="NavBarIcon mx-1"/></Nav.Link>
            <Nav.Link href="#memes"><AiFillMessage className="NavBarIcon mx-1"/></Nav.Link>
            <Nav.Link   onClick={ ()=>setOpen(!open) }
            ref={anchorRef}
            accessibilityExpanded={open}> <Box paddingX={2} >
            <Avatar size="xs" src={user?.image ?? 'http://placehold.it/50x50'} name="Keerthi" 
            />
              {open && (
                <div className="animate__animated animate__fadeIn">
        <Dropdown id="sections-dropdown-example" anchor={anchorRef.current} onDismiss={() => {setOpen(false)}}>
        <Dropdown.Section>
          <Dropdown.Item
            option={{ value: "Pin", label: "Go to profile" }}
            handleSelect={()=>props.history.push(`/profile/${userId}`)}
            />
           <Dropdown.Item
            option={{ value: "Pin", label: "Logout" }}
            handleSelect={()=>logout()}
            />
        </Dropdown.Section>
      </Dropdown>
            </div>
      )}
            </Box></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}
export default withRouter(connect(mapStateToProps)(NavBar));