import 'bootstrap/dist/css/bootstrap.min.css';
import 'gestalt/dist/gestalt.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'animate.css'
import './App.css';
import RegistrationPage from './components/Registration/RegistrationPage/RegistrationPage';
import {Route, withRouter} from 'react-router-dom';
import Home from './components/Home/Home';
import NavBar from './components/Home/NavBar/NavBar';
import Details from './components/PinDetails/Details/Details';
import Profile from './components/Profile/Profile';
import AddPinComponent from './components/AddPinComponent/AddPinComponent';
import ModifyProfile from './components/ModifyProfile/ModifyProfile';
import React, {useEffect} from 'react'
import { connect } from "react-redux";
import axios from 'axios';
import {getCurrentUser, connectToFirebase} from './api/request';


const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch({type: "LOGIN", payload: user}),
  setLoading: (value) => dispatch({type: "SET_LOADING", payload: value}),
});


function App(props) {
  useEffect(async() => {
  connectToFirebase()
  let currentUserId = localStorage.getItem('id');
  let currentUser = await getCurrentUser(currentUserId);
  props.setUser(currentUser)
  }, [])

  if(props.location.pathname==="/"){
    document.body.style.overflow="hidden";
  }else{
    document.body.style.overflowY="unset";
  }

  axios.interceptors.request.use(request=>{
    return request;
  }, error=>{
   console.log(error);
   return Promise.reject(error);
  });

  axios.interceptors.response.use(response=>{
   return response;
  }, error=>{
   console.log(error);
   return Promise.reject(error);
  })
  
  return (
   
    <div className="App">
          <Route exact path="/" component={RegistrationPage} />
          {props.location.pathname !== "/" && <NavBar/>}
          <Route exact path="/feed" component={Home} />
          <div className="black animate__animated animate__fadeIn">
          <Route exact path="/details/:id" component={Details} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/addPin" component={AddPinComponent} />
          <Route exact path="/modify" component={ModifyProfile} />
          </div>
    </div>

  )
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
