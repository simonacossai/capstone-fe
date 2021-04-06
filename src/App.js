import 'bootstrap/dist/css/bootstrap.min.css';
import 'gestalt/dist/gestalt.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'animate.css'
import './App.css';
import RegistrationPage from './components/Registration/RegistrationPage/RegistrationPage';
import { messaging } from "./init-fcm";
import {Route, withRouter} from 'react-router-dom';
import {Component} from 'react';
import Home from './components/Home/Home';
import NavBar from './components/Home/NavBar/NavBar';
import Details from './components/PinDetails/Details/Details';
import Profile from './components/Profile/Profile';
import AddPinComponent from './components/AddPinComponent/AddPinComponent';
import ModifyProfile from './components/ModifyProfile/ModifyProfile';
import React, {useEffect} from 'react'
import { connect } from "react-redux";
import axios from 'axios';

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch({type: "LOGIN", payload: user}),
});

function App(props) {
  let userId = localStorage.getItem('id');

 const connect=()=> {
    messaging.requestPermission()
      .then(async function() {
        const token = await messaging.getToken();
        console.log(token);
      })
      .catch(function(err) {
        console.log("Unable to get permission to notify.", err);
      });
  navigator.serviceWorker.addEventListener("message", (message) => console.log(message));
  }

  const getUser=async()=>{
    try{
        const response = await axios(`http://localhost:3001/users/${userId}`, {withCredentials: true});
        const fetchedUser = await response.data;
          if (fetchedUser) {
            props.setUser(fetchedUser)
        }
    }catch(error){
        console.log(error)
    }
}
  useEffect(() => {
  connect()
  if(userId){
    getUser()
  }
  }, [])

  if(props.location.pathname==="/"){
    document.body.style.overflow="hidden";
  }else{
    document.body.style.overflowY="unset";
  }
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
