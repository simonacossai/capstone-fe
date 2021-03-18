import 'bootstrap/dist/css/bootstrap.min.css';
import 'gestalt/dist/gestalt.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'animate.css'
import './App.css';
import RegistrationPage from './components/Registration/RegistrationPage/RegistrationPage';
import {useEffect} from 'react';
import { messaging } from "./init-fcm";
import {BrowserRouter as Router} from 'react-router-dom';
import {Component} from 'react';

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
    return (
      <div className="App">
        <Router>
      <RegistrationPage/>
        </Router>
    </div>
  );
}
}

export default App;


