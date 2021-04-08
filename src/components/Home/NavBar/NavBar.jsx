import React, {useState, useEffect, useRef} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../../../assets/logoP.png';
import {SearchField, Box, Avatar, Dropdown} from 'gestalt';
import './NavBar.scss';
import {NavLink} from 'react-router-dom';
import {FaBell} from 'react-icons/fa';
import {AiFillMessage} from 'react-icons/ai';
import axios from 'axios';
import {withRouter, Link} from 'react-router-dom';
import { connect } from "react-redux";


const mapStateToProps = (state) => state;

function NavBar(props) {
    const [value, setValue] = useState('');
    const userId= localStorage.getItem('id');
    const [user, setUser]= useState({})
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const [users, setUsers]=useState([])
    const [posts, setPosts]= useState([]);
    if(value.length>0){
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
    const empty=async()=>{
     setValue('');
     setUsers([])
     setPosts([])
    }
    const logout=async()=>{
      localStorage.clear();
      props.history.push("/");
    }
    useEffect(() => {
     getUser()
    }, [props.user.changed])


   const getInfo=async(value)=>{
      setValue(value)
      if(value.length>=3){
        try{
          const userRes = await axios(`http://localhost:3001/users?name=${value}`, {withCredentials: true});
          const postRes = await axios(`http://localhost:3001/posts?name=${value}`, {withCredentials: true});
            if (userRes.data && postRes.data) {
              setUsers(userRes.data)
              setPosts(postRes.data);
            }
      }catch(error){
          console.log(error)
      }
      }else{
        setUsers([])
        setPosts([])
      }
    }
  
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
            onChange={({value}) => getInfo(value)}
            placeholder="🔍 Search and explore"
            value={value} />
         {value.length>1 && <div className="mt-2 animate__animated animate__fadeIn animate__faster searchResultDiv text-left py-3">
           {users.length>0 && <span className="font-weight-bold pl-4">Users:</span>}
           {users?.map((e)=> {
             return(
               <Link to={`/profile/${e._id}`} onClick={()=>empty()} className="text-dark text-decoration-none"> 
              <div className="d-flex  align-items-center p-2 singleSearchResult"> 
               <Avatar size="sm" src={e?.image ?? 'http://placehold.it/50x50'} />
               <p className="font-weight-bold m-0 ml-2 p-0 text-dark">{e.username}</p>
              </div>
               </Link>
             )
           })}
          {posts.length>0 && <span className="font-weight-bold pl-4">Posts:</span>}
           {posts?.map((e)=> {
             return(
              <Link to={`/details/${e._id}`} onClick={()=>empty()} className="text-dark text-decoration-none"> 
               <div className="d-flex align-items-center p-2 postSearchResult"> 
               <img src={e?.img ?? 'http://placehold.it/50x50'}/>
                <p className="font-weight-normal text-left m-0 p-0 resultDescription">{e.description}</p>
                </div>
              </Link>
             )
           })}
           {value.length>=3 && users.length===0 && posts.length===0 && 
           <span className="font-weight-bold pl-4">No results found</span>}
          </div>}
          </Nav>
          <Nav>
            <Nav.Link href="#deets"><FaBell className="NavBarIcon mx-1"/></Nav.Link>
            <Nav.Link href="#memes"><AiFillMessage className="NavBarIcon mx-1"/></Nav.Link>
            <Nav.Link   onClick={()=>setOpen(!open)}
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
            handleSelect={()=>props.history.push(`/profile/${userId}`)}/>
           <Dropdown.Item
            option={{ value: "Pin", label: "Logout" }}
            handleSelect={()=>logout()}/>
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