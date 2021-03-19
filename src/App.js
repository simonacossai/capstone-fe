import 'bootstrap/dist/css/bootstrap.min.css';
import 'gestalt/dist/gestalt.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'animate.css'
import './App.css';
import RegistrationPage from './components/Registration/RegistrationPage/RegistrationPage';
import { messaging } from "./init-fcm";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Component} from 'react';
import Home from './components/Home/Home';
import NavBar from './components/Home/NavBar/NavBar';
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
      <Route exact path="/" component={RegistrationPage} />
          <NavBar/>
        </Router>
    </div>
  );
}
}

export default App;


