import React,{useState, useHistory} from 'react'
import {InputGroup, FormControl} from 'react-bootstrap';
import {FaFacebook} from 'react-icons/fa';
import {RiLockPasswordFill} from 'react-icons/ri';
import './LoginForm.scss'
import {Button} from 'gestalt';
import {FcGoogle} from 'react-icons/fc';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import { connect } from "react-redux";


const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch({type: "LOGIN", payload: user}),
});


function LoginForm(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  
    const login = async ()=> {
    try{
      const res = await axios("http://localhost:3001/users/login", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          email, password
        }, withCredentials: true // use cookies
      })
      props.setUser(res.data)
      localStorage.setItem('id', res.data._id);
      props.history.push('/feed')
      }catch(e){
      console.log(e);
      alert(e);
    }
    }
  
    return (
        <div className="LoginForm d-flex justify-content-center align-items-center w-100 px-5 pt-5 animate__animated animate__fadeInLeft">
           <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default" className="prepend">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Default" placeholder="Enter your email..." className="LoginInput" aria-describedby="inputGroup-sizing-default" 
            value={email}
            onChange={e => setEmail(e.target.value)}/>
           </InputGroup>
           <InputGroup className="mb-3">
            <InputGroup.Prepend >
            <InputGroup.Text id="inputGroup-sizing-default" className="prepend"><RiLockPasswordFill/></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Default" type="password" placeholder="Enter your password..." className="LoginInput" 
            value={password}
            onChange={e => setPassword(e.target.value)}
            aria-describedby="inputGroup-sizing-default"/>
           </InputGroup>
           <Button size="md" text="Login" color="red"  className="LoginButton" onClick={login}/>
           <p className="py-2 m-0 font-weight-bold">OR</p>
          <a href="http://localhost:3001/users/googleLogin" className="w-100"> <button className="googleButton m-0" ><FcGoogle/> Continue with Google</button></a>
           <button className="googleButton m-0 mt-2"><FaFacebook className="fbIcon"/> Continue with Facebook</button>
           <button className="RegistrationButton m-0 mt-2" onClick={()=>props.setLogin(!props.login)}>Sign up</button>
        </div>
    )
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm))