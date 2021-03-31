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
class App extends Component {

  componentDidMount=()=> {
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


  render(){
    if(this.props.location.pathname==="/"){
      document.body.style.overflow="hidden";
    }else{
      document.body.style.overflowY="unset";
    }
    return (
      <div className="App">
          <Route exact path="/" component={RegistrationPage} />
          {this.props.location.pathname !== "/" && <NavBar/>}
          <Route exact path="/feed" component={Home} />
          <Route exact path="/details/:id" component={Details} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/addPin" component={AddPinComponent} />
          <Route exact path="/modify" component={ModifyProfile} />
    </div>
  );
}
}

export default withRouter(App);


