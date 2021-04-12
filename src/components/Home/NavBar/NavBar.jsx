import React, {useState, useRef} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../../../assets/logoP.png';
import {SearchField, Box, Avatar, Dropdown} from 'gestalt';
import './NavBar.scss';
import {NavLink} from 'react-router-dom';
import {FaBell} from 'react-icons/fa';
import {AiFillMessage} from 'react-icons/ai';
import {withRouter, Link} from 'react-router-dom';
import { connect } from "react-redux";
import {getInfo} from '../../../api/request'
import ChatSheet from '../../ChatSheet/ChatSheet';

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch({type: "LOGIN", payload: user}),
  logout: ()=> dispatch({type: "LOGOUT"})
});

function NavBar(props) {
  const [shouldShow, setShouldShow] = React.useState(false);
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

    const empty=async()=>{
     setValue('');
     setUsers([])
     setPosts([])
    }
    const logout=async()=>{
      localStorage.clear();
      props.logout();
      props.history.push("/");
    }
 
  
    return (
    <>

        <Navbar collapseOnSelect className="NavBar" expand="lg" bg="light" variant="light">
         <NavLink className="navbar-link" to="/feed"><Navbar.Brand href="#home"><img src={logo} style={{width: "30px"}}/></Navbar.Brand></NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <NavLink activeClassName="selected"  className="navbar-link" to="/feed">Home</NavLink>
        <NavLink activeClassName="selected" className="navbar-link mx-1" to="/hi">Today</NavLink>
          <Nav className="mx-auto d-block">
          <SearchField
            accessibilityLabel="Demo Search Field"
            id="searchField"
            className="searchField"
            onChange={({value}) => getInfo(value, setValue, setUsers, setPosts)}
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
            <Nav.Link href="#memes"><AiFillMessage className="NavBarIcon mx-1" onClick={() => setShouldShow(!shouldShow)}/></Nav.Link>
            <Nav.Link   onClick={()=>setOpen(!open)}
            ref={anchorRef}
            accessibilityExpanded={open}> <Box paddingX={2} >
            <Avatar size="xs" src={props.user?.data.image ?? 'http://placehold.it/50x50'} name="Keerthi" 
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
      <ChatSheet setShouldShow={setShouldShow} shouldShow={shouldShow} />
      </>
    )
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));