import React, {useState} from 'react'
import {InputGroup, FormControl} from 'react-bootstrap';
import {FaUserCircle, FaFacebook} from 'react-icons/fa';
import {RiLockPasswordFill} from 'react-icons/ri';
import './RegistrationForm.scss'
import {Button} from 'gestalt';
import {FcGoogle} from 'react-icons/fc';
import {registrationHandler} from '../../../api/request';

export default function RegistrationForm(props) {
  const [inputData, setInputData] = useState({
    name:"",
    surname:"",
    username:"",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const inputDataHandler = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };

    return (
        <div className="RegistrationForm d-flex justify-content-center align-items-center w-100 px-5 pt-5 animate__animated animate__fadeInLeft">
          <form onSubmit={(e)=>registrationHandler(e, inputData, props, setLoading)}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default" className="prepend"><FaUserCircle/></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Default" placeholder="Enter your name.." id="name" className="RegisterInput"  
            name="name"
              value={inputData.name}
              onChange={(event) => inputDataHandler(event)}
            aria-describedby="inputGroup-sizing-default"/>
           </InputGroup>
           <InputGroup className="mb-3">
            <InputGroup.Prepend> <InputGroup.Text id="inputGroup-sizing-default" className="prepend"><FaUserCircle/></InputGroup.Text></InputGroup.Prepend>
            <FormControl aria-label="Default" placeholder="Enter your surname..." className="RegisterInput" 
              value={inputData.surname} name="surname"
              onChange={(event) => inputDataHandler(event)}
            aria-describedby="inputGroup-sizing-default"/>
           </InputGroup>
           <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default" className="prepend"><FaUserCircle/></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Default" placeholder="Enter a username..." className="RegisterInput"
              value={inputData.username} name="username"
              onChange={(event) => inputDataHandler(event)}
            aria-describedby="inputGroup-sizing-default"/>
           </InputGroup>
           <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default" className="prepend">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Default" placeholder="Enter your email..." className="RegisterInput" 
            type="email"
            value={inputData.email}
            name="email"
            onChange={(event) => inputDataHandler(event)}
            aria-describedby="inputGroup-sizing-default"/>
           </InputGroup>
           <InputGroup className="mb-3">
            <InputGroup.Prepend >
            <InputGroup.Text id="inputGroup-sizing-default" className="prepend"><RiLockPasswordFill/></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Default" type="password" placeholder="Enter your password..." className="RegisterInput" 
            value={inputData.password} name="password"
            onChange={(event) => inputDataHandler(event)}
            aria-describedby="inputGroup-sizing-default"/>
           </InputGroup>
           <Button size="md" text="Register" color="red" type="submit" className="RegisterButton" />
           <p className="py-2 m-0 font-weight-bold">OR</p>
           <a href="http://localhost:3001/users/googleLogin" className="w-100"> <button className="googleButton m-0" ><FcGoogle/> Continue with Google</button></a>
           <button className="googleButton m-0 mt-2"><FaFacebook className="fbIcon"/> Continua con Facebook</button>
           <button className="LogInButton m-0 mt-2" onClick={()=>props.setLogin(!props.login)}>Log in</button>
            </form>
        </div>
    )
}
