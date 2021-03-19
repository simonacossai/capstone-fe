import React from 'react'
import {InputGroup, FormControl} from 'react-bootstrap';
import {FaUserCircle, FaFacebook} from 'react-icons/fa';
import {RiLockPasswordFill} from 'react-icons/ri';
import './LoginForm.scss'
import {Button} from 'gestalt';
import {FcGoogle} from 'react-icons/fc';

export default function LoginForm(props) {
    return (
        <div className="LoginForm d-flex justify-content-center align-items-center w-100 px-5 pt-5">
           <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default" className="prepend">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Default" placeholder="Enter your email..." className="LoginInput" aria-describedby="inputGroup-sizing-default"/>
           </InputGroup>
           <InputGroup className="mb-3">
            <InputGroup.Prepend >
            <InputGroup.Text id="inputGroup-sizing-default" className="prepend"><RiLockPasswordFill/></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Default" type="password" placeholder="Enter your password..." className="LoginInput" aria-describedby="inputGroup-sizing-default"/>
           </InputGroup>
           <Button size="md" text="Login" color="red"  className="LoginButton"/>
           <p className="py-2 m-0 font-weight-bold">OR</p>
           <button className="googleButton m-0"><FcGoogle/> Continue with Google</button>
           <button className="googleButton m-0 mt-2"><FaFacebook className="fbIcon"/> Continue with Facebook</button>
           <button className="RegistrationButton m-0 mt-2" onClick={()=>props.setLogin(!props.login)}>Sign up</button>
        </div>
    )
}
