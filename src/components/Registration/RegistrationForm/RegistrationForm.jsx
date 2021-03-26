import React from 'react'
import {InputGroup, FormControl} from 'react-bootstrap';
import {FaUserCircle, FaFacebook} from 'react-icons/fa';
import {RiLockPasswordFill} from 'react-icons/ri';
import './RegistrationForm.scss'
import {Button} from 'gestalt';
import {FcGoogle} from 'react-icons/fc';

export default function RegistrationForm(props) {
    return (
        <div className="RegistrationForm d-flex justify-content-center align-items-center w-100 px-5 pt-5 animate__animated animate__fadeInLeft">
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default" className="prepend"><FaUserCircle/></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Default" placeholder="Enter your name.." id="name" className="RegisterInput"  aria-describedby="inputGroup-sizing-default"/>
           </InputGroup>
           <InputGroup className="mb-3">
            <InputGroup.Prepend> <InputGroup.Text id="inputGroup-sizing-default" className="prepend"><FaUserCircle/></InputGroup.Text></InputGroup.Prepend>
            <FormControl aria-label="Default" placeholder="Enter your surname..." className="RegisterInput" aria-describedby="inputGroup-sizing-default"/>
           </InputGroup>
           <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default" className="prepend"><FaUserCircle/></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Default" placeholder="Enter a username..." className="RegisterInput" aria-describedby="inputGroup-sizing-default"/>
           </InputGroup>
           <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default" className="prepend">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Default" placeholder="Enter your email..." className="RegisterInput" aria-describedby="inputGroup-sizing-default"/>
           </InputGroup>
           <InputGroup className="mb-3">
            <InputGroup.Prepend >
            <InputGroup.Text id="inputGroup-sizing-default" className="prepend"><RiLockPasswordFill/></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Default" type="password" placeholder="Enter your password..." className="RegisterInput" aria-describedby="inputGroup-sizing-default"/>
           </InputGroup>
           <Button size="md" text="Register" color="red"  className="RegisterButton"/>
           <p className="py-2 m-0 font-weight-bold">OR</p>
           <button className="googleButton m-0"><FcGoogle/> Continua con Google</button>
           <button className="googleButton m-0 mt-2"><FaFacebook className="fbIcon"/> Continua con Facebook</button>
           <button className="LogInButton m-0 mt-2" onClick={()=>props.setLogin(!props.login)}>Log in</button>
        </div>
    )
}
